import Layout from '../components/Layout'
import Tabela from '../components/Tabela'
import Client from '../core/Client'


export default function Home() {
  
  const clientes = [
    new Client('Joao', 25, 'joao.example@hmail.com', 28999658399),
    new Client('Pedro', 25, 'pedro.example@hmail.com', 28999653682),
    new Client('Joana', 18, 'joana.example@hmail.com', 28999651026),
    new Client('maria', 35, 'maria.example@hmail.com', 28999650963),
    new Client('fernanda', 22, 'fernanda.example@hmail.com', 28999651697),
  ]


  return (
    <div className="`
    flex h-screen justify-center items-center
    `">
      <Layout titulo="Cadastramento">
        <span>
          <Tabela clientes ={clientes}></Tabela>
        </span>
      </Layout>
      
    </div>
  )
}
