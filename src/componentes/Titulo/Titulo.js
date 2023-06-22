import './Titulo.css';

export const Titulo = (props) => {
    return (
        props.colaboradores.length > 0 && <div className='titulo'>
            <h1>Minha Organização</h1>
            <span></span>
        </div>
    )
}
