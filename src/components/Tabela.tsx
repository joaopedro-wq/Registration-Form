import Client from "../core/Client";
import { iconEdit, iconTrash } from "./Icons"


interface tabelaProps{
    clientes : Client[]
    clienteSelecionado?:(cliente: Client) => void
    clienteExcluido?:(cliente: Client) => void
}


export default function Tabela (props: tabelaProps){

    const exibirIcons = props.clienteExcluido  || props.clienteSelecionado 
    
    function rederizarTitulos(){
        return (
            
        <tr>
            <th className="text-left p-4" > Nome  </th>
            <th className="text-left p-4"> Idade </th>
            <th className="text-left p-4"> Email </th>
            <th className="text-left p-4"> Telefone  </th>
            {exibirIcons ? <th className="p-4">Ações</th> : false
            }
        </tr>
    )}

    function rederizarDados(){
       return props.clientes?.map((cliente, i) =>{
        return (
            <tr key={cliente.id}
            className={`${i % 2 === 0 ? 'bg-purple-200' : 'bg-purple-100' }`}>
                <td className="text-left p-4" >{cliente.nome}</td>
                <td className="text-left p-4">{cliente.idade}</td>
                <td className="text-left p-4">{cliente.email}</td>
                <td className="text-left p-4">{cliente.telefone}</td>
                { exibirIcons ? rederizarIcons(cliente): false}
            </tr>
            )
        })
    }

    function rederizarIcons(cliente: Client){
        return (
            <td className="flex justify-center">
                {props.clienteSelecionado ? (
                    <button onClick={()=> props.clienteSelecionado?.(cliente)} className={`
                     flex justify-center items-center 
                     text-green-900 rounded-full m-1 p-2
                     hover:bg-purple-300`}>{iconEdit}</button>
                    ):false} 
                    {props.clienteExcluido ? (
                        <button onClick={()=> props.clienteExcluido?.(cliente)} className={`
                        flex justify-center items-center 
                        text-red-700 rounded-full m-1 p-2
                        hover:bg-purple-300`}>{iconTrash}</button>
                    ):false
                }
            </td>
        )
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