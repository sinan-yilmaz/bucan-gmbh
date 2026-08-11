import { a11y } from "core/consts/content";

function SkipLink() {
  return (
    <a href="#inhalt" className="skip-link">
      {a11y.zumInhalt}
    </a>
  );
}

export default SkipLink;
