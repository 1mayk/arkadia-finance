import '../styles/link.css'

interface ArkadiaLinkProps {
  arkadiaNumber: number;
}

export default function ArkadiaLink(props: ArkadiaLinkProps) {
  return (
    <div className='arkadia__link'>Link {props.arkadiaNumber}</div>
  )
}
