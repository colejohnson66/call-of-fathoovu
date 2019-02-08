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

        if (goto === "call-tc") {
            let img = document.getElementById("tc");
            let audio = new Audio("https://creamdreamextremeteam.github.io/MissionNutrition/assets/images/Audio/bgaudio.mp3");
            audio.play();
            setTimeout(() => {
                img.className = "animated bounceInDown";
                img.classList.add("animated", "bounceInDown");
                img.style = "position:absolute; left:0; top:0; width:100%";
            }, 6.5 * 1000);
            setTimeout(() => {
                img.className = "animated zoomOutUp";
                audio.pause();
            }, 10 * 1000);
            setTimeout(() => {
                img.style = "position:absolute; left:0; top:0; width:100%; visibility:hidden";
            }, 15 * 1000);
        }

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

        let tcStyle = {
            position: "absolute",
            left: 0,
            top: 0,
            width: "100%",
            visibility: "hidden"
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
                <img src="https://creamdreamextremeteam.github.io/MissionNutrition/assets/images/MIC.gif" id="tc" style={tcStyle} alt="" />
            </div>
        );
    }
}

export default App;
