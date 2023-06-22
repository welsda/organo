import './Colaborador.css';

export const Colaborador = ({ nome, imagem, cargo, corDeFundo }) => {
    return (
        <div className='colaborador'>
            <div className='cabecalho' style={{ backgroundColor: corDeFundo }}>
                <img src={imagem} alt={nome}/>
            </div>
            <div className='rodape'>
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
            </div>
        </div>
    )
}

// Além de props, podemos também usar desestruturação de objetos
// como foi feito acima para colher as propriedades que são
// enviadas para um componente