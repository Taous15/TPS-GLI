import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';


class App extends React.Component{

  state = {
    bieres: [
      {id: 1 , nom: "Biere 1"},
        
    ],
    nouvelleBiere: '',
    
  };
 handleSubmit = (event :any) => {
  event.preventDefault();

  const id = new Date().getTime();
  const nom = this.state.nouvelleBiere;

 

  const bieres = [...this.state.bieres];
  bieres.push({id, nom});

  this.setState({bieres, nouvelleBiere: '' });
}
  handleDelete = (id:number) => {
    const bieres = [...this.state.bieres];
    const index = bieres.findIndex((biere)=>  biere.id === id
    );
    bieres.splice(index, 1);
    this.setState({bieres });
  };

 handleChange =(event:any) => {
   this.setState({nouvelleBiere: event.currentTarget.value});   
  
 }
  

 
  render(){
    const title = "TP REACT!!"
    
   return( <div className="App" >
     <h1>{title}</h1>
    
      <br/>
      <br/>
      <form onSubmit ={this.handleSubmit} >
       <input value={this.state.nouvelleBiere} onChange ={this.handleChange} type="text" placeholder= "Ajoutez une bière"/>
       <button className="but"> + </button>
      </form>
      <ul>
     { this.state.bieres.map((bieres) =>
   ( 
   <li>
     <strong className="tex">{bieres.nom}{}</strong>
     
   </li>
     
    ))}
        
      </ul>
      
    </div>)
  }
}


ReactDOM.render(
    <App />,
  document.getElementById('root')
);


serviceWorker.unregister();
