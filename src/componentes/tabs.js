import React, { Component } from 'react';
import Errores from './errores/errores';
import { Col } from 'reactstrap';
import { Nav } from 'reactstrap';
import { NavItem } from 'reactstrap';
import { NavLink } from 'reactstrap';
import { Row } from 'reactstrap';
import { TabContent } from 'reactstrap';
import { TabPane } from 'reactstrap';
import $ from 'jquery';
import '../assets/css/index.css'
import Totales from './errores/totales';
export class Tabs extends Component {

  state = {
        errores: [],
        show: true,
        activeTab: new Array(6).fill('1'),
        medio: 'FB',
        fbin: '',
        Totalessss: ''

    }

  componentDidMount(){   
    let fetchData = () => {
        fetch('https://annalectbox.com.gt/AdOps/Api/Errors/DataPlatforms/v1/Data/?token=AasdKAS12ksaKasa9zbG9zZXJyb3JlYWFMas912SaaszMjAxOQ==')
        .then(response => response.json())
        .then(errores => {
             errores.sort((a, b) => b.TipoErrorID - a.TipoErrorID );
            
            this.setState({ errores: [...errores]});
            var optionValues = [];
            $('#clientefiltro option').each(function () {
                if ($.inArray(this.value, optionValues) > -1) {
                    $(this).hide()
                } else {
                    optionValues.push(this.value);
                }
            });
            var optionValues1 = [];
            $('#marcafiltro option').each(function () {
                if ($.inArray(this.value, optionValues1) > -1) {
                    $(this).hide()
                } else {
                    optionValues1.push(this.value);
                }
            });


            if( errores.length !== this.state.Totalessss){
                if(this.state.Totalessss > 0 && errores.length > this.state.Totalessss ){
                    $("#errordesplegable").click();
                }
            this.setState({Totalessss : errores.length})
            }else{

            }
        })
    }


    
fetchData()
    this.update = setInterval(fetchData, 2000)
  }
  
  componentWillUnmount() {
    clearInterval(this.update)
  }



    activarfiltro(e) {

        $("#enviofiltro").click();
        $("#filtroSolicitacoes").on("submit", function () {

            $(" .tab-pane  .contendedordelerror").show();
            var filter = "";
            $(this).find("[data-form]").each(function () {
                if ($(this).val() !== "") filter += ("[" + $(this).attr("data-form") + "='" + $(this).val() + "']");

        //         var filtroactivado = $(this).val();
        

        //    if(filtroactivado[9] === "n")
        //    {

        //    }
            });

            if (filter.length > 0) $(" .tab-pane  .contendedordelerror").not(filter).hide();

            return false;

        })
    }


    toggle(tabPane, tab) {
        const newArray = this.state.activeTab.slice()
        newArray[tabPane] = tab
        this.setState({
            activeTab: newArray,
        });
    }


