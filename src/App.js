import React from 'react'; 
import './App.css';

import Menu from './components/Menu';

class App extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            imagem: [
                'logo 01',
                'logo 02',
                'logo 03',
            ],
            renderizado: '',
        };
    }
 
render() {
    return(
        <div className="App">
             <Menu imagem={this.state.imagem}/>
        </div>
    ); 
  }
 }
export default App;
