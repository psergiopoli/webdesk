import React from 'react';

export class CustomComponent extends React.Component {

    constructor(props){
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="box">
                <div dangerouslySetInnerHTML={{ __html: this.props.custom }} />
            </div>
        )
    }
}