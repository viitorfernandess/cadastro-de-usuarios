
import './styles.css'
import Trash from '../../assets/trash.jpeg'

function Home() {

  const users = [{
    id: '23484923riocdcm',
    name: 'Vitor',
    age: 27,
    email: ' vitor@email.com'
  },
  {
    id: '23484923rcecdcm',
    name: 'Lucas',
    age: 27,
    email: 'lucas@email.com'
  }]

  return (

    <div className='container'>
      <form>
        <h1>Cadastro de Usuários</h1>
        <input name='name' type='text' />
        <input name='age' type='number' />
        <input name='email' type='email' />
        <button type='button'>Cadastrar</button>
      </form>

      {users.map(user => (
        <div key={user.id}>
          <div>
            <p>Nome:{user.name}</p>
            <p>Idade:{user.age}</p>
            <p>Email:{user.email}</p>
          </div>
          <button>
            <img src="{Trash}" />
          </button>
        </div>

      ))}


    </div>


  )
}

export default Home
