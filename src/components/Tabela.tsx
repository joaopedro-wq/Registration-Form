import Client from "../core/Client";


interface tabelaProps{
    clientes : Client[]

}


export default function Tabela (props: tabelaProps){
    function rederizarTitulos(){
        return (
            
        <tr>
            <th className="text-left p-4" > Nome  </th>
            <th className="text-left p-4"> Idade  </th>
            <th className="text-left p-4"> Email  </th>
            <th className="text-left p-4"> Telefone  </th>
            <th className="p-4">Ações</th>
            
        </tr>
        )

    }
    function rederizarDados(){
       return props.clientes?.map((cliente, i) =>{
        return (
            <tr key={cliente.id}
            className={`${i % 2 === 0 ? 'bg-purple-200' : 'bg-purple-100' }`}>
                <td className="text-left p-4" >{cliente.nome}</td>
                <td className="text-left p-4">{cliente.idade}</td>
                <td className="text-left p-4">{cliente.email}</td>
                <td className="text-left p-4">{cliente.telefone}</td>
                <td className="p-4"></td>
            </tr>
            )
        })
    }

    return (
    <table className="w-full rounded-2xl overflow-hidden">
    <thead className={`
        text-gray-100
        bg-gradient-to-r from-blue-500 to-blue-900
    `}>
        {rederizarTitulos()}
    </thead>
    <tbody>
        {rederizarDados()}
    </tbody>
    </table>
    )
}