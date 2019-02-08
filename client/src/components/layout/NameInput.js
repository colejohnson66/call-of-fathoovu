import React, { Component } from "react";

import Button from "@material-ui/core/Button";
import Image from "./Image";
import InputField from "./InputField";

class NameInput extends Component {
    handleNameButtonClick = () => {
        this.props.setName(document.getElementById("nameInput").value);
    }

    render() {
        return (
            <div>
                <Image src="/images/fathoovulogo.png" />
                <div className="inputs">
                <InputField id="nameInput" />
                <br />
                <Button id="titlebutton" onClick={this.handleNameButtonClick}>BEGIN</Button>
                </div>
            </div>
        );
    }
}

export default NameInput;