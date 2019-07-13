import React from 'react';
import { addItem, clearItems } from '../localStorage/localStorage';
import { IFRAME, RSS, CUSTOM } from '../localStorage/enum';

export class ConfigComponent extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            iframe: '',
            rss: '',
            custom: '',
        }

        this.onChange = this.onChange.bind(this);
        this.add = this.add.bind(this);
        this.clear = this.clear.bind(this);
    }

    onChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
    }

    add(event) {
        if (event.target.id === IFRAME) {
            addItem(IFRAME, this.state.iframe);
            this.setState({iframe: ''})
        }

        if (event.target.id === RSS) {
            addItem(RSS, this.state.rss);
            this.setState({rss: ''})
        }

        if (event.target.id === CUSTOM) {
            addItem(CUSTOM, this.state.custom);
            this.setState({custom: ''})
        }

        event.preventDefault();
    }

    clear(event) {
        clearItems();
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <h1>Configuration</h1>
                <form className="box" onSubmit={this.add} id={IFRAME}>
                    <label className="label">Iframe</label>
                    <input className="input" type="text" name="iframe" value={this.state.iframe} onChange={this.onChange} />
                    <button className="button is-link" type="submit">Add</button>
                </form>

                <form className="box" onSubmit={this.add} id={RSS}>
                    <label className="label">Rss</label>
                    <input className="input" type="text" name="rss" value={this.state.rss} onChange={this.onChange} />
                    <button className="button is-link" type="submit">Add</button>
                </form>

                <form className="box" onSubmit={this.add} id={CUSTOM}>
                    <label className="label">Custom HTML</label>
                    <input className="input" type="text" name="custom" value={this.state.custom} onChange={this.onChange} />
                    <button className="button is-link" type="submit">Add</button>
                </form>

                <button className="button is-danger" onClick={this.clear}>Clear configurations</button>
            </div>
        );
    }
}