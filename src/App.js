import React from 'react';
import logo from './logo.svg';
import  './App.css';
import Aluno from  './components/Aluno';

function App(){
    return( 
        <div className="App-header">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <Aluno></Aluno>
            </header>
       </div>
    );
}
export default App;