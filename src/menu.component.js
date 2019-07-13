import React from 'react';
import { Link } from 'react-router-dom'

export class MenuComponent extends React.Component {
    render() {
        return (
            <div>
                <Link to="/">Home</Link><br></br>
                <Link to="/config">Configuration</Link><br></br>
                <Link to="/about">About</Link><br></br>
            </div>
        );
    }
}