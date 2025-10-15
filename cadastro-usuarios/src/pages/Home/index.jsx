import { useEffect, useState } from 'react'
import './styles.css'
import Trash from '../../assets/trash.jpeg'
import api from '../../services/api'

function Home() {

  const [users, setUsers] = useState([])


  async function getUsers() {
    try {
      const response = await api.get('/users')
      setUsers(response.data)
      console.log(response.data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getUsers()
  }, [])

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
