import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
// import Tablas from './componentes/tablas';
import Tablas from './componentes/tablas';
import Historial from './componentes/historial';
import Form from './componentes/form';
import Medios from './componentes/medios/medios';
import Reporte from './componentes/reportes';
import Detalle from './componentes/medios/detallereporte';
import Errorestablas from './componentes/tablaserrores';

class App extends Component {
  state = {
    sesion: [],
    user: [],
    omitir:[],
    verificar:[]
  }
  async componentDidMount() {
    //const res = await fetch('https://annalectbox.com.gt/AdOps/ApiErrors/all.php?usuario=0&media=FB')
    const res = await fetch('https://annalectbox.com.gt/AdOps/Api/UserAppsApi/?token=VmVyaWZpY2FjacOzbmRlU2Vzc2lvbkhlcnJhbWllbnRhZGVFcnJvcmVzMjAxOQ==')
    const data = await res.json();
    this.setState({ sesion: data.sesssion })
    this.setState({user: data.user})
  }
Redirect(){
  window.location.href = 'https://annalectbox.com.gt/'; 
}


  Home(){
    // var {sesion} = this.state;
    // if(sesion === 0)
    // {
    return(
      <Router>
      <Route exact path="/administracion" component={Tablas} />
      <Route path="/marcas" component={Historial} />
      <Route path="/registro-de-cuentas" component={Form} />
      <Route path="/medios-locales" component={Medios} />
      <Route path="/reportes" component={Reporte} />
      <Route path="/detalle-reporte" component={Detalle} />
      <Route path="/errores" component={Errorestablas} />

    </Router>
    )
//   }else if(sesion === 1){
//     return(
//  this.Redirect()
//     )
//   }
  }
  render() {
    return(
      <div>
      {this.Home()}
      </div>
    )
  }
}
export default App;
