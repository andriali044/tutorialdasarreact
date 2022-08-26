//Belajar state dan props
import React, { Component } from 'react'

export default class Operan extends Component {

    // gantiMakanan(maknaan_baru) {
    //     this.setState({
    //       makanan: maknaan_baru
    //     })
    //   }

  render() {
    return (
      <div>
        <h2>Operan State yang menjadi props : {this.props.makanan}</h2>
        <button onClick={() => this.props.gantiMakanan("Soto")}>Ganti makanan</button>
       </div>
    )
  }
}
