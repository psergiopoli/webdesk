import React from 'react';
import Parser from 'rss-parser';

export class RssComponent extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            url: 'http://rss.home.uol.com.br/index.xml',
        };
    }

    componentDidMount(){
        const parser = new Parser();
        const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/';
        parser.parseURL(CORS_PROXY + this.state.url).then(feed => {
            this.setState({ feed });
        });
    }

    render() {
        if (this.state.feed) {
            const items = [];
            for (const item of this.state.feed.items) {
                items.push(
                    <li>
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