import React from 'react';
import './App.css';
import { IframeComponent } from './components/iframe.component';
import { RssComponent } from './components/rss.component';
import { IFRAME, RSS, CUSTOM } from './localStorage/enum';
import { CustomComponent } from './components/custom.component';
import { getConfig } from './localStorage/localStorage';

export class App extends React.Component {

    constructor(props){
      super(props);
      this.state = {
        config: {},
      };
    }

    componentDidMount() {
      const config = getConfig();
  
      this.setState({
        config,
      });
    }

    render() {
      const iframes = [];
      const rss = [];
      const custom = [];

      if (this.state.config[IFRAME] && this.state.config[IFRAME].length) {
        for (const item of this.state.config[IFRAME]) {
          iframes.push(
            <IframeComponent url={item.value} key={item.value}></IframeComponent>
          );
        }
      }

      if (this.state.config[RSS] && this.state.config[RSS].length) {
        for (const item of this.state.config[RSS]) {
          rss.push(
            <RssComponent url={item.value} key={item.value}></RssComponent>
          );
        }
      }

      if (this.state.config[CUSTOM] && this.state.config[CUSTOM].length) {
        for (const item of this.state.config[CUSTOM]) {
          custom.push(
            <CustomComponent custom={item.value} key={item.value}></CustomComponent>
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

