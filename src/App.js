import React from 'react'; 
import './App.css';

import Menu from './components/Menu';

class App extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            eventos: [
                'paisagen 01',
                'paisagen 02',
                'paisagen 03',
            ],
            renderizado: '',
        };
    }

    renderizado = (eventos) => {
        this.setState({ 
            alteracoes:eventos,
             });
    }
 
render() {
    return(
        <div className="App">
             <Menu eventos={this.state.eventos}
             eventos={this.eventos}
             />
        </div>
    ); 
  }
 }
export default App;
