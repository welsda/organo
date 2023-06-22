import './CampoTexto.css';

export const CampoTexto = (props) => {
    // Exemplo de utilização de template string que poderia ser
    // adicionada como parâmetro para o campo placeholder
    // const placeholderModificada = `${props.placeholder}...`

    // Os parênteses para return são geralmente utilizados para quando
    // mais de uma linha de código deve ser retornada pela função
    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value);
    }

    return (
        <div className='campo-texto'>
            <label>{props.label}</label>
            <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={props.placeholder}/>
        </div>
    )
}