import React, { Component } from 'react';
import Header from '../Header/Header';

class Error extends Component {
    render() {
        return (
            <div>
                <Header></Header>
                {/* top Products */}
                <div className="ads-grid_shop">
                <div className="shop_inner_inf">
                    <div className="error_page">
                    <h4>404</h4>
                    <p>This link dead link</p>
                    <form action="#" method="post">
                        <input className="serch" type="search" name="serch" placeholder="Search here" required />
                        <button className="btn1"><i className="fa fa-search" aria-hidden="true" /></button>
                        <div className="clearfix"> </div>
                    </form>
                    <ul className="social-nav model-3d-0 footer-social social two">
                        <li>
                        <a href="#" className="facebook">
                            <div className="front"><i className="fa fa-facebook" aria-hidden="true" /></div>
                            <div className="back"><i className="fa fa-facebook" aria-hidden="true" /></div>
                        </a>
                        </li>
                        <li>
                        <a href="#" className="twitter">
                            <div className="front"><i className="fa fa-twitter" aria-hidden="true" /></div>
                            <div className="back"><i className="fa fa-twitter" aria-hidden="true" /></div>
                        </a>
                        </li>
                        <li>
                        <a href="#" className="instagram">
                            <div className="front"><i className="fa fa-instagram" aria-hidden="true" /></div>
                            <div className="back"><i className="fa fa-instagram" aria-hidden="true" /></div>
                        </a>
                        </li>
                    </ul>
                    <a className="b-home" href="index.html">Back to Home</a>
                    </div>
                </div>
            </div>
        </div>

          
        );
    }
}

export default Error;