    conttot() {
        const { errores } = this.state;

        var mediosFB = [];
        var mediosAM = [];
        var mediosGO = [];
        var mediosTW = [];
        var mediosMM = [];
        var mediosAF = [];
        var mediosFBN = [];
        var mediosFBIN = [];
        var mediosFBU = [];
        var mediosAMN = [];
        var mediosOCAM = [];
        var mediosMMAM = [];
        var mediosINAM = [];
        var mediosFBAM = [];
        var mediosGOAM = [];
        var mediosTWAM = [];
        var mediosCOAM = [];
        var mediosUAM = [];
        var mediosGON = [];
        var mediosGOIN = [];
        var mediosGOU = [];
        var mediosMMN = [];
        var mediosMMIN = [];
        var medioMMU = [];
        var mediosTWN = [];
        var mediosTWIN = [];
        var mediosTWU = [];
        var mediosOC = [];
        var mediosOCN = [];
        var mediosOCIN = [];
        var mediosOCU = [];
        var mediosAFN = [];
        var mediosAFIN = [];
        var mediosAFU = [];
        var mediosFBOC = [];
        var mediosGOOC = [];
        var mediosTWOC = [];
        var mediosMMOC = [];
        var mediosOCOC = [];
        var mediosAFOC = [];
        var mediosFBCO = [];
        var mediosGOCO = [];
        var mediosTWCO = [];
        var mediosMMCO = [];
        var mediosOCCO = [];
        var mediosAFCO = [];
        
   

        errores.find(function (item) {

        

            if (item.Media === "FB") {
                mediosFB.push(item)
                if (item.GrupoError === "Error de inversion") {
                    mediosFBIN.push(item)
                }
                if (item.GrupoError === "Error de nomenclatura") {
                    mediosFBN.push(item)
                }

                if (item.GrupoError === "Error de ubicacion") {
                    mediosFBU.push(item)
                }
                if (item.GrupoError === "Error de orden de compra") {
                    mediosFBOC.push(item)
                }

                if (item.GrupoError === "Error de consumo") {
                    mediosFBCO.push(item)
                }
            }

               else if (item.Media === "AM") {
                    mediosAM.push(item)
                    if (item.GrupoError === "Error de inversion") {
                        mediosINAM.push(item)
                    }
                    if (item.GrupoError === "Error de nomenclatura") {
                        mediosAMN.push(item)
                    }
    
                    if (item.GrupoError === "Error de ubicacion") {
                        mediosUAM.push(item)
                    }
                    if (item.GrupoError === "Error de orden de compra") {
                        mediosOCAM.push(item)
                    }
    
                    if (item.GrupoError === "Error de consumo") {
                        mediosCOAM.push(item)
                    }
                 



            } else if (item.Media === "GO") {
                mediosGO.push(item)
                if (item.GrupoError === "Error de inversion") {
                    mediosGOIN.push(item)
                }
                if (item.GrupoError === "Error de nomenclatura") {
                    mediosGON.push(item)
                }

                if (item.GrupoError === "Error de ubicacion") {
                    mediosGOU.push(item)
                }
                if (item.GrupoError === "Error de orden de compra") {
                    mediosGOOC.push(item)
                }
                if (item.GrupoError === "Error de consumo") {
                    mediosGOCO.push(item)
                }

                



            } else if (item.Media === "TW") {
                mediosTW.push(item)
                if (item.GrupoError === "Error de inversion") {
                    mediosTWIN.push(item)
                }
                if (item.GrupoError === "Error de nomenclatura") {
                    mediosTWN.push(item)
                }

                if (item.GrupoError === "Error de ubicacion") {
                    mediosTWU.push(item)
                }
                if (item.GrupoError === "Error de orden de compra") {
                    mediosTWOC.push(item)
                }
                if (item.GrupoError === "Error de consumo") {
                    mediosTWCO.push(item)
                }
            }
            else if (item.Media === "MM") {
                mediosMM.push(item)
                if (item.GrupoError === "Error de inversion") {
                    mediosMMIN.push(item)
                }
                if (item.GrupoError === "Error de nomenclatura") {
                    mediosMMN.push(item)
                }

                if (item.GrupoError === "Error de ubicacion") {
                    medioMMU.push(item)
                }
                if (item.GrupoError === "Error de orden de compra") {
                    mediosMMOC.push(item)
                }
                if (item.GrupoError === "Error de consumo") {
                    mediosMMCO.push(item)
                }

            }
            else if (item.Media === "OC") {
                mediosOC.push(item)
                if (item.GrupoError === "Error de inversion") {
                    mediosOCIN.push(item)
                }
                if (item.GrupoError === "Error de nomenclatura") {
                    mediosOCN.push(item)
                }

                if (item.GrupoError === "Error de ubicacion") {
                    mediosOCU.push(item)
                }
                if (item.GrupoError === "Error de orden de compra") {
                    mediosOCOC.push(item)
                }
                if (item.GrupoError === "Error de consumo") {
                    mediosOCCO.push(item)
                }

            }
            else if (item.Media === "AF") {
                mediosAF.push(item)
                mediosAF.push(item)
                if (item.GrupoError === "Error de inversion") {
                    mediosAFIN.push(item)
                }
                if (item.GrupoError === "Error de nomenclatura") {
                    mediosAFN.push(item)
                }

                if (item.GrupoError === "Error de ubicacion") {
                    mediosAFU.push(item)
                }
                if (item.GrupoError === "Error de orden de compra") {
                    mediosAFOC.push(item)
                }
                if (item.GrupoError === "Error de consumo") {
                    mediosAFCO.push(item)
                }
            }

            return null;
        });

        const erroresenfb = mediosFB.length;
        const erroresenam = mediosAM.length;
        const erroresengo = mediosGO.length;
        const erroresentw = mediosTW.length;
        const erroresenmm = mediosMM.length;
        const erroresenon = mediosOC.length;
        const erroresenaf = mediosAF.length;
        const errorfbinv = mediosFBIN.length;
        const errorfbun = mediosFBU.length;
        const errorfboc = mediosFBOC.length;
        const errorfbnv = mediosFBN.length;
        const errorgoinv = mediosGOIN.length;
        const errorgoun = mediosGOU.length;
        const errorgonv = mediosGON.length;
        const errormminv = mediosMMIN.length;
        const errormmun = medioMMU.length;
        const errormmnv = mediosMMN.length;
        const errortwinv = mediosTWIN.length;
        const errortwun = mediosTWU.length;
        const errortwnv = mediosTWN.length;
        const errorocinv = mediosTWIN.length;
        const errorocun = mediosTWU.length;
        const errorocnv = mediosTWN.length;
        const errorafinv = mediosAFIN.length;
        const errorafun = mediosAFU.length;
        const errorafnv = mediosAFN.length;
        const errorgooc = mediosGOOC.length;
        const errortwoc = mediosTWOC.length;
        const errormmoc = mediosMMOC.length;
        const errorococ = mediosOCOC.length;
        const errorcofb = mediosFBCO.length;
        const errorcotw = mediosTWCO.length;
        const errorcogo = mediosGOCO.length;
        const errorcomm = mediosMMCO.length;
        const errorcoaf = mediosFBCO.length;
        const errorcooc = mediosOCCO.length;

        const erroramfb = mediosFBAM.length;
        const erroramtw = mediosTWAM.length;
        const erroramgo = mediosGOAM.length;
        const errorammm = mediosMMAM.length;
        const erroramaf = mediosFBAM.length;
        const erroramoc = mediosOCAM.length;


        const erroramin = mediosINAM.length;
       const  erroramn=  mediosAMN.length;
       const  erroramu=  mediosUAM.length;

        const  erroramco = mediosCOAM.length;


$(".totalamn ").text(erroramn);
$(".totalaminv ").text(erroramin);
$(".totalaminv ").text(erroramin);
$(".totalamu ").text(erroramu);
$(".totalamco ").text(erroramco);

        $(".totalgoco").text(errorcogo);
        $(".totalfbco").text(errorcofb);
        $(".totaltwco").text(errorcotw);
        $(".totalocco").text(errorcooc);
        $(".totalafco").text(errorcoaf);
        $(".totalmmco").text(errorcomm);

        $(".totalam").text(erroresenam)
        $(".totalgoam").text(erroramgo);
        $(".totalfbam").text(erroramfb);
        $(".totaltwam").text(erroramtw);
        $(".totalocam").text(erroramoc);
        $(".totalafam").text(erroramaf);
        $(".totalmmam").text(errorammm);


        

        $(".totalgooc").text(errorgooc);
        $(".totalamgo").text(erroramgo);
        $(".totalammm").text(errormmoc);
        $(".totalamtw").text(errortwoc);
        $(".totalamoc").text(errorococ);
        $(".totalamfb").text(errorococ);



        
        $(".totalmmoc").text(errormmoc);
        $(".totaltwoc").text(errortwoc);
        $(".totalococ").text(errorococ);
        $(".totalfb").text(erroresenfb);
        $(".totalgo").text(erroresengo);
        $(".totaltw").text(erroresentw);
        $(".totalmm").text(erroresenmm);
        $(".totalaf").text(erroresenaf);
        $(".totaloc").text(erroresenon);
        $(".totalfbinv").text(errorfbinv);
        $(".totalfbn").text(errorfbnv);
        $(".totalfbu").text(errorfbun);
        $(".totalgoinv").text(errorgoinv);
        $(".totalgon").text(errorgonv);
        $(".totalgou").text(errorgoun);
        $(".totalmminv").text(errormminv);
        $(".totalmmn").text(errormmnv);
        $(".totalmmu").text(errormmun);
        $(".totaltwinv").text(errortwinv);
        $(".totaltwn").text(errortwnv);
        $(".totaltwu").text(errortwun);
        $(".totalocinv").text(errorocinv);
        $(".totalocn").text(errorocnv);
        $(".totalocu").text(errorocun);
        $(".totalafinv").text(errorafinv);
        $(".totalafn").text(errorafnv);
        $(".totalafu").text(errorafun);
        $(".totalfboc").text(errorfboc);



        $(".erroresinversiontotal").text(erroresenmm + erroresentw + erroresengo + erroresenfb + erroresenon);


  

    }

