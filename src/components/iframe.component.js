import React from 'react';

export class IframeComponent extends React.Component {

    constructor(props){
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="box">
                <iframe
                    title="iframe"
                    className="iframe"
                    src={this.props.url}
                    frameBorder="0"
                    scrolling="no"
                    allowFullScreen={true}/>
            </div>
        )
    }
}