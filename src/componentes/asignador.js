import React, {Component} from 'react';
import Asignado from './asignado';
  class Asignacion extends Component {
    state = { marcas: [],
              marca : this.props.cuenta
     };
   
     async componentDidMount() {
      // const res = await fetch('http://34.201.99.133:5000/task/AccountxMarca/145308' + this.props.cuenta)
      const res = await fetch('http://34.201.99.133:5000/task/AccountxMarca/'+ this.props.cuenta)
      const marcas = await res.json();
      this.setState({ marcas: marcas })

    }
  

    render() {
    var {marcas} = this.state;
if (this.props.marca === 1){

{this.componentDidMount()}
      return (marcas.map(marca => <Asignado marca={marca} marcapadre={this.props.cuenta} />)
      )
      
}else{
  return(
  <div hidden></div>
  )
}
    }
  }
  

  export default Asignacion;