import React, { Component } from "react";
import Nav from '../nav';
import Header from '../header';
import Medio from './medio';
import $ from 'jquery';
export class Medios extends Component {
constructor(props){

super(props);
    this.state={
        marca: [],
        marc: '',
        loading : false,
        reportes: [],
        token:[]
    }

    this.change = this.change.bind(this);
}

    async componentDidMount() {

      const resto = await fetch("http://34.201.99.133:5000/task/Token/api-flask-adops")
      const token = await resto.json();
      this.setState({ token: token.token })

     const res = await fetch('http://34.201.99.133:5000/task/Marca',
        {
            method: 'GET', 
            headers:{
                 //this what's exactly look in my postman
                'Authorization': 'Bearer '+ this.state.token,
            },
            res: this.data
        })
        const marca = await res.json();
        this.setState({ marca: marca })
        this.setState({loading:true})
        console.log(marca);
   

        const res1 = await fetch("http://34.201.99.133:5000/Reporte/1090")
        const reportes = await res1.json();
        this.setState({ reportes: reportes })
       

      }  

spiner(){
    var {loading} = this.state;
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
            $(".filtrodemarcasmedios").removeClass("invisible");
            return null;
        }
}
marcas(){
    var {marca} = this.state;

    return(marca.map(marca => (
            <option value={marca.id} key={marca.id}>{marca.fullname}</option>
        )
    ))
}

change(event){
    $(".filtrodetabs").removeClass("invisible");
    this.setState({marc: event.target.value});
}



  render(){
$(".medioslocalenav").addClass("active");
var {marc, marca, reportes} = this.state;
    return(
      <div className="App" >
      <Nav />
      <div id="sdf" className="col-12 col-xl-11 ml-auto mr-auto p-0">
        <Header 
      //   user={this.state.user} 
        />

        <div>

        {this.spiner()}
    <select className="invisible filtrodemarcasmedios" onChange={this.change} >
{this.marcas()}
</select>
</div>

<Medio marca={marc} marcas={marca} reportes={reportes}  detalle={this.detalle}/>




     </div>
    </div>  
    
    )
  }
}
export default Medios;




