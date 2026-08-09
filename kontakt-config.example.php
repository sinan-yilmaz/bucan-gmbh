<?php

/**
 * SMTP-Zugangsdaten für das Kontaktformular (Vorlage).
 *
 * Als "public/kontakt-config.php" kopieren und echtes Postfach-Passwort
 * eintragen. Die Kopie ist gitignored und wird beim Build automatisch
 * nach "out/" übernommen.
 */

return [
    'smtp_host' => 'smtp.strato.de',
    'smtp_port' => 465,
    'smtp_user' => 'info@bucan-eventservice.de',
    'smtp_pass' => 'HIER-DAS-POSTFACH-PASSWORT-EINTRAGEN',
    'from'      => 'info@bucan-eventservice.de',
    'to'        => 'info@bucan-eventservice.de',
];
