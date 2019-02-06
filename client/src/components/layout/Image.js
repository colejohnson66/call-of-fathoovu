import React, { Component } from "react";

class Image extends Component {
    render() {
        return (
            <img src={this.props.href} alt="" />
        );
    }
}

export default Image;