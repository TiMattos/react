import Item from "./Item.js"

function List (){
return (
<>
<h1>Minha Lista</h1>
<ul>
    <Item marca="HONDA" ano_lancamento={2020}/>
    <Item marca="TOYOTA" ano_lancamento={2021}/>
    <Item marca="Chevrolet" ano_lancamento={2000}/>
    <Item/>
</ul>
</>
)
}

export default List

