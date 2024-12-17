import { BaseLevel } from "../../components/BaseLevel"
import { useComment } from "../../hooks/useComment"

function Gtank() {
  return (
    <BaseLevel imagePath="moto.jpg">
      {useComment('Qual é essa deusa?')}
    </BaseLevel>   
  )
}

export default Gtank
