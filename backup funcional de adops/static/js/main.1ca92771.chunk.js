(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{24:function(e,a,t){},33:function(e,a,t){},39:function(e,a,t){e.exports=t(67)},45:function(e,a,t){},46:function(e,a,t){},47:function(e,a,t){},67:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),o=t(34),c=t.n(o),s=(t(24),t(13)),l=t.n(s),i=t(17),m=t(5),d=t(6),u=t(10),p=t(7),f=t(9),b=(t(45),t(4)),h=t.n(b),g=function(e){function a(){return Object(m.a)(this,a),Object(u.a)(this,Object(p.a)(a).apply(this,arguments))}return Object(f.a)(a,e),Object(d.a)(a,[{key:"sideaction",value:function(){console.log("Asdfasd"),h()("body").toggleClass("sidebar-toggled"),h()(".sidebar").toggleClass("toggled")}},{key:"render",value:function(){return n.a.createElement("nav",{className:"navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow"},n.a.createElement("button",{id:"sidebarToggleTop",className:"btn btn-link  rounded-circle mr-3",onClick:this.sideaction},n.a.createElement("i",{className:"fa fa-bars"})),n.a.createElement("ul",{className:"navbar-nav ml-auto"},n.a.createElement("li",{className:"nav-item dropdown no-arrow d-sm-none"},n.a.createElement("a",{className:"nav-link dropdown-toggle",href:"/",id:"searchDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},n.a.createElement("i",{className:"fas fa-search fa-fw"})),n.a.createElement("div",{className:"dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in","aria-labelledby":"searchDropdown"},n.a.createElement("form",{className:"form-inline mr-auto w-100 navbar-search"},n.a.createElement("div",{className:"input-group"},n.a.createElement("input",{type:"text",className:"form-control bg-light border-0 small",placeholder:"Search for...","aria-label":"Search","aria-describedby":"basic-addon2"}),n.a.createElement("div",{className:"input-group-append"},n.a.createElement("button",{className:"btn btn-primary",type:"button"},n.a.createElement("i",{className:"fas fa-search fa-sm"}))))))),n.a.createElement("div",{className:"topbar-divider d-none d-sm-block"}),n.a.createElement("li",{className:"nav-item dropdown no-arrow"},n.a.createElement("a",{className:"nav-link dropdown-toggle",href:"/",id:"userDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},n.a.createElement("span",{className:"mr-2 d-none d-lg-inline text-gray-600 small",id:"nmbreuser"},this.props.user," "),n.a.createElement("img",{className:"img-profile rounded-circle",src:"https://annalectbox.com.gt/AdOps/ErroresPlataformas/img/user.jpg",alt:"userimg"})),n.a.createElement("div",{className:"dropdown-menu dropdown-menu-right shadow animated--grow-in","aria-labelledby":"userDropdown"},n.a.createElement("a",{className:"dropdown-item",href:"https://annalectbox.com.gt/ArchivosIndex/ajax/cerrar.php","data-toggle":"modal","data-target":"#logoutModal"},n.a.createElement("i",{className:"fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"}),"Cerrar Sesi\xf3n")))))}}]),a}(r.Component),E=(t(46),t(47),function(e){function a(){return Object(m.a)(this,a),Object(u.a)(this,Object(p.a)(a).apply(this,arguments))}return Object(f.a)(a,e),Object(d.a)(a,[{key:"sideaction",value:function(){console.log("Asdfasd"),h()("body").toggleClass("sidebar-toggled"),h()(".sidebar").toggleClass("toggled")}},{key:"render",value:function(){return n.a.createElement("ul",{className:"navbar-nav bg-gradient-primary sidebar sidebar-dark accordion toggled",id:"accordionSidebar"},n.a.createElement("a",{className:"sidebar-brand d-flex align-items-center justify-content-center",href:"/"},n.a.createElement("div",{className:"sidebar-brand-icon rotate-n-15"},n.a.createElement("i",{className:"fas fa-laugh-wink"})),n.a.createElement("div",{className:"sidebar-brand-text mx-3"},"AdOps",n.a.createElement("sup",null,"2"))),n.a.createElement("li",{className:"nav-item"},n.a.createElement("a",{className:"nav-link",href:"/"},n.a.createElement("i",{className:"fas fa-fw fa-tachometer-alt"}),n.a.createElement("span",null,"Dashboard AdOps"))),n.a.createElement("div",{className:"sidebar-heading"},"Planning"),n.a.createElement("li",{className:"nav-item"},n.a.createElement("a",{className:"nav-link",href:"https://annalectbox.com.gt/MFC/"},n.a.createElement("i",{className:"fas fa-chart-pie"}),n.a.createElement("span",null,"MFC"))),n.a.createElement("div",{className:"sidebar-heading"},"Operaciones"),n.a.createElement("li",{className:"nav-item active"},n.a.createElement("a",{className:"nav-link",href:"https://annalectbox.com.gt/AdOps/PlataformErrores"},n.a.createElement("i",{className:"fas fa-exclamation-triangle"}),n.a.createElement("span",null,"Errores"))),n.a.createElement("li",{className:"nav-item"},n.a.createElement("a",{className:"nav-link",href:"/"},n.a.createElement("i",{className:"fas fa-tasks"}),n.a.createElement("span",null,"Tareas"))),n.a.createElement("li",{className:"nav-item"},n.a.createElement("a",{className:"nav-link",href:"/"},n.a.createElement("i",{className:"fas fa-fw fa-chart-area"}),n.a.createElement("span",null,"Resultados"))),n.a.createElement("div",{className:"text-center d-none d-md-inline"},n.a.createElement("button",{className:"rounded-circle border-0",id:"sidebarToggle",onClick:this.sideaction})))}}]),a}(r.Component)),v=t(20),x=t(14),N=t(21),k=t.n(N),y=(t(33),t(15)),w=function(e){function a(){var e,t;Object(m.a)(this,a);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(t=Object(u.a)(this,(e=Object(p.a)(a)).call.apply(e,[this].concat(n)))).state={estadoactual:!0,user:t.props.user,erroractual:!0},t}return Object(f.a)(a,e),Object(d.a)(a,[{key:"validacionuser",value:function(){var e=this.state.user;return"sfranco@omg.com.gt"===e||"isamayoa@omg.com.gt"===e||"scardona@omd.com.gt"===e||"jdeleon@omg.com.gt"===e?{display:"flex"}:{display:"none"}}},{key:"elimnandoerror",value:function(){return!0===this.state.erroractual?{backgroundImage:"url(https://annalectbox.com.gt/AdOps/ErroresPlataformas/img/icon/estado2.png)",backgroundSize:"100%",backgroundRepeat:"no-repeat",backgroundPosition:"50%",backgroundColor:"transparent",border:"0px",height:"50px"}:{backgroundImage:"url(https://annalectbox.com.gt/AdOps/ErroresPlataformas/img/icon/estado22.png)",backgroundSize:"100%",backgroundRepeat:"no-repeat",backgroundPosition:"50%",backgroundColor:"transparent",border:"0px",height:"50px"}}},{key:"estiloestado",value:function(){return!0===this.state.estadoactual&&"1"===this.props.error.Estado?{backgroundImage:"url(https://annalectbox.com.gt/AdOps/ErroresPlataformas/img/icon/estado2.png)",backgroundSize:"100%",backgroundRepeat:"no-repeat",backgroundPosition:"50%",backgroundColor:"transparent",border:"0px",height:"50px"}:{backgroundImage:"url(https://annalectbox.com.gt/AdOps/ErroresPlataformas/img/icon/estado22.png)",backgroundSize:"100%",backgroundRepeat:"no-repeat",backgroundPosition:"50%",backgroundColor:"transparent",border:"0px",height:"50px"}}},{key:"linkspormedio",value:function(){return"FB"===this.props.error.Media?n.a.createElement(y.a,{arrow:5,background:"#2b2b2b",border:"#ccc",color:"#fff",content:"Ver campa\xf1a",fadeDuration:0,fadeEasing:"linear",fixed:!1,fontFamily:"inherit",fontSize:"10px",offset:0,padding:5,placement:"top",radius:5,zIndex:1},n.a.createElement("p",{id:"errortext",className:"text-break","data-tip":"Ir a la Cuenta"},n.a.createElement("a",{href:"https://business.facebook.com/adsmanager/manage/campaigns?act="+this.props.error.idcuenta+"&selected_campaign_ids="+this.props.error.CampaingID,target:"_blank",rel:"noopener noreferrer"},this.props.error.Error,n.a.createElement("br",null),n.a.createElement("i",{className:"far fa-eye"})))):"GO"===this.props.error.Media?n.a.createElement(y.a,{arrow:5,background:"#2b2b2b",border:"#ccc",color:"#fff",content:"Ver campa\xf1a",fadeDuration:0,fadeEasing:"linear",fixed:!1,fontFamily:"inherit",fontSize:"10px",offset:0,padding:5,placement:"top",radius:5,zIndex:1},n.a.createElement("p",{id:"errortext",className:"text-break","data-tip":"Ir a la Cuenta"},n.a.createElement("a",{href:" https://ads.google.com/aw/overview?campaignId="+this.props.error.CampaingID+"&__e="+this.props.error.idcuenta,target:"_blank",rel:"noopener noreferrer"},this.props.error.Error,n.a.createElement("br",null),n.a.createElement("i",{className:"far fa-eye"})))):n.a.createElement("p",{id:"errortext",className:"text-break"},this.props.error.Error)}},{key:"linkerrorid",value:function(){return"FB"===this.props.error.Media?n.a.createElement(y.a,{arrow:5,background:"#2b2b2b",border:"#ccc",color:"#fff",content:"Ver cuenta",fadeDuration:1,fadeEasing:"linear",fixed:!1,fontFamily:"inherit",fontSize:"10px",offset:0,padding:5,placement:"top",radius:5,zIndex:1},n.a.createElement("p",{className:"mb-0"},n.a.createElement("a",{href:"https://business.facebook.com/adsmanager/manage/campaigns?act="+this.props.error.idcuenta,target:"_blank",rel:"noopener noreferrer"}," ",this.props.error.cuenta," ",n.a.createElement("span",null,this.props.error.idcuenta," "))," ",n.a.createElement("i",{className:"fas fa-sign-out-alt ml-2"}))):"GO"===this.props.error.Media?n.a.createElement(y.a,{arrow:5,background:"#2b2b2b",border:"#ccc",color:"#fff",content:"Ver cuenta",fadeDuration:1,fadeEasing:"linear",fixed:!1,fontFamily:"inherit",fontSize:"10px",offset:0,padding:5,placement:"top",radius:5,zIndex:1},n.a.createElement("p",{className:"mb-0"},n.a.createElement("a",{href:"  https://ads.google.com/aw/overview?__e="+this.props.error.idcuenta,target:"_blank",rel:"noopener noreferrer"}," ",this.props.error.cuenta," ",n.a.createElement("span",null,this.props.error.idcuenta," "))," ",n.a.createElement("i",{className:"fas fa-sign-out-alt ml-2"}))):n.a.createElement("p",{className:"mb-0"},this.props.error.cuenta," ",n.a.createElement("span",null,this.props.error.idcuenta," "))}},{key:"clickMe",value:function(e){k.a.post("https://annalectbox.com.gt/AdOps/Api/Errors/DataPlatforms/v1/RevisionEstado/?id="+e.iderror+"&token=Q2FkZW5hZGVvbWl0aXJlcnJvcmVz").then(function(e){}).catch(function(e){console.log(e)}),this.setState({estadoactual:!1})}},{key:"borrarerror",value:function(e){k.a.post("https://annalectbox.com.gt/AdOps/Api/Errors/DataPlatforms/v1/OmitirError/?id="+e.iderror+"&token=U3RyaW5ncGFyYW9taXRpcmVycm9yZXM=").then(function(e){}).catch(function(e){console.log(e)}),this.setState({erroractual:!1})}},{key:"render",value:function(){var e=this.props.error;return e.Media===this.props.medio?n.a.createElement("div",{className:"col-12 m-2 contendedordelerror p-0",estado:e.GrupoError,tipouser:e.tipousuario},n.a.createElement("div",{className:"tipodeerror col-12 text-left m-0 font-weight-bold text-primary card-header py-1",id:"marca"},"  ",this.linkerrorid()),n.a.createElement("div",{className:"estadoerror",style:{display:"none"}},e.Estado),n.a.createElement("div",{id:"contenedorerror",className:"row col-12 m-auto pt-1 pb-1"},n.a.createElement("div",{id:"imagenass",className:"col-12 col-sm-12 col-md-2 col-xl-1"},n.a.createElement("img",{src:"https://annalectbox.com.gt/AdOps/ErroresPlataformas/img/icon/"+e.Icono,alt:"asdf"})," "),n.a.createElement("div",{id:"datoserrores",className:" col-md-4 col-12 col-sm-6 col-md-3 col-xl-4"},n.a.createElement("p",{id:"nombreerror",className:"text-left font-weight-bold mb-1"}," ",e.DescripcionError," ",n.a.createElement("span",{id:"fechaerror",className:"ml-2 font-weight-normal"},e.fecha)),n.a.createElement("p",{id:"datoerror",className:"text-break mb-1"},e.Campaingname)),n.a.createElement("div",{id:"texterror",className:"col-12 col-sm-6 col-md-3 col-xl-4 text-center"},this.linkspormedio()),n.a.createElement("div",{id:"nombreerror",className:"col-12 col-sm-6 col-md-2"},n.a.createElement("p",{className:"text-center font-weight-bold"},e.Comentario)),n.a.createElement(y.a,{arrow:5,background:"#2b2b2b",border:"#ccc",color:"#fff",content:"Verificar Error",fadeDuration:1,fadeEasing:"linear",fixed:!1,fontFamily:"inherit",fontSize:"10px",offset:0,padding:5,placement:"top",radius:5,zIndex:1},n.a.createElement("button",{onClick:this.clickMe.bind(this,e),id:"imagenas",className:"col-8 col-sm-2 col-md-1 aquelestil",style:this.estiloestado()})),n.a.createElement("div",{id:"administradorbtn",style:this.validacionuser()},n.a.createElement(y.a,{arrow:5,background:"#2b2b2b",border:"#ccc",color:"#fff",content:"Eliminar error Administrador",fadeDuration:1,fadeEasing:"linear",fixed:!1,fontFamily:"inherit",fontSize:"10px",offset:0,padding:5,placement:"top",radius:5,zIndex:1},n.a.createElement("button",{onClick:this.borrarerror.bind(this,e),id:"imagenas",className:"col-8 col-sm-2 col-md-1 botonerroractualizado"}," ",n.a.createElement("i",{className:"fas fa-check-double"})))))):n.a.createElement("div",{className:"display:none;"})}}]),a}(r.Component),O=function(e){function a(){return Object(m.a)(this,a),Object(u.a)(this,Object(p.a)(a).apply(this,arguments))}return Object(f.a)(a,e),Object(d.a)(a,[{key:"render",value:function(){var e=this;return this.props.errores.map(function(a){return n.a.createElement(w,{medio:e.props.medio,user:e.props.user,error:a,key:a.iderror})})}}]),a}(r.Component),j=t(70),A=t(71),C=t(72),D=t(73),S=t(69),z=t(74),F=t(68),I=function(e){function a(){var e,t;Object(m.a)(this,a);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(t=Object(u.a)(this,(e=Object(p.a)(a)).call.apply(e,[this].concat(n)))).state={data:[],totales:[]},t.getData=function(){fetch("https://annalectbox.com.gt/AdOps/Api/Errors/DataPlatforms/v1/CountData/?token=VmlzdGFkZXRvZG9zbG9zZXJyb3JlYWFhc3YxcGxhdGFmb3JtYWFkb3BzMjAxOQ==").then(function(e){return e.json()}).then(function(e){t.setState({data:Object(v.a)(e)}),t.intervalID=setTimeout(t.getData.bind(Object(x.a)(t)),500)})},t}return Object(f.a)(a,e),Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=Object(i.a)(l.a.mark(function e(){var a,t;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.getData(),e.next=3,fetch("https://annalectbox.com.gt/AdOps/Api/Errors/DataPlatforms/v1/CountData/?token=VmlzdGFkZXRvZG9zbG9zZXJyb3JlYWFhc3YxcGxhdGFmb3JtYWFkb3BzMjAxOQ==");case 3:return a=e.sent,e.next=6,a.json();case 6:t=e.sent,this.setState({totales:t});case 8:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){clearTimeout(this.intervalID)}},{key:"render",value:function(){return this.state.data.map(function(e){return n.a.createElement("div",{className:"Totales col-12 ml-auto mr-auto d-flex flex-wrap justify-content-around mt-4 p-0",key:e.totalinversion},n.a.createElement("div",{className:"col-xl-4 col-md-6 mb-1 contadorerrores"},n.a.createElement("div",{className:"card border-left-primary shadow h-100 py-2"},n.a.createElement("div",{className:"card-body  pb-0 pt-0"},n.a.createElement("div",{className:"row no-gutters align-items-center"},n.a.createElement("div",{className:"col col d-flex align-items-center"},n.a.createElement("div",{className:"text-xs font-weight-bold text-primary text-uppercase mb-0"},"Errores de Nomenclatura"),n.a.createElement("div",{className:"h5 mb-0 font-weight-bold text-gray-800 totalnumeroerrores erroresinversion"},e.totalnomeclatura)),n.a.createElement("div",{className:"col-4"},n.a.createElement("img",{src:"https://annalectbox.com.gt/AdOps/ErroresPlataformas/img/icon/dollar.png",alt:"inversion"})))))),n.a.createElement("div",{className:"col-xl-4 col-md-6 mb-1 contadorerrores"},n.a.createElement("div",{className:"card border-left-success shadow h-100 py-2"},n.a.createElement("div",{className:"card-body  pb-0 pt-0"},n.a.createElement("div",{className:"row no-gutters align-items-center"},n.a.createElement("div",{className:"col col d-flex align-items-center"},n.a.createElement("div",{className:"text-xs font-weight-bold text-success text-uppercase mb-0"},"Errores de Inversi\xf3n"),n.a.createElement("div",{className:"h5 mb-0 font-weight-bold text-gray-800 totalnumeroerrores erroresinversion"},e.totalinversion)),n.a.createElement("div",{className:"col-4"},n.a.createElement("img",{src:"https://annalectbox.com.gt/AdOps/ErroresPlataformas/img/icon/dollar.png",alt:"inversion"})))))),n.a.createElement("div",{className:"col-xl-4 col-md-6 mb-1 contadorerrores"},n.a.createElement("div",{className:"card border-left-info shadow h-100 py-2"},n.a.createElement("div",{className:"card-body  pb-0 pt-0"},n.a.createElement("div",{className:"row no-gutters align-items-center"},n.a.createElement("div",{className:"col col d-flex align-items-center "},n.a.createElement("div",{className:"text-xs font-weight-bold text-info text-uppercase mb-0"},"Errores de Ubicaci\xf3n"),n.a.createElement("div",{className:"row no-gutters align-items-center"},n.a.createElement("div",{className:"col-4"},n.a.createElement("div",{className:"h5 mb-0 mr-3 font-weight-bold text-gray-800 totalnumeroerrores erroresubicacion"},e.totalpaises)))),n.a.createElement("div",{className:"col-auto"},n.a.createElement("img",{src:"https://annalectbox.com.gt/AdOps/ErroresPlataformas/img/icon/location.png",alt:"ubicacion"})))))))})}}]),a}(r.Component),P=function(e){function a(){var e,t;Object(m.a)(this,a);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(t=Object(u.a)(this,(e=Object(p.a)(a)).call.apply(e,[this].concat(n)))).state={errores:[],show:!0,activeTab:new Array(4).fill("1"),medio:"FB"},t.getData=function(){fetch("https://annalectbox.com.gt/AdOps/Api/Errors/DataPlatforms/v1/Data/?token=AasdKAS12ksaKasa9zbG9zZXJyb3JlYWFMas912SaaszMjAxOQ==").then(function(e){return e.json()}).then(function(e){t.setState({errores:Object(v.a)(e)}),t.intervalID=setTimeout(t.getData.bind(Object(x.a)(t)),3e3)})},t}return Object(f.a)(a,e),Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=Object(i.a)(l.a.mark(function e(){return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:this.getData();case 1:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){clearTimeout(this.intervalID)}},{key:"activarfiltro",value:function(e){h()("#enviofiltro").click(),h()("#filtroSolicitacoes").on("submit",function(){h()(" .tab-pane  .contendedordelerror").show();var e="";return h()(this).find("[data-form]").each(function(){""!==h()(this).val()&&(e+="["+h()(this).attr("data-form")+"='"+h()(this).val()+"']")}),e.length>0&&h()(" .tab-pane  .contendedordelerror").not(e).hide(),!1})}},{key:"toggle",value:function(e,a){var t=this.state.activeTab.slice();t[e]=a,this.setState({activeTab:t})}},{key:"tabPane",value:function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(F.a,{tabId:"1"},n.a.createElement(O,{medio:this.state.medio,errores:this.state.errores,user:this.props.user})),n.a.createElement(F.a,{tabId:"3"},n.a.createElement(O,{medio:this.state.medio,errores:this.state.errores,user:this.props.user})),n.a.createElement(F.a,{tabId:"2"},n.a.createElement(O,{medio:this.state.medio,errores:this.state.errores,user:this.props.user})))}},{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"col-12 col-xl-11 col-md-11 m-auto"},n.a.createElement(I,null),n.a.createElement("div",{className:" m-auto col-12 col-xl-11 contendedorprincipalerrores"},n.a.createElement("form",{id:"filtroSolicitacoes",type:"post",name:"filtroSolicitacoes",className:"container d-flex justify-content-around p-2 flex-wrap align-items-center col-xl-10 col-12"},n.a.createElement("p",{className:"m-0 col-12 col-xl-2 col-md-12"},"Filtrar Por:"),n.a.createElement("select",{"data-form":"estado",className:"custom-select col-12 col-xl-3 col-md-3 mt-2 mb-2",name:"filtroStatus",id:"filtroStatus",onChange:this.activarfiltro},n.a.createElement("option",{value:""},"Tipo de Error"),n.a.createElement("option",{value:"Error de nomenclatura"},"Nomenclatura"),n.a.createElement("option",{value:"Error de ubicacion"},"Ubicacion"),n.a.createElement("option",{value:"Error de inversion"},"Inversi\xf3n")),n.a.createElement("select",{"data-form":"tipouser",className:"custom-select col-12 col-xl-3 col-md-3 mt-2 mb-2",name:"filtroAnalista",id:"filtroAnalista",onChange:this.activarfiltro},n.a.createElement("option",{value:""},"Tipo de Usuario"),n.a.createElement("option",{value:"1"},"Planer"),n.a.createElement("option",{value:"2"},"Implementaci\xf3n")),n.a.createElement("button",{type:"submit",className:"btn btn-primary col-12 col-xl-2 ",onClick:this.activarfiltro,id:"enviofiltro",hidden:!0},"Filtrar"))),n.a.createElement(S.a,{className:"col-xl-11 col-md-12 col-sm-12 col-12 ml-auto mr-auto mt-1 row filtrodetabs"},n.a.createElement(j.a,{xs:"12",md:"12",className:"mb-4"},n.a.createElement(A.a,{tabs:!0,className:"col-12 flex-wrap d-flex"},n.a.createElement(C.a,{className:"col-12 col-sm-4 col-xl-2"},n.a.createElement(D.a,{className:"p-1 fbcon",active:"1"===this.state.activeTab[0],onClick:function(){e.toggle(0,"1"),e.setState({medio:"FB"})}},"Facebook",n.a.createElement("i",{className:"fab fa-facebook-f ml-2"}))),n.a.createElement(C.a,{className:"col-12 col-sm-4 col-xl-2"},n.a.createElement(D.a,{className:"p-1 gocon",active:"2"===this.state.activeTab[0],onClick:function(){e.toggle(0,"2"),e.setState({medio:"GO"})}},"Google",n.a.createElement("i",{className:"fab fa-google ml-2"}))),n.a.createElement(C.a,{className:"col-12 col-sm-4 col-xl-2"},n.a.createElement(D.a,{className:"p-1 twcon",active:"3"===this.state.activeTab[0],onClick:function(){e.toggle(0,"3"),e.setState({medio:"TW"})}},"Twitter",n.a.createElement("i",{className:"fab fa-twitter ml-2"})))),n.a.createElement(z.a,{activeTab:this.state.activeTab[0]},this.tabPane()))))}}]),a}(r.Component),T=function(e){function a(){var e,t;Object(m.a)(this,a);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(t=Object(u.a)(this,(e=Object(p.a)(a)).call.apply(e,[this].concat(n)))).state={sesion:[],user:[]},t}return Object(f.a)(a,e),Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=Object(i.a)(l.a.mark(function e(){var a,t;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://annalectbox.com.gt/AdOps/Session/?token=VmVyaWZpY2FjacOzbmRlU2Vzc2lvbkhlcnJhbWllbnRhZGVFcnJvcmVzMjAxOQ==");case 2:return a=e.sent,e.next=5,a.json();case 5:t=e.sent,this.setState({sesion:t.sesssion}),this.setState({user:t.user});case 8:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"Redirect",value:function(){window.location.href="https://annalectbox.com.gt/"}},{key:"Home",value:function(){var e=this.state.sesion;return 1===e?n.a.createElement("div",{className:"App"},n.a.createElement(E,null),n.a.createElement("div",{id:"general",className:"col-12 col-xl-11 ml-auto mr-auto p-0"},n.a.createElement(g,{user:this.state.user}),n.a.createElement(P,{user:this.state.user}))):0===e?this.Redirect():void 0}},{key:"render",value:function(){return n.a.createElement("div",null,this.Home())}}]),a}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(T,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[39,1,2]]]);
//# sourceMappingURL=main.1ca92771.chunk.js.map