    tabPane() {
        return (
            <>
                <TabPane tabId="1" className="tabpan1">
                    <Errores medio={this.state.medio} errores={this.state.errores} user={this.props.user} verificar={this.props.verificar} omitir={this.props.omitir}/>
                </TabPane>
                <TabPane tabId="3" className="tabpan2">
                    <Errores medio={this.state.medio} errores={this.state.errores} user={this.props.user} verificar={this.props.verificar} omitir={this.props.omitir} />
                </TabPane>
                <TabPane tabId="2" className="tabpan3">
                    <Errores medio={this.state.medio} errores={this.state.errores} user={this.props.user} verificar={this.props.verificar} omitir={this.props.omitir} />

                </TabPane>
                <TabPane tabId="4" className="tabpan4">
                    <Errores medio={this.state.medio} errores={this.state.errores} user={this.props.user} verificar={this.props.verificar} omitir={this.props.omitir}/>

                </TabPane>
                <TabPane tabId="5" className="tabpan5">
                    <Errores medio={this.state.medio} errores={this.state.errores} user={this.props.user}  verificar={this.props.verificar} omitir={this.props.omitir}/>

                </TabPane>
                <TabPane tabId="6" className="tabpan6">
                    <Errores medio={this.state.medio} errores={this.state.errores} user={this.props.user} verificar={this.props.verificar} omitir={this.props.omitir} />

                </TabPane>
                <TabPane tabId="7" className="tabpan7">
                <Errores medio={this.state.medio} errores={this.state.errores} user={this.props.user} verificar={this.props.verificar} omitir={this.props.omitir} />
            </TabPane>
            </>
        );
    }

  
 
