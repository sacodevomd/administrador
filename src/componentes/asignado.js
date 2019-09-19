import React, {Component} from 'react';
import axios from 'axios';
import $ from 'jquery';
import {

  Card,
  CardBody
} from "mdbreact";
  class Asignado extends Component {
  
state ={
    isChecked: false
}

    enviodatos(){
        console.log("ativar")
        axios
        .post("http://34.201.99.133:5000/task/InsertAccountxMarca/"+this.props.marca.AccountID  +"&"+ this.props.marcapadre + "&1" + "&" + "1001" )
        .then(response => {
        })
        .catch(error => {
            console.log(error);
        })

    }
      enviodatos1(){
console.log("desativar")
                axios
                .post("http://34.201.99.133:5000/task/InsertAccountxMarca/"+this.props.marca.AccountID  +"&"+ this.props.marcapadre + "&0" + "&" + "1001" )
                .then(response => {
                })
                .catch(error => {
                    console.log(error);
                })
        
            }

 


 


    AccountID(){
if(this.props.marca.AccountID === null){
    return(
        <p  className="col-2">No tiene nada asignado</p>
    )
}else{
    return(
        <p  className="col-3 datoaccount">{this.props.marca.AccountID}</p>
    )
}
    }

    medio(){
        if(this.props.marca.Medio === null){
            return(
                <p  className="col-2">No tiene Medio asignado</p>
            )
        }else{
            return(
                <p  className="col-3 datoAccount">{this.props.marca.Medio}</p>
            )
        }
            }
            marca(){
                if(this.props.marca.marca === null){
                    return(
                        <p  className="col-2">No tiene marca asignada</p>
                    )
                }else{
                    return(
                        <p  className="col-3 datomarca">{this.props.marca.marca}</p>
                    )
                }
                    }

                    nombre(){
                        if(this.props.marca.nombre === null){
                            return(
                                <p  className="col-2">No tiene Nombre asignado</p>
                            )
                        }else{
                            return(
                                <p  className="col-3 datoidmarca">{this.props.marca.nombre}</p>
                            )
                        }
                            }


         check(){

            //  if (this.props.marca.marca === this.props.marcapadre){
                 return("checked")              
            // }

         }   
         
         check1(){
            if (this.props.marca.marca === this.props.marcapadre){
                return(
                    <input type="checkbox" className="checkbox " checked   onChange={ this.enviodatos1.bind(this) } />
                )              
           }else{
               return (

                <input type="checkbox" className="checkbox "  onChange={ this.enviodatos.bind(this) } />
               )
           }
            
        }   
           
    render() {

var {marca} = this.props;

      return (

        <div className="col-12 p-0 filtrodatos mt-2 ml-auto mr-auto  justify-content-between">
        <Card key={marca.AccountID} >
          <CardBody className="col-12 p-0 mt-2 ml-auto mr-auto row justify-content-between ">
            <div className="button r col-1 ml-2" id="button-9">
            {this.check1()}
              <div className="knobs">
                <span></span>
              </div>
              <div className="layer"></div>
            </div>

           
        { this.nombre()}
        { this.AccountID()}
{this.medio()}

      



          </CardBody>
        </Card>
        </div>

     
      )
    }
  }
  

  export default Asignado;