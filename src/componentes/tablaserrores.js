import React, { Component } from 'react';
import Header from './header';
import Alert from './alert';
import Nav from './nav';
import Tabs from './tabs';
import $ from 'jquery';

class Errorestablas extends Component {
  state = {
    sesion: [],
    user: [],
    omitir:[],
    verificar:[]
  }
  async componentDidMount() {
    const res = await fetch('https://annalectbox.com.gt/AdOps/Api/UserAppsApi/?token=VmVyaWZpY2FjacOzbmRlU2Vzc2lvbkhlcnJhbWllbnRhZGVFcnJvcmVzMjAxOQ==')
    const data = await res.json();
    this.setState({ sesion: data.sesssion })
    this.setState({user: data.user})
    this.setState({omitir:data.Omitir})
    this.setState({verificar:data.Verificar})
  
  }
Redirect(){
  window.location.href = 'https://annalectbox.com.gt/'; 
}
  render() {
      $(".erroresnav").addClass("active");
      var {user} = this.state;
      console.log(user + "user");
    return (
        <div className="App" >
        <Nav />
        <div id="general" className="col-12 col-xl-11 ml-auto mr-auto p-0">
          <Header user={this.state.user} />
     
          <Tabs  user={this.state.user} verificar={this.state.verificar} omitir={this.state.omitir} />
          <Alert />

        </div>
      </div>  
     
    )
  }
}
export default Errorestablas;
