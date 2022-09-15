
import Botao from '../components/Botao'
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


 function clienteSelecionado(cliente: Client) {
  console.log(cliente.nome)
 }

 function clienteExcluido(cliente: Client) {
  console.log(cliente.nome)
 }

  return (
    <div className="`
    flex h-screen justify-center items-center
    `">
      <Layout titulo="Cadastramento">
        <div className="flex justify-end  mb-4">
          <Botao>Novo Cliente</Botao>
        </div>
          <Tabela clientes ={clientes} clienteSelecionado = {clienteSelecionado}  clienteExcluido = {clienteExcluido}></Tabela>
      </Layout>
    </div>
  )
}
