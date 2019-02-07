import "./App.css";

import React, { Component } from "react";

import Button from "@material-ui/core/Button";
import ContainedButtons from "./components/layout/ContainedButtons";
import Image from "./components/layout/Image";
import { Input } from "@material-ui/core";
import InputField from "./components/layout/InputField";
import StoryText from "./components/layout/StoryText";
import storyEntries from "./storyEntries.json";

class App extends Component {
    state = {
        name: "",
        storyEntry: storyEntries["init"]
    };

    handleClick = (e) => {
        // e.target is the clicked element
        let goto = e.target.parentNode.parentNode.getAttribute("data-goto");

        // Ask for name again
        if (goto === "init")
            this.setState({ name: "" });

        this.setState({
            storyEntry: storyEntries[goto]
        });
    }

    handleNameButtonClick = () => {
        this.setState({
            name: document.getElementById("nameInput").value
        });
    }

    getButtons = () => {
        return this.state.storyEntry.choices.map((choice, i) =>
            <ContainedButtons key={i} onClick={this.handleClick} goto={choice.goto} text={choice.text} />
        );
    }

    render() {
        let noStyle = {};
        let hiddenStyle = {
            display: "none"
        };
        return (
            <div>
                <div style={this.state.name === "" ? noStyle : hiddenStyle}>
                    <h1>The Call of Fathoovu</h1>
                    <Image src="/img/home.jpg" />
                    <InputField id="nameInput" />
                    <Button onClick={this.handleNameButtonClick}>Get your Fathoovu on</Button>
                </div>
                <div style={this.state.name === "" ? hiddenStyle : noStyle}>
                    <StoryText text={this.state.storyEntry.text.replace("<name>", this.state.name)} />
                    <Image src={this.state.storyEntry.img} />
                    <div className="optionsDiv">
                        {this.getButtons()}
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
