import './ListaSuspensa.css';

export const ListaSuspensa = (props) => {
    return (
        <div className='lista-suspensa'>
            <label>{props.label}</label>
            <select onChange={evento => props.aoAlterado(evento.target.value)} required={props.obrigatorio} value={props.valor}>
                {props.itens.map(item => {
                    return <option key={item}>{item}</option>
                })}
            </select>
        </div>
    )
}

// É possível reproduzir o mesmo resultado mostrado 
// das linhas 8 a 10 da seguinte forma:
// {props.itens.map(item => <option key={item}>{item}</option>)}

// Além disso, poderia ser adicionado o índice do elemento
// do array na função map, como mostrado a seguir:
// {props.itens.map((item, index) => <option key={index}>{item}</option>)}