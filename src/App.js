// Por padrão, se houver um index na pasta ele é lido mesmo que
// não seja especificado no path para o arquivo, sendo o padrão
// para a maioria das empresas
import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';
import { Rodape } from './componentes/Rodape/Rodape';
import Titulo from './componentes/Titulo';

function App() {
  const times = [
    {
      nome: 'Programação',
      corPrimaria: '#57C278',
      corSecundaria: '#D9F7E9'
    },
    {
      nome: 'Front-End',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF'
    },
    {
      nome: 'Data Science',
      corPrimaria: '#A6D157',
      corSecundaria: '#FOF8E2'
    },
    {
      nome: 'Devops',
      corPrimaria: '#EO6869',
      corSecundaria: '#FDE7E8'
    },
    {
      nome: 'UX e Design',
      corPrimaria: '#DB6E8F',
      corSecundaria: '#FAE9F5'
    },
    {
      nome: 'Mobile',
      corPrimaria: '#FFBA05',
      corSecundaria: '#FFF5D9'
    },
    {
      nome: 'Inovação e Gestão',
      corPrimaria: '#FFBA29',
      corSecundaria: '#FFEEDF'
    }
  ];

  const [colaboradores, setColaboradores] = useState([]);
  
  const aoNovoColaboradorCadastrado = (colaborador) => {
    // ferramenta para debugar abaixo
    // debugger
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className='App'>
      <Banner/>
      <Formulario 
        times={times.map(time => time.nome)} 
        aoColaboradorCadastrado={colaborador => aoNovoColaboradorCadastrado(colaborador)}
      />
      <Titulo colaboradores={colaboradores}/>
      {times.map(time => {
        return (
          <Time 
            key={time.nome} 
            nome={time.nome} 
            corPrimaria={time.corPrimaria} 
            corSecundaria={time.corSecundaria}
            colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
          />
        )
      })}
      <Rodape/>
    </div>
  );
}

export default App;
