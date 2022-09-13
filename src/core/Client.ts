export default class Client {
#id : string
#nome : string
#idade : number
#email : string
#telefone: number


constructor(nome: string, idade: number, email: string, telefone: number, id = null){
    this.#nome  = nome
    this.#idade = idade
    this.#email = email
    this.#telefone = telefone
    this.#id = id

}

static vazio (){

    return new Client('', 0, '',  0)

}

get id(){
    return this.#id
}

get nome(){
    return this.#nome
}


get idade(){
    return this.#idade
}


get email(){
    return this.#email
}


get telefone(){
    return this.#telefone
}

}
