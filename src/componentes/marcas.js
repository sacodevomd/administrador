import React, {Component} from 'react';
import axios from 'axios';
import Swal from 'sweetalert2'


export class Marcas extends Component {


    eliminar(){
        console.log(this.Account);

        Swal.fire({
            title: 'Estas seguro de eliminar esta cuenta   ',
            text: this.Account + " - " + this.AccountsID + " - " + this.Media,
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, Eliminar Cuenta  ' 
          }).then((result) => {
            if (result.value) {
              Swal.fire({
               title: 'Cuenta Eliminada!',
               type: 'success'
            })
              axios
              .delete("http://34.201.99.133:5000/task/Account/"+ this.AccountsID +"&0&0"  )
              .then(response => {
              })
              .catch(error => {
                  console.log(error);
              })

            }
          })
        
    }



 
    render()
    {
        var {marca} = this.props
        if (this.props.medio === this.props.marca.Media){
            return(
                <div className="card border-left-success  m-2 bitacoradacarda col-11 col-xl-3 col-md-5 d-flex flex-row" key={marca.AccountsID}>
                <div className="card-body card-body contenidodemarca  p-2 col-11">
                <p className="cuentamarcaid">{marca.Account}</p>
                <p className="marcamediocuenta">{marca.AccountsID}</p>
                <p hidden>{marca.Media}</p>
                </div>
                <p className="col-1 p-0 elminarcuenta" onClick={this.eliminar.bind(marca)}><i className="fas fa-trash-alt "></i></p>
                </div>
             )
        }else {

            return null;
        }
       
         
        
    }
}
export default Marcas;