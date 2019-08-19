import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const MostrarI = (props) => {
    return <p>{props.i}</p>
}


function App(props){
    //ENTRADA RODANDO FIM
    const [estado, setEstado] = useState('ENTRADA')

    //palpite
    const [palpite, setPalpite] = useState(150);
    const [qtdPalpites, setQtdPalpites] = useState(1);
    const [min, setMin] = useState(0);
    const [max, setMax] = useState(300); 

    const iniciarJogo = () => {
        setEstado('RODANDO');
        setMin(0);
        setMax(300);
        setQtdPalpites(1);
        setPalpite(150);
    }

    if (estado === 'ENTRADA'){
        return <p><button onClick={iniciarJogo}>comecar a jogar</button></p>
    }

    const diminuirValorPalpite = () => {
        setQtdPalpites(qtdPalpites + 1);
        setMax(palpite);
        const proxPalpite = parseInt((palpite - min) / 2) + min;
        setPalpite(proxPalpite);
    }

    const aumentarValorPalpite = () => {
        setQtdPalpites(qtdPalpites + 1);
        setMin(palpite);
        const proxPalpite = parseInt((max - palpite) / 2) + palpite;
        setPalpite(proxPalpite);
    }

    const finalizar = () => {
        setEstado('FIM');
    }

    if (estado == 'FIM'){
        return <div>
            <p> Acertei o numero {palpite} com  {qtdPalpites} chutes</p>
            <button onClick={iniciarJogo}>comecar a jogar novamente</button>
        </div>

    }

    return (
        <div classname="App">
        <h1>O seu numero é {palpite} ?</h1>
        <button onClick={diminuirValorPalpite}> Menor ! </button>
        <button onClick={finalizar}> Acertou ! </button>
        <button onClick={aumentarValorPalpite}> Maior ! </button>
       </div>
    );
}


const rootElement = document.getElementById('root');
ReactDOM.render(<App name="DevPleno" />, rootElement);

