import React from 'react';
import Parser from 'rss-parser';

export class RssComponent extends React.Component {

    constructor(props){
        super(props);
        this.state = {};
    }

    componentDidMount(){
        const parser = new Parser();
        parser.parseURL(this.props.url).then(feed => {
            this.setState({ feed });
        });
    }

    render() {
        if (this.state.feed) {
            const items = [];
            for (const item of this.state.feed.items) {
                items.push(
                    <li key={item.guid}>
                        <a target='_blank' href={item.link}>{item.title}</a>                        
                    </li>
                )
            }

            return (
                <div className="box">
                    <h1>{this.state.feed.title}</h1>
                    {items}
                </div>
            )
        } else {
            return '';
        }


    }
}