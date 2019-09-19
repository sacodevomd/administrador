import React, { Component } from 'react';
import '../assets/css/nav.css';
import '../assets/fontawesome-free/css/all.min.css';
import $ from 'jquery';
 class Nav extends Component {

    sideaction(){


    $("body").toggleClass("sidebar-toggled");
    $(".submenu").toggleClass("toggled");

    
   
 
    }
    render(){
    return (
<div className="contenedomenus">
            <ul className="navbar-nav bg-gradient-primary  sidebar sidebar-dark accordion toggled" id="accordionSidebar">
           
                <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
                    <div className="sidebar-brand-icon ">
                       
                <img src="https://annalectbox.com.gt/AdOps/ErroresPlataformas/img/menu/logog.svg" alt="erroes" className="logog"/>
                    </div>
                </a>
                <div className="sidebar-heading">
                PLANING
</div>
                <li className="nav-item">
                <a className="nav-link" href="https://annalectbox.com.gt/MFC/">
                   
                <img src="https://annalectbox.com.gt/AdOps/ErroresPlataformas/img/menu/mfc.svg" alt="erroes" className="logomfc"/>
                    <span>MFC</span></a>
            </li>
         
                  
        
                    


                            <div className="sidebar-heading">
                                Operaciones
    </div>

    <li className="nav-item">
    <a className="nav-link" href="/">
    <img src="https://annalectbox.com.gt/AdOps/ErroresPlataformas/img/menu/control.svg" alt="erroes"/>
                                  
        <span>Control Campaña</span></a>
</li>
                            <li className="nav-item active">
                                <a className="nav-link" href="/">
                                    <img src="https://annalectbox.com.gt/AdOps/ErroresPlataformas/img/menu/errores.svg" alt="erroes"/>
                                    <span>Errores</span></a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="/">
                                <img src="https://annalectbox.com.gt/AdOps/ErroresPlataformas/img/menu/tareas.svg" alt="erroes"/>
                                  
                                    <span>Tareas</span></a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="/">
                                <img src="https://annalectbox.com.gt/AdOps/ErroresPlataformas/img/menu/resultado.svg" alt="erroes"/>
                                  
                                    <span>Resultados</span></a>
                            </li>

                            <li className="nav-item">
                            <a className="nav-link" href="/">
                            <img src="https://annalectbox.com.gt/AdOps/ErroresPlataformas/img/menu/materiales.svg" alt="erroes"/>
                              
                                <span>Materiales</span></a>
                        </li>


                                <div className="text-center d-none d-md-inline">
                                    <button className="rounded-circle border-0" id="sidebarToggle" onClick={this.sideaction}></button>
                                </div>




  </ul>

  <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion  submenu" id="submenu">
           
              
   
            
         

    <li className="nav-item">
    <a className="nav-link" href="/">
    <img src="https://annalectbox.com.gt/AdOps/ErroresPlataformas/img/menu/control.svg" alt="erroes"/>
                                  
        <span>Control Campaña</span></a>
</li>
                            <li className="nav-item active">
                                <a className="nav-link" href="/">
                                    <img src="https://annalectbox.com.gt/AdOps/ErroresPlataformas/img/menu/errores.svg" alt="erroes"/>
                                    <span>Marcas Cuentas</span></a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="/">
                                <img src="https://annalectbox.com.gt/AdOps/ErroresPlataformas/img/menu/tareas.svg" alt="erroes"/>
                                  
                                    <span>Admin Cuentas</span></a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="/about">
                                <img src="https://annalectbox.com.gt/AdOps/ErroresPlataformas/img/menu/resultado.svg" alt="erroes"/>
                                  
                                    <span>Bitacora</span></a>
                            </li>

                         

                          




  </ul>
  </div>
                        )
                    
                    }
                }
export default Nav;