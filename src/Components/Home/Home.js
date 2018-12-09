import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Home extends Component {
    render() {
        return (
            <div>
            {/* banner */}
            <div className="banner_top" id="home">
            <div className="wrapper_top_w3layouts">
                <div className="header_agileits">
                    <div className="logo">
                        <h1><a className="navbar-brand" href="index.html"><span>Downy</span> <i>Shoes</i></a></h1>
                    </div>
                {/* cart details */}
                <div className="top_nav_right">
                    <div className="shoecart shoecart2 cart cart box_1">
                    <form action="#" method="post" className="last">
                        <input type="hidden" name="cmd" defaultValue="_cart" />
                        <input type="hidden" name="display" defaultValue={1} />
                        <button className="top_shoe_cart" type="submit" name="submit" value><i className="fa fa-cart-arrow-down" aria-hidden="true" /></button>
                    </form>
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
                </div>
                {/* /slider */}
                <div className="slider">
                <div className="callbacks_container">
                    <ul className="rslides callbacks callbacks1" id="slider4">
                        <li>
                            <div className="banner-top1">
                            <div className="banner-info-wthree">
                                <h3>
                                    <ul>
                                        <li><Link to="/">HOME</Link></li>
                                        <li><Link to="/about">ABOUT</Link></li>
                                        <li><Link to="/shop">SHOP NOW</Link></li>
                                        <li><Link to="/contact">CONTACT</Link></li>
                                        <li><Link to="/login">LOG IN</Link></li>
                                    </ul>
                                    Adidas
                                </h3>
                                <p>For All Walks of Life.</p>
                            </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="clearfix"> </div>
                </div>
                {/* //slider */}
                <ul className="top_icons">
                <li><a href="#"><span className="fa fa-facebook" aria-hidden="true" /></a></li>
                <li><a href="#"><span className="fa fa-twitter" aria-hidden="true" /></a></li>
                <li><a href="#"><span className="fa fa-linkedin" aria-hidden="true" /></a></li>
                <li><a href="#"><span className="fa fa-google-plus" aria-hidden="true" /></a></li>
                </ul>
            </div>
            </div>
            {/* //banner */}

            {/* /girds_bottom*/}
            <div className="grids_bottom">
                <div className="style-grids">
                <div className="col-md-6 style-grid style-grid-1">
                    <img src="images/b1.jpg" alt="shoe" />
                </div>
                </div>
                <div className="col-md-6 style-grid style-grid-2">
                <div className="style-image-1_info">
                    <div className="style-grid-2-text_info">
                    <h3>Nike DOWNSHIFTER</h3>
                    <p>Itaque earum rerum hic tenetur a sapiente delectus reiciendis maiores alias consequatur.sed quia non numquam eius modi
                        tempora incidunt ut labore et dolore .</p>
                    <div className="shop-button">
                        <a href="shop.html">Shop Now</a>
                    </div>
                    </div>
                </div>
                <div className="style-image-2">
                    <img src="images/b2.jpg" alt="shoe" />
                    <div className="style-grid-2-text">
                    <h3>Air force</h3>
                    </div>
                </div>
                </div>
                <div className="clearfix" />
            </div>
            {/* //grids_bottom*/}
            {/* /girds_bottom2*/}
            <div className="grids_sec_2">
                <div className="style-grids_main">
                <div className="col-md-6 grids_sec_2_left">
                    <div className="grid_sec_info">
                    <div className="style-grid-2-text_info">
                        <h3>Sneakers</h3>
                        <p>Itaque earum rerum hic tenetur a sapiente delectus reiciendis maiores alias consequatur.sed quia non numquam eius modi
                        tempora incidunt ut labore .</p>
                        <div className="shop-button">
                        <a href="shop.html">Shop Now</a>
                        </div>
                    </div>
                    </div>
                    <div className="style-image-2">
                    <img src="images/b4.jpg" alt="shoe" />
                    <div className="style-grid-2-text">
                        <h3>Air force</h3>
                    </div>
                    </div>
                </div>
                <div className="col-md-6 grids_sec_2_left">
                    <div className="style-image-2">
                    <img src="images/b3.jpg" alt="shoe" />
                    <div className="style-grid-2-text">
                        <h3>Air force</h3>
                    </div>
                    </div>
                    <div className="grid_sec_info last">
                    <div className="style-grid-2-text_info">
                        <h3>Sneakers</h3>
                        <p>Itaque earum rerum hic tenetur a sapiente delectus reiciendis maiores alias consequatur.sed quia non numquam eius modi
                        tempora incidunt ut labore .</p>
                        <div className="shop-button two">
                        <a href="shop.html">Shop Now</a>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="clearfix" />
                </div>
            </div>
            {/* //grids_bottom2*/}
            {/* /Properties */}
            <div className="mid_slider_w3lsagile">
                <div className="col-md-3 mid_slider_text">
                <h5>Some More Shoes</h5>
                </div>
                <div className="col-md-9 mid_slider_info">
                <div id="myCarousel" className="carousel slide" data-ride="carousel">
                    {/* Indicators */}
                    <ol className="carousel-indicators">
                    <li data-target="#myCarousel" data-slide-to={0} className="active" />
                    <li data-target="#myCarousel" data-slide-to={1} className="" />
                    <li data-target="#myCarousel" data-slide-to={2} className="" />
                    <li data-target="#myCarousel" data-slide-to={3} className="" />
                    </ol>
                    <div className="carousel-inner" role="listbox">
                    <div className="item active">
                        <div className="row">
                        <div className="col-md-3 col-sm-3 col-xs-3 slidering">
                            <div className="thumbnail"><img src="images/g1.jpg" alt="Image" style={{maxWidth: '100%'}} /></div>
                        </div>
                        <div className="col-md-3 col-sm-3 col-xs-3 slidering">
                            <div className="thumbnail"><img src="images/g2.jpg" alt="Image" style={{maxWidth: '100%'}} /></div>
                        </div>
                        <div className="col-md-3 col-sm-3 col-xs-3 slidering">
                            <div className="thumbnail"><img src="images/g3.jpg" alt="Image" style={{maxWidth: '100%'}} /></div>
                        </div>
                        <div className="col-md-3 col-sm-3 col-xs-3 slidering">
                            <div className="thumbnail"><img src="images/g4.jpg" alt="Image" style={{maxWidth: '100%'}} /></div>
                        </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="row">
                        <div className="col-md-3 col-sm-3 col-xs-3 slidering">
                            <div className="thumbnail"><img src="images/g5.jpg" alt="Image" style={{maxWidth: '100%'}} /></div>
                        </div>
                        <div className="col-md-3 col-sm-3 col-xs-3 slidering">
                            <div className="thumbnail"><img src="images/g6.jpg" alt="Image" style={{maxWidth: '100%'}} /></div>
                        </div>
                        <div className="col-md-3 col-sm-3 col-xs-3 slidering">
                            <div className="thumbnail"><img src="images/g2.jpg" alt="Image" style={{maxWidth: '100%'}} /></div>
                        </div>
                        <div className="col-md-3 col-sm-3 col-xs-3 slidering">
                            <div className="thumbnail"><img src="images/g1.jpg" alt="Image" style={{maxWidth: '100%'}} /></div>
                        </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="row">
                        <div className="col-md-3 col-sm-3 col-xs-3 slidering">
                            <div className="thumbnail"><img src="images/g1.jpg" alt="Image" style={{maxWidth: '100%'}} /></div>
                        </div>
                        <div className="col-md-3 col-sm-3 col-xs-3 slidering">
                            <div className="thumbnail"><img src="images/g2.jpg" alt="Image" style={{maxWidth: '100%'}} /></div>
                        </div>
                        <div className="col-md-3 col-sm-3 col-xs-3 slidering">
                            <div className="thumbnail"><img src="images/g3.jpg" alt="Image" style={{maxWidth: '100%'}} /></div>
                        </div>
                        <div className="col-md-3 col-sm-3 col-xs-3 slidering">
                            <div className="thumbnail"><img src="images/g4.jpg" alt="Image" style={{maxWidth: '100%'}} /></div>
                        </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="row">
                        <div className="col-md-3 col-sm-3 col-xs-3 slidering">
                            <div className="thumbnail"><img src="images/g1.jpg" alt="Image" style={{maxWidth: '100%'}} /></div>
                        </div>
                        <div className="col-md-3 col-sm-3 col-xs-3 slidering">
                            <div className="thumbnail"><img src="images/g2.jpg" alt="Image" style={{maxWidth: '100%'}} /></div>
                        </div>
                        <div className="col-md-3 col-sm-3 col-xs-3 slidering">
                            <div className="thumbnail"><img src="images/g3.jpg" alt="Image" style={{maxWidth: '100%'}} /></div>
                        </div>
                        <div className="col-md-3 col-sm-3 col-xs-3 slidering">
                            <div className="thumbnail"><img src="images/g4.jpg" alt="Image" style={{maxWidth: '100%'}} /></div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <a className="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
                    <span className="fa fa-chevron-left" aria-hidden="true" />
                    <span className="sr-only">Previous</span>
                    </a>
                    <a className="right carousel-control" href="#myCarousel" role="button" data-slide="next">
                    <span className="fa fa-chevron-right" aria-hidden="true" />
                    <span className="sr-only">Next</span>
                    </a>
                    {/* The Modal */}
                </div>
                </div>
                <div className="clearfix"> </div>
            </div>
            {/*//banner */}
            </div>


        );
    }
}

export default Home;
