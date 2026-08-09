<?php

declare(strict_types=1);

use PHPMailer\PHPMailer\PHPMailer;

header('Content-Type: application/json; charset=utf-8');

function antwort(int $status, array $daten): void
{
    http_response_code($status);
    echo json_encode($daten, JSON_UNESCAPED_UNICODE);
    exit;
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    antwort(405, ['ok' => false, 'error' => 'Methode nicht erlaubt.']);
}

$configPfad = __DIR__ . '/kontakt-config.php';
if (!is_file($configPfad)) {
    antwort(500, ['ok' => false, 'error' => 'Die Serverkonfiguration ist unvollständig.']);
}
$config = require $configPfad;

// Honeypot: Bots füllen das unsichtbare Feld — stillschweigend verwerfen
if (trim((string) ($_POST['firma'] ?? '')) !== '') {
    antwort(200, ['ok' => true]);
}

// Zeitcheck: Absenden unter 3 Sekunden nach Seitenaufruf verwerfen
$dauer = (string) ($_POST['dauer'] ?? '');
if ($dauer === '' || !ctype_digit($dauer) || (int) $dauer < 3000) {
    antwort(400, ['ok' => false, 'error' => 'Bitte senden Sie das Formular erneut ab.']);
}

$name        = trim((string) ($_POST['name'] ?? ''));
$email       = trim((string) ($_POST['email'] ?? ''));
$telefon     = trim((string) ($_POST['telefon'] ?? ''));
$datum       = trim((string) ($_POST['datum'] ?? ''));
$anlass      = trim((string) ($_POST['anlass'] ?? ''));
$personen    = trim((string) ($_POST['personen'] ?? ''));
$nachricht   = trim((string) ($_POST['nachricht'] ?? ''));
$datenschutz = (string) ($_POST['datenschutz'] ?? '');

if ($name === '' || $email === '' || $nachricht === '' || $datenschutz === '') {
    antwort(400, ['ok' => false, 'error' => 'Bitte füllen Sie alle Pflichtfelder aus.']);
}
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    antwort(400, ['ok' => false, 'error' => 'Bitte geben Sie eine gültige E-Mail-Adresse an.']);
}

require __DIR__ . '/phpmailer/Exception.php';
require __DIR__ . '/phpmailer/PHPMailer.php';
require __DIR__ . '/phpmailer/SMTP.php';

$zeile = static function (string $label, string $wert): string {
    return $wert === '' ? '' : $label . ': ' . $wert . "\n";
};

$body =
    $zeile('Name', $name) .
    $zeile('E-Mail', $email) .
    $zeile('Telefon', $telefon) .
    $zeile('Datum des Events', $datum) .
    $zeile('Anlass', $anlass) .
    $zeile('Personenzahl (ca.)', $personen) .
    "\nNachricht:\n" . $nachricht . "\n";

$mailer = new PHPMailer(true);

try {
    $mailer->isSMTP();
    $mailer->Host       = (string) $config['smtp_host'];
    $mailer->SMTPAuth   = true;
    $mailer->Username   = (string) $config['smtp_user'];
    $mailer->Password   = (string) $config['smtp_pass'];
    $mailer->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
    $mailer->Port       = (int) $config['smtp_port'];
    $mailer->CharSet    = 'UTF-8';
    $mailer->setFrom((string) $config['from'], 'Bucan GmbH Website');
    $mailer->addAddress((string) $config['to']);
    $mailer->addReplyTo($email, $name);
    $mailer->Subject = 'Neue Event-Anfrage über die Website';
    $mailer->isHTML(false);
    $mailer->Body = $body;
    $mailer->send();
    antwort(200, ['ok' => true]);
} catch (Throwable $fehler) {
    antwort(500, [
        'ok'    => false,
        'error' => 'Ihre Anfrage konnte leider nicht gesendet werden. Bitte versuchen Sie es erneut.',
    ]);
}
