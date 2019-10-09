
import React, { Component } from 'react';
import Detalles from './detalle';
import Nav from '../nav';
import Header from '../header';
export class Detalle extends Component {
    state = {
        reporte: window.location.href,

        reportes: []
    }



    async componentDidMount() {

        
        var {reporte} = this.state
       var repor = reporte.split("#");
        var repors = repor[1]
        const res = await fetch("http://34.201.99.133:5000/Reporte/DetalleLM/"+ repors)
        const reportes = await res.json();
        this.setState({ reportes: reportes })
        this.setState({loading : true});
    }
    regresarmedio(){
        window.location.href = '/medios-locales'; 
      }


    render() {
var {reportes} = this.state;
        return (

            <div className="App" >
            <Nav />
            <div id="detallesreporte" className="col-12 col-xl-11 ml-auto mr-auto p-0">
              <Header 
            //   user={this.state.user} 
              />


      <div className="row mt-2 ml-auto mr-auto col-11 flex-wrap justify-content-around direction-column">
       <div className="card-body border-left-primary shadow m-2 py-2 row justify-content-around titulosdeetall">
<p className="col-1 font-weight-bold"> Clicks   </p>
<p className="col-1 font-weight-bold"> Consumo </p>
<p className="col-1 font-weight-bold"> Ctr  </p>
<p className="col-1 font-weight-bold"> EndWeek   </p>
<p className="col-2 font-weight-bold"> Formato </p>
<p className="col-1 font-weight-bold"> Impresiones   </p>
<p className="col-2 font-weight-bold">Nomenclatura   </p>
<p className="col-1 font-weight-bold"> Objetivo  </p>
<p className="col-1 font-weight-bold"> StartWeek   </p>
</div>
 
      
              <Detalles reportes={reportes} />

              </div>
              <buton className="btn btn-primary mt-3" onClick={this.regresarmedio}> <i className="fas fa-undo-alt mr-2"></i>Regresar </buton>
              <buton className="btn btn-danger ml-2 mr-2 mt-3" onClick={this.regresarmedio}> <i className="fas fa-user-times mr-2"></i>Rechazar </buton>
              <buton className="btn btn-success mt-3" onClick={this.regresarmedio}> <i className="far fa-check-circle mr-2"></i> Aprobar</buton>
      
           </div>
          </div>  


        )
    }
}
export default Detalle;