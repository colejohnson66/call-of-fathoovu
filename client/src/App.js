import "./App.css";

import React, { Component } from "react";

import storyEntries from "./storyEntries.json";

class App extends Component {
    state = {
        storyEntry: storyEntries["init"]
    };

    handleClick = (e) => {
        // e.target is the clicked element
        let goto = e.target.getAttribute("goto");
        this.setState({
            storyEntry: storyEntries[goto]
        });
    }

    getButtons = () => {
        return this.state.storyEntry.choices.map((choice, i) =>
            <button key={i} onClick={this.handleClick} goto={choice.goto}>{choice.text}</button>
        );
    }

    render() {
        return (
            <div>
                <div>
                    {this.state.storyEntry.text}
                </div>
                <div>
                    {this.getButtons()}
                </div>
            </div>
        );
    }
}

export default App;
