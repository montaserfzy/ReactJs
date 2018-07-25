import React, {Component} from "react";
import {Link} from 'react-router-dom'

class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isToggleOn: false,
            activePage: '/'
        };
    }

    isToggleMenu(e) {
        e.preventDefault();
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    render() {
        const toggleMenuClass = (this.state.isToggleOn ? 'show' : '');
        return (
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <a className="navbar-brand" href="/">Logo</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation" onClick={(e) => {
                        this.isToggleMenu(e)
                    }}>
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={'navbar-collapse collapse ' + toggleMenuClass} id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link to="/" className="nav-link">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="login" className="nav-link">Login</Link>
                            </li>
                            <li className='nav-item'>
                                <Link to="signup" className="nav-link">Signup</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
        )
    }
}

export default Nav