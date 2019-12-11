import React from 'react';
// import logo from './logo.svg';
// import  './App.css';
// import Aluno from  './components/Aluno';
class Menu extends React.Component{
    render(){
        return( 
        <div>
        <p>&#9776;</p>
        {this.props.imagem.map(imagem => { 
            return(
                <p>{imagem}</p>
            )
            })}    
        </div>
        )
    }
}

export default Menu;