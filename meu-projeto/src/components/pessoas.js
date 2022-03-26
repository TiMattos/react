import styles from './pessoas.module.css'

function Pessoas({nome,idade,profissao,foto}){
    return (
<div className={styles.fraseContainer}>
<img src={foto} alt={nome}/>
<h2 className={styles.fraseContent}>Nome: {nome}</h2>
<p>Idade: {idade}</p>
<p>Profissão: {profissao}</p>
</div>
    
    )
}

export default Pessoas