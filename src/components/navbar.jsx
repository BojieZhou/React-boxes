import React, { Component } from 'react';

class Navbar extends Component {
    state = {} 

    render() { 
        return (
            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">
                        Navbar <span>Boxes Count:{this.props.boxesCount}</span>
                    </a>
                </div>
            </nav>
        );
    }
}
 
export default Navbar;