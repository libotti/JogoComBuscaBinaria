import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';


function App(props){
    const [i, setI] = useState(1)

    const increment = () => {
        setI(i+ 1)
    }

    return (
        <div classname="App">
        <h1>Ola {props.name} {i}</h1>
        <button onClick={increment}> Incrementar </button>
        </div>
    );
}


const rootElement = document.getElementById('root');
ReactDOM.render(<App name="DevPleno" />, rootElement);

