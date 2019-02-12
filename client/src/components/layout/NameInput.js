import React, { Component } from "react";

import Button from "@material-ui/core/Button";
import Image from "./Image";
import TextField from "@material-ui/core/TextField";

class NameInput extends Component {
    handleNameButtonClick = () => {
        this.props.setName(document.getElementById("nameInput").value);
    }

    render() {
        return (
            <div className="mainContainer">
                <Image src="/images/fathoovulogo.png" />
                <div className="inputs">
                <TextField required="true" id="nameInput" placeholder="Enter Your Name" />
                <br />
                <TextField required="true" type="password" id="password" placeholder="Enter Your Password" />
                <br />
                <Button id="titlebutton" onClick={this.handleNameButtonClick}>BEGIN</Button>
                </div>
            </div>
        );
    }
}

export default NameInput;