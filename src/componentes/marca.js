import React, {Component} from 'react';
import Marcas from './marcas';

export class Marca extends Component {
state = {
  marca : [],
  token: ''
}

async componentDidMount() {
  const resto = await fetch("http://34.201.99.133:5000/task/Token/api-flask-adops")
  const token = await resto.json();
  this.setState({ token: token.token })

    let fetchData = () => {
        fetch('http://34.201.99.133:5000/task/Marca', {
          method: 'GET', 
          headers:{
               //this what's exactly look in my postman
              'Authorization': 'Bearer '+ this.state.token,
          },
      })
        .then(response => response.json())
        .then(marca => {
            this.setState({ marca: marca })
        })

}
    
fetchData()
this.update = setInterval(fetchData, 5000)
}

componentWillUnmount() {
    clearInterval(this.update)
  }
    render()
    {
      var {marca} = this.state;
        return( marca.map(marca => <Marcas  medio={this.props.medio} marca={marca}/> ))
         
        
    }
}
export default Marca;