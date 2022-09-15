


export default function Botao(props){
    return(


<button className={`
bg-gradient-to-r from-emerald-400 to-emerald-900 
text-gray-100 px-4 py-3 rounded-full

`}>
    {props.children}

</button>
    )

}