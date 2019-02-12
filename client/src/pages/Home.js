import React, { Component } from "react";

import ContainedButtons from ".././components/layout/ContainedButtons";
import Image from ".././components/layout/Image";
import NameInput from ".././components/layout/NameInput";
import StoryText from ".././components/layout/StoryText";
import api from "../api";

class Home extends Component {
    state = {
        name: "",
        story: {
            //path: "init",
            text: "It is an average Friday night.  You are at home, sitting through a dark and stormy night...",
            image: "../images/013.jpg",
            choices: [
                {
                    "text": "Continue...",
                    "goto": "init2"
                }
            ],
            password: ""
        },
        cheevos: []
    };

    componentDidMount = () => {
        api.stories.getByPath("init").then((data) => {
            console.log(data[0]);
            this.setState({
                story: data[0]
            });
        });
    }

    setStoryEntry = (goto) => {
        console.log(goto);
        // Ask for name again
        if (goto === "init")
            this.setState({ name: "", password: "" });

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

        // get new story
        api.stories.getByPath(goto).then((data) => {
            console.log(data[0]);
            this.setState({
                story: data[0]
            });
        });
    }

    setUser = (name, password) => {
        this.setState({
            name: name,
            password: password
        });
    }

    setCheevos = (cheevos) => {
        this.setState({
            cheevos: cheevos
        });
    }

    getButtons = () => {
        return this.state.story.choices.map((choice, i) =>
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

        console.log(this.state.story);

        return (
            <div className="height100">
                <div style={this.state.cheevos.length !== 0 ? noStyle : hiddenStyle}>
                    {/*TODO: show achievements*/}
                </div>
                <div style={this.state.cheevos.length !== 0 ? hiddenStyle : noStyle}>
                    <div style={this.state.name === "" ? noStyle : hiddenStyle}>
                        <NameInput setUser={this.setUser} setCheevos={this.setCheevos} />
                    </div>
                    <div style={this.state.name === "" ? hiddenStyle : noStyle}>
                        <div className="imageContainer">
                            <div>
                                <StoryText text={this.state.story.text.replace("<name>", this.state.name)} />
                                <Image src={this.state.story.imagePath} />
                            </div>
                            <div className="optionsDiv">
                                {this.getButtons()}
                            </div>
                        </div>
                    </div>
                </div>
                <img src="https://creamdreamextremeteam.github.io/MissionNutrition/assets/images/MIC.gif" id="tc" style={tcStyle} alt="" />
            </div>
        );
    }
}

export default Home;
