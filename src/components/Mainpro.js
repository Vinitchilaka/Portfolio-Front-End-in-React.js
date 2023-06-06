import "./MainproStyles.css"
import React, { Component } from 'react'

class Mainpro extends Component {
    render(){
  return (
    <div className="Mainpro-img">
        <div className="heading">
            <h1>{this.props.heading}</h1>
            <p>{this.props.text}</p>
        </div>
    </div>
  )
}
}

export default Mainpro