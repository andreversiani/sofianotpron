import { BaseLevel } from "../../components/BaseLevel"
import { useComment } from "../../hooks/useComment"

function Fake() {
  return (
    <BaseLevel imagePath="fimfalso.png" title="FIM?">
        {useComment('FIM?')}
    </BaseLevel>
  )
}

export default Fake
