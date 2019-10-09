
import React, { Component } from 'react';
import Bitacoras from './bitacoras';
import { Col } from 'reactstrap';
import { Nav } from 'reactstrap';
import { NavItem } from 'reactstrap';
import { NavLink } from 'reactstrap';
import { Row } from 'reactstrap';
import { TabContent } from 'reactstrap';

export class Bitacora extends Component {

    state = {
        data: [],
        activeTab: new Array(6).fill('1'),
        documento: 'pushDataMedia.py',
        nombres : []
        
    }

    async componentDidMount() {
        const res1 = await fetch("http://34.201.99.133:5000/task/Bitacora")
        const data = await res1.json();
        this.setState({ data: data })


        const res = await fetch(" http://34.201.99.133:5000/task/BitacoraNames")
        const nombres = await res.json();
        this.setState({ nombres: nombres })
       
    }

    tabPane() {
        var { data, nombres } = this.state;
        return (nombres.map(nombre =>(
            <>
                <div id={nombre.bitacoraID} key={nombre.bitacoraID}>
                    <Bitacoras data={data} documento={this.state.documento} key={nombre.bitacoraID}/>
                </div>

            </>
            )) );
    }


    toggle(tabPane, tab) {
        const newArray = this.state.activeTab.slice()
        newArray[tabPane] = tab
        this.setState({
            activeTab: newArray,
        });
    }

    render() {
        var {nombres, documento} = this.state;
        console.log(documento);
        return (
            <Row className="col-xl-12 col-md-12 col-sm-12 col-12 ml-auto mr-auto mt-1 row filtrodetabs p-0">
                <Col xs="12" md="12" className="mb-4">
                    <Nav tabs className="col-12 flex-wrap d-flex">
                     {
                        nombres.map(nombre => (
                            <NavItem className="col-6 col-sm-4 col-xl-2" key={nombre.bitacoraID}>
                            <NavLink className="p-1 fbcon" active={this.state.activeTab[0] === nombre.bitacoraID}
                            onClick={() => { this.toggle(0, nombre.bitacoraID); this.setState({ documento: nombre.Documento }) }} >
                             {nombre.Documento}
                        </NavLink>
                        </NavItem>
                        ))
                     }
                        </Nav>
                        </Col>
                        <TabContent id="datatotales"  className="col-12 m-auto bitacoradiv" activeTab={this.state.activeTab[0]}>
                            {this.tabPane()}
                        </TabContent>

</Row>
                )
                 }
             }
export default Bitacora;