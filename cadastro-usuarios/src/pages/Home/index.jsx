
import './styles.css'
import Trash from '../../assets/trash.png'

function Home() {

  return (

    <div className='container'>
      <form>
        <h1>Cadastro de Usuários</h1>
        <input name='name' type='text' />
        <input name='age' type='number' />
        <input name='email' type='email' />
        <button type='button'>Cadastrar</button>
      </form>

      <div>
        <p>Nome: </p>
        <p>Idade: </p>
        <p>Email: </p>
      </div>
      <button>
        <img src="{Trash}" />
      </button>
    </div>



  )
}

export default Home
