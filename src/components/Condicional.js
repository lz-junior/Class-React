import {useState} from 'react'

function Condicional() {

  const [email, setEmail] = useState()
  const [userEmail, setUserEmail] = useState()

  function enviarEmail(e) {
    e.preventDefault()
    setUserEmail(email)
  }


  function limparEmail() {
    setUserEmail('')
  }

  return (
    <h2>Cadastre o seu e-mail:
      <form>
        <input
          type="email"
          placeholder="Digite o seu email..."
          onChange={(e) => setEmail(e.target.value)}/>
        <button type="submit" onClick={enviarEmail}>Enviar-email</button>
       
        {/* Aqui estamos validando o email do usuário.
        Queremos dizer no código abaixo que se existe um valor de email no "userEmail" (se "userEmail" for true)
        então... faça tal código*/}
        {userEmail && (
          <div>
            <p>O e-mail do usuário é: {userEmail}</p>
            <button onClick={limparEmail}>Limpar e-mail</button>
            {/* Usamos esse botão com essa função para limpar o setUserEmail e consequentemente,
            faz com que essa própria validação seja falsa e suma, limpando também a tela*/}
          </div>
        )}
      </form>
    </h2>
  )
}
export default Condicional