function Form(){

function cadastroUsuario(e){
    e.preventDefault()
    console.log("Usuario cadastrado.")
}

return(
    <div>
        <h1>Meu Cadastro: </h1>
        <form onSubmit={cadastroUsuario}>
            <div>
            <input type="text" placeholder="Digite seu nome: " />
            </div>
    <div>
        <input type="submit" value="Cadastrar" /> 
            </div>
        </form>

    </div>
)
}

export default Form

