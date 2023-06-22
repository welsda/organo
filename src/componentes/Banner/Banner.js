import './Banner.css';
// A forma para criação de componentes a seguir é mais utiliza pelas empresas,
// tendo o mesmo resultado que a utilização de function, que não é tão comum
export const Banner = () => {
    // JSX é a forma como o React cria funções as retornando como se fossem elementos do DOM
    return (
        // Devemos usar className para nomear classes em React ao invés de class se fosse em html puro
        <header className='banner'>
            <img src='/imagens/banner.png' alt='O banner principal da página do Organo'/>
        </header>
    )
}

// Fragment ou <> são macetes que podem ser usados para englobar
// componentes com elementos que não estão encapsualdos em um
// elemento pai, como mostra o exemplo a seguir, fazendo com que
// eles não apareçam dentro de um elemento pai criado nesse arquivo
// <Fragment>
//      <header className='banner'>
//          <img src='/imagens/banner.png' alt='O banner principal da página do Organo'/>
//      </header>
//      <p>Exemplo</p>
// </Fragment>




