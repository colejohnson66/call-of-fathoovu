import React, { Component } from "react"

import TextField from "@material-ui/core/TextField";

class InputField extends Component {
    render() {
        return (
            <TextField required="true" id={this.props.id} placeholder="Name" />
        );
    }
}

export default InputField;