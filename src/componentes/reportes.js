
import React, { Component } from 'react';
import Nav from './nav';
import Header from './header';
import $ from 'jquery';

export class Reporte extends Component {

    state = {
        data: [],
        activeTab: new Array(6).fill('1'),
        documento: 'pushDataMedia.py',
        reportes: [],
        loading : false

    }

    async componentDidMount() {
        const res = await fetch("http://34.201.99.133:5000/Reporte/1090")
        const reportes = await res.json();
        this.setState({ reportes: reportes })
        this.setState({loading : true});



        

    }


    collapse(){
console.log(this);
    }

    reportes() {
        var { reportes, loading } = this.state;


        if(loading === false){

            return(
                <div className="d-flex justify-content-center spinnerload">
                <div className="spinner-border" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
              </div>
            )
        }
            else{
        return (reportes.map(reporte => (
          
        
 
  <div className="card mt-2" key={reporte.CampaingID}>
    <div className="card-header" id={reporte.Account} onClick={this.collapse.bind(reporte.CampaingID)}>
        <div className="collapsed d-flex justify-content-around col-11 m-auto tablasdecolapso" data-toggle="collapse" data-target={reporte.CampaingID}  aria-expanded="true" aria-controls={reporte.CampaingID} >
          <p className="col-xl-3 mb-0 d-flex flex-direction-column">  Cuenta: <span> {reporte.CampaingID}</span></p>

   <p className="col-xl-3 mb-0 d-flex "> <span className="mr-2">Fecha Inicio</span> {reporte.StartDate}</p>
   <p className="col-xl-3 mb-0 d-flex "> <span className="mr-2">Fecha Fin</span> {reporte.EndDate}</p>
   <p className="col-xl-3 mb-0 d-flex "> <span className="mr-2">Días Servidos</span> {reporte.DiasEjecutados}</p>
   <p className="col-xl-3 mb-0 d-flex "> <span className="mr-2">KPI</span> {reporte.DiasEjecutados}</p>   
        </div>
    </div>
    <div id={reporte.CampaingID} className="collapse" aria-labelledby={reporte.Account} data-parent="#accordion">
      <div className="card-body d-flex justify-content-around">
          <p> Dias por servir <span>{reporte.Account} </span></p>
          <p> Dias por servir <span>{reporte.DiasPorservir} </span></p>
          <p> Dias por servir <span>{reporte.DiasEjecutados} </span></p>


                         
      </div>
    </div>
  </div>
        ))
        )
            }
    }
    render() {
$(".reportesnav").parent().addClass("active");
        return (
            <div className="App apphistorial" >
                <Nav />
                <div id="general" className="col-12 col-xl-11 ml-auto mr-auto p-0">
                    <Header
                    //   user={this.state.user} 
                    />
                    
                    <h1 className="col-11 col-xl-10 m-auto text-left">Reportes</h1>
                    <div className="col-12 reportestablasss" id="accordion">
                        {this.reportes()}
                    </div>
</div>


            </div>
        )
    }
}
export default Reporte;