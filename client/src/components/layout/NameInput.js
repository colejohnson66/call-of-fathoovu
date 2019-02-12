import React, { Component } from "react";

import Button from "@material-ui/core/Button";
import Image from "./Image";
import TextField from "@material-ui/core/TextField";
import api from "../../api";

class NameInput extends Component {
    state = {
        invalidPassword: false
    };

    handleNameButtonClick = () => {
        let username = document.getElementById("nameInput").value;
        let password = document.getElementById("passwordInput").value;
        if (username === "" || password === "")
            return;

        api.user.create(username, password).then((data) => {
            // check if user already exists. if they don't call setUser
            if (data.status === 200) {
                console.log("user doesn't exist");
                this.props.setUser(username, password);
                this.setState({ invalidPassword: false });
            } else {
                console.log("user exists");
                this.setState({ invalidPassword: true });
            }
        });
    }

    handleCheevoButtonClick = () => {
        let username = document.getElementById("nameInput").value;
        let password = document.getElementById("passwordInput").value;
        if (username === "" || password === "")
            return;

        api.user.getAchievements(username, password).then((data) => {
            if (data.status === 200) {
                this.props.setCheevos(data.data);
                this.setState({ invalidPassword: false });
            } else {
                this.setState({ invalidPassword: true });
            }
        });
    }

    render() {
        return (
            <div className="mainContainer">
                <Image src="/images/fathoovulogo.png" />
                <div className="inputs">
                    <TextField required={true} id="nameInput" placeholder="Enter Your Name" />
                    <br />
                    <TextField required={true} id="passwordInput" type="password" placeholder="Enter Your Password" />
                    <br />
                    <Button id="titlebutton" onClick={this.handleNameButtonClick}>BEGIN</Button>
                    <Button id="cheevoButton" onClick={this.handleCheevoButtonClick}>View 'Cheevos</Button>
                    <br />
                    {this.state.invalidPassword ? <div className="invalid">Invalid password</div> : <div></div>}
                </div>
            </div>
        );
    }
}

export default NameInput;