import React from 'react'

class Aluno extends React.Component{
    constructor(props){
        super(props);

        this.state={
            aluno: [
                {    
                nome: 'Cleiton',
                idade: 19,
                polo: 'complexo do alemão',
                },
                
                {
                nome: 'luan',
                idade: 25,
                polo: 'complexo do alemão',
                },
            
                {
                nome: 'Arthur',
                idade: 24,
                polo: 'complexo do alemão',
                },
            
                {
                nome: 'Maicon',
                idade: 23,
                polo: 'complexo do alemão',
                },
            
                {
                nome: 'Jorge',
                idade: 58,
                polo: 'complexo do alemão',
                },
            
                {
                nome: 'Lucas',
                idade: 24,
                polo: 'complexo do alemão',
                },
            
                {
                nome: 'Victor',
                idade: 24,
                polo: 'complexo do alemão',
                },
            
                {
                nome: 'Geysa',
                idade: 20,
                polo: 'prazeres'
                },
            
                {
                nome: 'Carol',
                idade: 19,
                polo: 'prazeres'
                },
            
                {
                nome: 'Estefania',
                idade: 22,
                polo: 'prazeres'
                },
            
                {
                nome: 'Zaira',
                idade: 19,
                polo: 'prazeres'
                },
            
                {
                nome: 'Rayssa',
                idade: 21,
                polo: 'complexo do alemão'
                },
            
                {
                nome: 'Cícero',
                idade: 24,
                polo: 'prazeres'
                },
            
                {
                nome: 'Renan',
                idade: 15,
                polo: 'prazeres'
                },
                
                {
                nome: 'Rhuan',
                idade: 20,
                polo: 'prazeres'
                },
            
                {
                nome: 'Cassio',
                idade: 21,
                polo: 'prazeres',
                }
            ] 
        } 
     }        
 }


 listarAlunos = () => {
    this.state.alunos.map(item => {
        console.log(item.nome);
        return null;
    })
}
render() {
    return (
        <button onClick={this.listarAlunos}>START</button>
    )
    }
}