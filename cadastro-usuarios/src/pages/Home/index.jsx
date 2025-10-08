
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
        <input placeholder='Nome' name='name' type='text' />
        <input placeholder='Idade' name='age' type='text' />
        <input placeholder='E-mail' name='email' type='email' />
        <button type='button'>Cadastrar</button>
      </form>

      {users.map(user => (
        <div key={user.id} className='card'>
          <div>
            <p>Nome: <span>{user.name}</span></p>
            <p>Idade: <span>{user.age}</span></p>
            <p>Email: <span>{user.email}</span></p>
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
