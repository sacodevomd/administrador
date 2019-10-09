import React, {Component} from 'react';
import {Nav} from 'reactstrap';
import Header from './header';
import Navs from './nav';
import Marca from './marca';
import { Col } from 'reactstrap';
import { NavItem } from 'reactstrap';
import { NavLink } from 'reactstrap';
import { Row } from 'reactstrap';
import { TabContent } from 'reactstrap';
import { TabPane } from 'reactstrap';
import $ from 'jquery';
import axios from 'axios';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


export class Form extends Component {
state = {
  medio : 'FB',
  activeTab: new Array(6).fill('1'),
}

toggle(tabPane, tab) {
  const newArray = this.state.activeTab.slice()
  newArray[tabPane] = tab
  this.setState({
      activeTab: newArray,
  });
}


tabPane() {
  return (
      <>
          <TabPane tabId="1" className="tabpan1">
              <Marca medio={this.state.medio} />
          </TabPane>
          <TabPane tabId="3" className="tabpan2">
            </TabPane>
          <TabPane tabId="2" className="tabpan3">
          <Marca medio={this.state.medio} />
          </TabPane>
          <TabPane tabId="4" className="tabpan4">
          <Marca medio={this.state.medio} />
          </TabPane>
          <TabPane tabId="5" className="tabpan5">
          <Marca medio={this.state.medio} />
          </TabPane>
          <TabPane tabId="6" className="tabpan6">
          <Marca medio={this.state.medio} />
          </TabPane>
          <TabPane tabId="7" className="tabpan7">
          <Marca medio={this.state.medio} />
      </TabPane>
      </>
  );
}
nuevacuenta(){
  $( "#Formaularioregistro" ).fadeOut( "100" );
  setTimeout(function(){
    
    $("#datosnuevos").fadeIn();;
}, 100);

}
crear(){
  var id = $(".campodeid").val();
  var Descripcion = $(".campodedescription").val();
  var medio = $(".selecciondemedio").val();
  console.log("http://34.201.99.133:5000/task/Account/"+ id +"&" +Descripcion + "&" + medio );
  axios
  .post("http://34.201.99.133:5000/task/Account/"+ id +"&" +Descripcion + "&" + medio  )
  .then(response => {

    const MySwal = withReactContent(Swal)
    Swal.fire({
      type: 'success',
      title: 'Éxito',
      text: 'Se ha creado la cuenta' + Descripcion ,
      footer: '<a href>ADOPS </a>'
    })

  })
  .catch(error => {
      console.log(error);
  })

  $("#datosnuevos").fadeOut();
  $("#Formaularioregistro").fadeIn();

 $(".campodeid").val('');
  $(".campodedescription").val('');
  $(".selecciondemedio").empty();

}
cancelar(){
  $("#datosnuevos").fadeOut();
  $("#Formaularioregistro").fadeIn();

 
}

    render()
    {

        return(
            <div className="App" >
            <Navs />
            <div id="general" className="col-12 col-xl-11 ml-auto mr-auto p-0">
              <Header 
            //   user={this.state.user} 
              />

              <div className="row col-11 m-auto titulodemarcasasig">
<h1>Cuentas de Plataformas</h1>
<i className="fas fa-plus" onClick={this.nuevacuenta}></i>
</div>
              <div id="Formaularioregistro">
              
              <Row className="col-xl-11 col-md-12 col-sm-12 col-12 ml-auto mr-auto mt-1 row filtrodetabs p-0">
              <Col xs="12" md="12" className="mb-4">
                  <Nav tabs className="col-12 flex-wrap d-flex">
                      <NavItem className="col-6 col-sm-4 col-xl-2">
                          <NavLink className="p-1 fbcon"
                              active={this.state.activeTab[0] === '1'}
                              onClick={() => { this.toggle(0, '1'); this.setState({ medio: "FB" }) }}
                          >
                              Facebook
                    

                          </NavLink>
                      </NavItem>
                      <NavItem className="col-6 col-sm-4 col-xl-2">
                          <NavLink className="p-1 gocon"
                              active={this.state.activeTab[0] === '2'}
                              onClick={() => { this.toggle(0, '2'); this.setState({ medio: "GO" }) }}
                          >
                              Google
                        
                         </NavLink>
                      </NavItem>
                      <NavItem className="col-6 col-sm-4 col-xl-2">
                          <NavLink className="p-1 twcon"
                              active={this.state.activeTab[0] === '3'}
                              onClick={() => { this.toggle(0, '3'); this.setState({ medio: "TW" }) }}
                          >
                              Twitter
                        <i className="fab fa-twitter ml-2"></i>
                     
                          </NavLink>
                      </NavItem>
                      <NavItem className="col-6 col-sm-4 col-xl-2">
                          <NavLink className="p-1 mmcon"
                              active={this.state.activeTab[0] === '4'}
                              onClick={() => { this.toggle(0, '4'); this.setState({ medio: "MM" }) }}
                          >
                              Media Math
                  <i className="fab fa-medium ml-2"></i>
                         
                          </NavLink>
                      </NavItem>
               

                      <NavItem className="col-6 col-sm-4 col-xl-2">
                      <NavLink className="p-1 amcon"
                          active={this.state.activeTab[0] === '7'}
                          onClick={() => { this.toggle(0, '7'); this.setState({ medio: "AM" }) }}
                      >
                          Ads Movil
        
                      </NavLink>
                  </NavItem>



                      <NavItem className="col-6 col-sm-4 col-xl-2">
                          <NavLink className="p-1 occon"
                              active={this.state.activeTab[0] === '6'}
                              onClick={() => { this.toggle(0, '6'); this.setState({ medio: "OC" }) }}
                          >
                              Orden de Compra
         
                      
                          </NavLink>
                      </NavItem>
                  </Nav>
                  <TabContent id="datademarca" activeTab={this.state.activeTab[0]}>
                      {this.tabPane()}
                  </TabContent>
              </Col>


          </Row>
     
              </div>
              <div id="datosnuevos" className="col-xl-9 col-md-10 col-sm-10 col-12 m-auto" style={{"display":"none"}}>
            <form>

            <input type="text"  placeholder="ID" className="campodeid"/>
            <input type="text"  placeholder="Descripción" className="campodedescription"/>
            
            <select className="selecciondemedio">
            <option  disabled>Medio</option>
  <option value="FB">Facebook</option>
  <option value="GO">Google</option>
  <option  value="TW">Twitter</option>
  <option value="AF">Adform</option>
</select>
<p className="btn btn-danger col-xl-2 col-md-10 col-sm-10 col-12 m-2" onClick={this.cancelar}>Cancelar</p>
<p className="btn btn-primary col-xl-2 col-md-10 col-sm-10 col-12  m-2" onClick={this.crear}>Crear</p>
            </form>
              </div>
           </div>

        
          </div>  
        )
    }
}
export default Form;