import React, { Component } from 'react'
import './Style.css'


const lastcolor = {
    color: "blue",
}

class ClassComp extends Component {
    render() {
        return (
            <div className='box2'>
                <h1>This is created using Class Component </h1>
                <p>This is done using external CSS</p>
                <p style={lastcolor}>This is done using inline CSS</p>
            </div>
        )
    }
}

export default ClassComp