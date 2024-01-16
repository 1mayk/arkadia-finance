import "../styles/link.css";

interface ArkadiaLinkProps {
  arkadiaTitle: string;
  linkAddress: string;
}

export default function ArkadiaLink(props: ArkadiaLinkProps) {
  return (
    <a href={props.linkAddress}  className="arkadia__address glass">
      <div className="arkadia__link">{props.arkadiaTitle}</div>
    </a>
  );
}
