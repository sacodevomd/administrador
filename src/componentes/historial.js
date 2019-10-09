import React, { Component } from 'react';
import Header from './header';
import Nav from './nav';
import Bitacora from './bitacora';

export class Historial extends Component {

state= {
  data :[]
}

async componentDidMount() {
   const res1 = await fetch("http://34.201.99.133:5000/task/Bitacora")
   const data = await res1.json();
   this.setState({data: data})
}



    render() {

        return (
            <div className="App apphistorial" >
            <Nav />
            <div id="general" className="col-12 col-xl-11 ml-auto mr-auto p-0">
              <Header 
            //   user={this.state.user} 
              />
              <h1 className="col-11 col-xl-10 m-auto text-left">Bitacora</h1>
             <div className="col-12">               
              <Bitacora />
              </div>

             
            </div>
        
          </div>  
        )
    }
}
export default Historial;