    render() {
        this.conttot();
        var { errores } = this.state;
        return (

            <div className="col-12 col-xl-11 col-md-11 m-auto">

            <Totales fbin={this.props.errorfbinv} />

                <div className=" m-auto col-12 col-xl-12 contendedorprincipalerrores">

                    <form id="filtroSolicitacoes" type="post" name="filtroSolicitacoes" className="container d-flex justify-content-end p-2 flex-wrap align-items-center col-xl-12 col-12">

                        <select id="clientefiltro" data-form="cliente" className="custom-select col-5 col-xl-2 col-md-3 mt-2 mb-2 ml-2" name="filtrocliente" onChange={this.activarfiltro}>
                            <option value="">Clientes</option>
                            {
                                errores.map(error => (
                                    <option value={error.cliente} key={error.iderror}>{error.cliente}</option>
                                ))
                            }

                        </select>


                        <select id="marcafiltro" data-form="marca" className="custom-select col-5 col-xl-2 col-md-3 mt-2 mb-2 ml-2" name="filtromarca" onChange={this.activarfiltro}>
                            <option value="">Marca</option>
                            {
                                errores.map(error => (
                                    <option value={error.marca} key={error.iderror}>{error.marca}</option>
                                ))
                            }

                        </select>
                        <select data-form="estado" className="custom-select col-5 col-xl-2 col-md-3 mt-2 mb-2 ml-2" name="filtroStatus" id="filtroStatus" onChange={this.activarfiltro}>
                            <option value="">Tipo de Error</option>

                            <option value="Error de nomenclatura">Nomenclatura</option>
                            <option value="Error de ubicacion">Ubicacion</option>
                            <option value="Error de inversion">Inversión</option>
                            <option value="Error de orden de compra">Orden de Compra</option>
                            <option value="Error de consumo">Comsumo</option>
                            

                        </select>

                        <select data-form="tipouser" className="custom-select col-5 col-xl-2 col-md-3 mt-2 mb-2 ml-2" name="filtroAnalista" id="filtroAnalista" onChange={this.activarfiltro}>
                            <option value="">Tipo de Usuario</option>
                            <option value="1">Planer</option>
                            <option value="2">Implementación</option>
                            <option value="3">Asistente Planing</option>

                        </select>
                        <button type="submit" className="btn btn-primary col-12 col-xl-2 " onClick={this.activarfiltro} id="enviofiltro" hidden>Filtrar</button>
                    </form>


                </div>
                <Row className="col-xl-12 col-md-12 col-sm-12 col-12 ml-auto mr-auto mt-1 row filtrodetabs p-0">
                    <Col xs="12" md="12" className="mb-4">
                        <Nav tabs className="col-12 flex-wrap d-flex">
                            <NavItem className="col-6 col-sm-4 col-xl-2">
                                <NavLink className="p-1 fbcon"
                                    active={this.state.activeTab[0] === '1'}
                                    onClick={() => { this.toggle(0, '1'); this.setState({ medio: "FB" }) }}
                                >
                                    Facebook
                               <i className="fab fa-facebook-f ml-2"></i>
                                    <span className="totalfb ml-2"></span>
                                    <span className="totalfbinv ml-2" style={{ display: 'none' }}></span>
                                    <span className="totalfbn ml-2" style={{ display: 'none' }}></span>
                                    <span className="totalfbu ml-2" style={{ display: 'none' }}></span>
                                    <span className="totalfboc ml-2" style={{ display: 'none' }}></span>
                                    <span className="totalfbco ml-2" style={{ display: 'none' }}></span>
                                    <span className="totalfbam ml-2" style={{ display: 'none' }}></span>

                                </NavLink>
                            </NavItem>
                            <NavItem className="col-6 col-sm-4 col-xl-2">
                                <NavLink className="p-1 gocon"
                                    active={this.state.activeTab[0] === '2'}
                                    onClick={() => { this.toggle(0, '2'); this.setState({ medio: "GO" }) }}
                                >
                                    Google
                               <i className="fab fa-google ml-2"></i>
                                    <span className="totalgo ml-2"></span>
                                    <span className="totalgoinv ml-2" style={{ display: 'none' }}></span>
                                    <span className="totalgon ml-2" style={{ display: 'none' }}></span>
                                    <span className="totalgou ml-2" style={{ display: 'none' }}></span>
                                    <span className="totalgooc ml-2" style={{ display: 'none' }}></span>
                                    <span className="totalgoco ml-2" style={{ display: 'none' }}></span>
                                    <span className="totalgoam ml-2" style={{ display: 'none' }}></span>



                                </NavLink>
                            </NavItem>
                            <NavItem className="col-6 col-sm-4 col-xl-2">
                                <NavLink className="p-1 twcon"
                                    active={this.state.activeTab[0] === '3'}
                                    onClick={() => { this.toggle(0, '3'); this.setState({ medio: "TW" }) }}
                                >
                                    Twitter
                              <i className="fab fa-twitter ml-2"></i>
                                    <span className="totaltw ml-2"></span>
                                    <span className="totaltwinv ml-2" style={{ display: 'none' }}></span>
                                    <span className="totaltwn ml-2" style={{ display: 'none' }}></span>
                                    <span className="totaltwu ml-2" style={{ display: 'none' }}></span>
                                    <span className="totaltwoc ml-2" style={{ display: 'none' }}></span>
                                    <span className="totaltwco ml-2" style={{ display: 'none' }}></span>
                                    <span className="totaltwam ml-2" style={{ display: 'none' }}></span>
                                </NavLink>
                            </NavItem>
                            <NavItem className="col-6 col-sm-4 col-xl-2">
                                <NavLink className="p-1 mmcon"
                                    active={this.state.activeTab[0] === '4'}
                                    onClick={() => { this.toggle(0, '4'); this.setState({ medio: "MM" }) }}
                                >
                                    Media Math
                        <i className="fab fa-medium ml-2"></i>
                                    <span className="totalmm ml-2"></span>
                                    <span className="totalmminv ml-2" style={{ display: 'none' }}></span>
                                    <span className="totalmmn ml-2" style={{ display: 'none' }}></span>
                                    <span className="totalmmu ml-2" style={{ display: 'none' }}></span>
                                    <span className="totalmmoc ml-2" style={{ display: 'none' }}></span>
                                    <span className="totalmmco ml-2" style={{ display: 'none' }}></span>
                                    <span className="totalmmam ml-2" style={{ display: 'none' }}></span>
                                </NavLink>
                            </NavItem>
                            {


                                // <NavItem className="col-12 col-sm-4 col-xl-2">
                                //     <NavLink className="p-1 twcon"
                                //         active={this.state.activeTab[0] === '5'}
                                //         onClick={() => { this.toggle(0, '5'); this.setState({ medio: "AF" }) }}
                                //     >
                                //         Adform
                                //                     <i className="fas fa-ad ml-2"></i>
                                //         <span className="totalaf ml-2"></span>
                                //         <span className="totalafinv ml-2" style={{ display: 'none' }}></span>
                                //         <span className="totalafn ml-2" style={{ display: 'none' }}></span>
                                //         <span className="totalafu ml-2" style={{ display: 'none' }}></span>
                                // <span className="totalafoc ml-2" style={{ display: 'none' }}></span>
                                // <span className="totalafco ml-2" style={{ display: 'none' }}></span>
                                // <span className="totalafam ml-2" style={{ display: 'none' }}></span>
                                //     </NavLink>
                                // </NavItem>
                            }

                            <NavItem className="col-6 col-sm-4 col-xl-2">
                            <NavLink className="p-1 amcon"
                                active={this.state.activeTab[0] === '7'}
                                onClick={() => { this.toggle(0, '7'); this.setState({ medio: "AM" }) }}
                            >
                                Ads Movil
                <i className="fas fa-phone-square-alt ml-2"></i>
                                <span className="totalam ml-2"></span>
                                <span className="totalaminv ml-2" style={{ display: 'none' }}></span>
                                <span className="totalamn ml-2" style={{ display: 'none' }}></span>
                                <span className="totalamu ml-2" style={{ display: 'none' }}></span>
                                <span className="totalamoc ml-2" style={{ display: 'none' }}></span>
                                <span className="totalamco ml-2" style={{ display: 'none' }}></span>
                                <span className="totalamam ml-2" style={{ display: 'none' }}></span>
                            </NavLink>
                        </NavItem>



                            <NavItem className="col-6 col-sm-4 col-xl-2">
                                <NavLink className="p-1 occon"
                                    active={this.state.activeTab[0] === '6'}
                                    onClick={() => { this.toggle(0, '6'); this.setState({ medio: "OC" }) }}
                                >
                                    Orden de Compra
                    <i className="fab fa-wpforms ml-2"></i>
                                    <span className="totaloc ml-2"></span>
                                    <span className="totalocinv ml-2" style={{ display: 'none' }}></span>
                                    <span className="totalocn ml-2" style={{ display: 'none' }}></span>
                                    <span className="totalocu ml-2" style={{ display: 'none' }}></span>
                                    <span className="totalococ ml-2" style={{ display: 'none' }}></span>
                                    <span className="totalocco ml-2" style={{ display: 'none' }}></span>
                                    <span className="totalocam ml-2" style={{ display: 'none' }}></span>
                                </NavLink>
                            </NavItem>
                        </Nav>
                        <TabContent id="datatotales" activeTab={this.state.activeTab[0]}>
                            {this.tabPane()}
                        </TabContent>
                    </Col>


                </Row>
            </div>

        )


    }
}

export default Tabs
