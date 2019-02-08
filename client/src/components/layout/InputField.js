import React, { Component } from "react"

import TextField from "@material-ui/core/TextField";

class InputField extends Component {
    render() {
        return (
            <TextField label="Name" required="true" id={this.props.id} />
        );
    }
}

export default InputField;