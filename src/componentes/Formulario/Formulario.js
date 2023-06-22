import { useState } from 'react';
import Botao from '../Botao';
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import './Formulario.css';

export const Formulario = (props) => {
    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [imagem, setImagem] = useState('');
    const [time, setTime] = useState('');

    const nomesDosTimes = ['Selecione uma opção', ...props.times];
    const campos = [
        { 
            label: 'Nome', 
            placeholder: 'Digite seu nome', 
            stateFunction: (valor) => setNome(valor), 
            stateValue: nome
        },
        { 
            label: 'Cargo', 
            placeholder: 'Digite seu cargo', 
            stateFunction: (valor) => setCargo(valor), 
            stateValue: cargo
        },
        { 
            label: 'Imagem', 
            placeholder: 'Informe o endereço da imagem', 
            stateFunction: (valor) => setImagem(valor), 
            stateValue: imagem
        }
    ];

    const aoSalvar = (evento) => {
        evento.preventDefault();
        props.aoColaboradorCadastrado({ 
            nome, 
            cargo, 
            imagem, 
            time 
        });

        setNome('');
        setCargo('');
        setImagem('');
        setTime('');
    }

    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                {campos.map(campo => {
                    return (
                        <CampoTexto 
                            key={campo.label}
                            obrigatorio={campo.label === 'Imagem' ? false :true} 
                            label={campo.label}
                            placeholder={campo.placeholder}
                            valor={campo.stateValue}
                            aoAlterado={valor => campo.stateFunction(valor)} 
                        />
                    )
                })}
                <ListaSuspensa 
                    obrigatorio={true} 
                    label='Time' 
                    itens={nomesDosTimes} 
                    valor={time}
                    aoAlterado={valor => setTime(valor)}
                />
                <Botao>
                    Criar card
                </Botao>
            </form>
        </section>
    )
}

// Na linha 23, a função poderia ser passada da seguinte forma para
// o campo caso fosse necessário passar algum parâmetro para ela
// <form onSubmit={() => aoSalvar()}>

// A forma a seguir é maior e mais repetitiva, mas também poderia
// ser utilizada no lugar do código que vai da linha 37 a 48
// <CampoTexto 
//     obrigatorio={true} 
//     label='Nome' 
//     placeholder='Digite seu nome'
//     valor={nome}
//     aoAlterado={valor => setNome(valor)} 
// />
// <CampoTexto 
//     obrigatorio={true} 
//     label='Cargo' 
//     placeholder='Digite seu cargo'
//     valor={cargo} 
//     aoAlterado={valor => setCargo(valor)}
// />
// <CampoTexto 
//     label='Imagem' 
//     placeholder='Informe o endereço da imagem' 
//     valor={imagem} 
//     aoAlterado={valor => setImagem(valor)}
// />

