import { BaseLevel } from "../../components/BaseLevel"
import { useComment } from "../../hooks/useComment"

function Atena() {
  return (
    <BaseLevel imagePath="deusa.jpg">
      {useComment('Qual é essa deusa?')}
    </BaseLevel>   
  )
}

export default Atena
