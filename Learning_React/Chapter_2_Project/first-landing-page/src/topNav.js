import React from 'react'
import logo from './img/index.png'

class TopNav extends React.Component {
    render() {
        return (
            <nav class="app__navbar">
                <div class="app__navbar-logo">
                    <img src={logo} alt="app__logo" />;
                </div>
                <ul class="app__navbar-links">
                    <li class="p__opensans"><a href="#">Home</a></li>
                    <li class="p__opensans"><a href="#">Menu</a></li>
                    <li class="p__opensans"><a href="#">Awards</a></li>
                    <li class="p__opensans"><a href="#">Location</a></li>
                </ul>
                <div class="app__navbar-login">
                    <a class="p__opensans" href="#">Home</a>
                    <div></div>
                    <a class="p__opensans" href="#">Home</a>
                </div>
            </nav>
        );
    }
}

export default TopNav;