
import React, { Component } from 'react';
export class Detalles extends Component {


    render() {
var {reportes} = this.props;
        return (reportes.map(detalle =>(
           <div className="card-body cartasdedetalle shadow m-2 py-2 row justify-content-around">
<p className="col-1">{detalle.Clicks} </p>
<p className="col-1">{detalle.Consumo} </p>
<p className="col-1">{detalle.Ctr} </p>
<p className="col-1">{detalle.EndWeek} </p>
<p className="col-2">{detalle.Formato} </p>
<p className="col-1">{detalle.Impresiones} </p>
<p className="col-2">{detalle.Nomenclatura} </p>
<p className="col-1">{detalle.Objetivo} </p>
<p className="col-1">{detalle.StartWeek} </p>
           </div>
        )
        ))
    }
}
export default Detalles;