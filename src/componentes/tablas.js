import React, { Component } from "react";
import Nav from './nav';
import Header from './header';
import Search from './search.js';




export class Tablas extends Component {
  render(){
    return(
      <div className="App" >
      <Nav />
      <div id="general" className="col-12 col-xl-11 ml-auto mr-auto p-0">
        <Header 
      //   user={this.state.user} 
        />
        <Search />

     </div>
    </div>  
    


    )
  }
}
export default Tablas;




