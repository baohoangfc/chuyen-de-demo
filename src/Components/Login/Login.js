import React, { Component } from 'react';
import { Link } from "react-router-dom";
class Login extends Component {
    render() {
        return (
            <div>
                <title>Log In</title>
                <center>
                    <div className="login_div">
                    <p id="header_para" className="w3-animate-fading"><b>Bao</b><span id="card">Occho</span></p>
                    <hr id="hr1" />&nbsp;
                    <hr id="hr2" /><br /><br /><br />
                    <form action>
                        <input type="email" name="email" placeholder="username" required className="input_style w3-animate-right" /><br /><br />
                        <input type="password" name="password" placeholder="password" required className="input_style w3-animate-left" /><br /><br />
                        <button name="submit_button" id="login_button" className="w3-animate-bottom" ><Link to="/shop">Log In</Link></button>
                    </form>
                    <p id="forgot" className="w3-animate-zoom"><a href="#">forgot password?</a></p><br /><p />
                    </div>
                </center>
                </div>

        );
    }
}

export default Login;
