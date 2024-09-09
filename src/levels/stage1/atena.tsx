import { BaseLevel } from "../../components/BaseLevel"
import { useComment } from "../../hooks/useComment"

function Atena() {
  return (
    <BaseLevel imagePath="deusa.jpg" imageText="1">
      {useComment('Deusa?')}
    </BaseLevel>   
  )
}

export default Atena
