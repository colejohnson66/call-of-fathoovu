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
                <h1>The Call of Fathoovu</h1>
                <Image src="/images/fathoovulogo.png" />
                <InputField id="nameInput" />
                <Button onClick={this.handleNameButtonClick}>Get your Fathoovu on</Button>
            </div>
        );
    }
}

export default NameInput;