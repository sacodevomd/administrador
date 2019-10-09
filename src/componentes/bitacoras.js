
import React, { Component } from 'react';
import Dato from './createRowData';

export class Bitacoras extends Component {

state= {
  data :[]
}

async componentDidMount() {
   const res1 = await fetch("http://34.201.99.133:5000/task/Bitacora")
   const data = await res1.json();
   this.setState({data: data})
}



    render() {
    var {data} = this.props;
    return (data.map(data =><Dato data={data} documento={this.props.documento} />
         ))

    }
}
export default Bitacoras;