import './Botao.css';

export const Botao = (props) => {
    return (
        <button className='botao'>
            {props.children}
        </button>
    )
}

// Ao utilizar children temos acesso esse componente terá
// acesso a qualquer outro componente que for colocado 
// entre sua abertura e fechamento de tag