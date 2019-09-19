import React, { Component } from "react";
export class Dato extends Component {
contenido(){
  var {data} = this.props;

  if(this.props.data.Resultado === "Success"){
    return(
      <div className="card border-left-success  mt-2 mb-2 ml-auto mr-auto bitacoradacarda col-10">
      <div className="card-body card-body d-flex justify-content-between   p-2">
      <p>{data.bitacoraID}</p>
      <p>{data.Operacion}</p>
      <p>{data.Documento}</p>
      <p>{data.CreateDate}</p>
      <p><i className="fas fa-check-circle checkesitobitacora"></i></p>
      </div>
      </div>
    )
  }else{
    return(
  
      <div className="card border-left-danger  mt-2 mb-2 ml-auto mr-auto bitacoradacarda col-10">
      <div className="card-body  d-flex justify-content-between   p-2">
      <p>{data.bitacoraID}</p>
      <p>{data.Operacion}</p>
      <p>{data.Documento}</p>
      <p>{data.CreateDate}</p>
      <p><i className="fas fa-times-circle dangerbitaora"></i></p>
      </div>
      </div>
    )
  }
}

  render(){

  return this.contenido()
    
  }
}

export default Dato;
