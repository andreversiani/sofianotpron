import { BaseLevel } from "../../components/BaseLevel"
import { useComment } from "../../hooks/useComment";

function EstrelaCadente() {
  return (
    <BaseLevel imagePath="estrela-cadente.gif" imageText="1">
      {useComment('Os nomes possuem significados')}    
    </BaseLevel>
  )
}

export default EstrelaCadente
