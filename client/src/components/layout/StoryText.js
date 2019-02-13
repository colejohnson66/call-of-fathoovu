import React, { Component } from 'react'

export class StoryText extends Component {
    render() {
        return (
            <h3 dangerouslySetInnerHTML={{__html: this.props.text}}></h3>
        )
    }
}

export default StoryText
