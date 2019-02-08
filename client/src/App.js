import "./App.css";

import React, { Component } from "react";

import ContainedButtons from "./components/layout/ContainedButtons";
import Image from "./components/layout/Image";
import NameInput from "./components/layout/NameInput";
import StoryText from "./components/layout/StoryText";
import storyEntries from "./storyEntries.json";

class App extends Component {
    state = {
        name: "",
        storyEntry: storyEntries["init"]
    };

    setStoryEntry = (goto) => {
        console.log(goto);
        // Ask for name again
        if (goto === "init")
            this.setState({ name: "" });

        this.setState({
            storyEntry: storyEntries[goto]
        });
    }

    setName = (name) => {
        this.setState({
            name: name
        });
    }

    getButtons = () => {
        return this.state.storyEntry.choices.map((choice, i) =>
            <ContainedButtons key={i} setGoto={this.setStoryEntry} goto={choice.goto} text={choice.text} />
        );
    }

    render = () => {
        let noStyle = {};
        let hiddenStyle = {
            display: "none"
        };
        return (
            <div className="height100">
                <div style={this.state.name === "" ? noStyle : hiddenStyle}>
                    <NameInput setName={this.setName} />
                </div>
                <div style={this.state.name === "" ? hiddenStyle : noStyle}>
                    <div className="imageContainer">
                        <StoryText text={this.state.storyEntry.text.replace("<name>", this.state.name)} />
                        <Image src={this.state.storyEntry.image} />
                        <div className="optionsDiv">
                            {this.getButtons()}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
