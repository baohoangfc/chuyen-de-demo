import React, { Component } from 'react';
import { Link } from "react-router-dom";
class Header extends Component {
    render() {
        return (
                <div className="banner_top innerpage" id="home">
                    <div className="wrapper_top_w3layouts">
                    <div className="header_agileits">
                        <div className="logo inner_page_log">
                        <h1><a className="navbar-brand" href="index.html"><span>Downy</span> <i>Shoes</i></a></h1>
                        </div>
                        
                        {/* cart details */}
                        <div className="top_nav_right">
                        <div className="shoecart shoecart2 cart cart box_1">
                            <form className="last">
                            <input type="hidden" name="cmd" defaultValue="_cart" />
                            <input type="hidden" name="display" defaultValue={1} />
                            <button className="top_shoe_cart" type="submit" name="submit" value><i className="fa fa-cart-arrow-down" aria-hidden="true" /></button>
                            </form>
                        </div>
                        </div>
                    </div>
                    </div>
                    {/* //cart details */}
                    {/* search */}
                    <div className="search_w3ls_agileinfo">
                    <div className="cd-main-header">
                        <ul className="cd-header-buttons">
                        <li><a className="cd-search-trigger" href="#cd-search"> <span /></a></li>
                        </ul>
                    </div>
                    <div id="cd-search" className="cd-search">
                        <form action="#" method="post">
                        <input name="Search" type="search" placeholder="Click enter after typing..." />
                        </form>
                    </div>
                    </div>
                    {/* //search */}
                    <div className="clearfix" />
                    {/* /banner_inner */}
                    <div className="services-breadcrumb_w3ls_agileinfo">
                    <div className="inner_breadcrumb_agileits_w3">
                        <ul className="short">
                        <div className="main-menu">
                                <li id="ab"><Link to="/">HOME</Link></li>
                                <li id="ab"><Link to="/about">ABOUT</Link></li>
                                <li id="ab"><Link to="/shop">SHOP NOW</Link></li>
                                <li id="ab"><Link to="/contact">CONTACT</Link></li>
                                <li id="ab"><Link to="/login">LOG IN</Link></li>   
                        </div>  
                        </ul>
                    </div>
                    </div>
                    {/* //banner_inner */}
                </div>
               
            
        );
    }
}

export default Header;