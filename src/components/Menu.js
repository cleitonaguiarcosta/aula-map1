import React from 'react';
// import logo from './logo.svg';
// import  './App.css';
// import Aluno from  './components/Aluno';
class Menu extends React.Component{
    clique = (eventos) => {
        console.log('passando')
        this.props.alteracoes(eventos);
    }
    render(){
        return( 
        <div>
             <p>&#9776;</p>
            {this.props.eventos.map(eventos => { 
            return(
            <p onClick={() => this.clique(eventos)} key={eventos>}>{eventos}</p>
            )
            })}    
        </div>
        )
    }
}
}

export default Menu;