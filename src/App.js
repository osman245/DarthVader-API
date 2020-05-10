import React,{Component} from 'react';
import './App.css';
import Card from './Card';
import 'tachyons';

class App extends Component {
constructor() {
  super()
    this.state = {
       Darth:{},
    }

}

componentDidMount() {
  fetch('http://swapi.py4e.com/api/people/4/')
  .then(response => response.json())
  .then(users => this.setState({Darth:users}));
  

}




  render() {
const {Darth} = this.state;


  return ( 


    <div>
  <h1 className= 'f1 title'> Star Wars </h1>
   <Card  item = {
  Darth}></Card>


    </div>
    
    


);

    
}
}
export default App;
