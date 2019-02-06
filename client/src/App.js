import "./App.css";

import React, { Component } from "react";

import Image from "./components/layout/Image";
import StoryText from "./components/layout/StoryText";
import storyEntries from "./storyEntries.json";

class App extends Component {
    state = {
        name: "",
        storyEntry: storyEntries["init"]
    };

    handleClick = (e) => {
        // e.target is the clicked element
        let goto = e.target.getAttribute("data-goto");
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
            <button key={i} onClick={this.handleClick} data-goto={choice.goto}>{choice.text}</button>
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
                    <div className="nameInputDiv">
                        <input type="text" name="name" id="nameInput" />
                    </div>
                    <div className="nameButtonDiv">
                        <button onClick={this.handleNameButtonClick}>Get your Fathoovu on</button>
                    </div>
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
