import { useEffect } from "react"
import { useComment } from "../../hooks/useComment"

export const Home = () => {
  useEffect(() => {
    document.title = 'Notpron'
  })
  return (
    <div >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <img src="/backgrounds/logo.jpg"></img>
      </div>

      <div>
        <h3>Sobre o Jogo</h3>
        <ul>
          <li>
            <div style={{display: 'flex'}}>
              O jogo foi inspirado no Notpron. Portanto, 
              mecânicas como analisar o código fonte da página, checar matadados de arquivos, criptografia... podem ser essenciais;
            </div>
          </li>
          <li>
            <div>
              Os níveis foram desenvolvidos com intuito de manter o padrão do jogo original mas, ao mesmo tempo, incluir temas relevantes;
            </div>
          </li>
          <li>
            <div>
              Vale ressaltar que os níveis não foram pensados para apresentar um alto grau de dificuldade. A ideia do jogo não é ser difícil mas sim ser uma experiência diferenciada;
            </div>
          </li>
          <li>
            <div>
              A navegação dos níveis é realizada apenas por URL. Ela sempre possui o formato de 2 palavras separadas por "/", 
                assim como no Notpron. Um exemplo seria "...nivel1/level1";
            </div>
          </li>
          <li>
            <div>
              Deve-se jogar tudo de uma vez. Portanto, certifique-se de possuir no pelo menos 3 horas livres;
            </div>
          </li>
          <li>
            <div>
              Esse projeto foi desenvolvido com muito carinho e amor. Espero que goste!;
            </div>
          </li>
          <li>
            <div>
              Você já sabe tudo o que precisa para começar.
            </div>
          </li>
        </ul>
      </div>

    <div style={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
      <div style={{fontSize: '30px'}}>0001</div>
      <div>{`visitantes desde 13/09/2024`}</div>
    </div>
    {useComment('sofianotpron.vercel.app/pessoa/sofia')}
    </div>
  )
}