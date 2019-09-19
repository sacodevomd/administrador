import React, {Component} from 'react';
import Nav from './nav';
import Header from './header';

export class Form extends Component {

    render()
    {
        return(
            <div className="App" >
            <Nav />
            <div id="general" className="col-12 col-xl-11 ml-auto mr-auto p-0">
              <Header 
            //   user={this.state.user} 
              />

              <div id="Formaularioregistro">
              
              
              </div>
          
           </div>
          </div>  
        )
    }
}
export default Form;