import React from 'react';

export class TwitchComponent extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            url: "https://player.twitch.tv/?channel=warcraft&muted=true",
        };
    }

    render() {
        return (
            <div className="box">
                <iframe
                    title="twitch"
                    className="twitch"
                    src={this.state.url}
                    frameborder="0"
                    scrolling="no"
                    allowfullscreen="true"/>
            </div>
        )
    }
}