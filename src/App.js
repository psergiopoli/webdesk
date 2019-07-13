import React from 'react';
import './App.css';
import { IframeComponent } from './components/iframe.component';
import { RssComponent } from './components/rss.component';
import { getItems } from './localStorage/localStorage';
import { IFRAME, RSS, CUSTOM } from './localStorage/enum';
import { CustomComponent } from './components/custom.component';

export class App extends React.Component {

    constructor(props){
      super(props);
      this.state = {
        iframes: [],
        rss: [],
        custom: [],
      };
    }

    componentDidMount() {
      const iframes = getItems(IFRAME);
      const rss = getItems(RSS);
      const custom = getItems(CUSTOM);
  
      this.setState({
        iframes,
        rss,
        custom,
      });
    }

    render() {
      const iframes = [];
      const rss = [];
      const custom = [];

      if (this.state.iframes && this.state.iframes.length) {
        for (const item of this.state.iframes) {
          iframes.push(
            <IframeComponent url={item} key={item}></IframeComponent>
          );
        }
      }

      if (this.state.rss && this.state.rss.length) {
        for (const item of this.state.rss) {
          rss.push(
            <RssComponent url={item} key={item}></RssComponent>
          );
        }
      }

      if (this.state.custom && this.state.custom) {
        for (const item of this.state.custom) {
          custom.push(
            <CustomComponent custom={item} key={item}></CustomComponent>
          );
        }
      }
      
      return (
        <div>
          {custom}
          {iframes}
          {rss}
        </div>
      );
    }
}

