import React, { Component } from 'react';
import Header from '../Header/Header';
import Product from './Product';
import { connect } from 'react-redux';
class Shop extends Component {
    render() {
        var { products } = this.props;

        return (
            <div>
                <Header></Header>
                {/* top Products */}
                <div className="ads-grid_shop">
                    <div className="shop_inner_inf">
                    {/* tittle heading */}
                    {/* //tittle heading */}
                    {/* product left */}
                    <div className="side-bar col-md-3">
                        <div className="search-hotel">
                        <h3 className="agileits-sear-head">Search Here..</h3>
                        <form action="#" method="post">
                            <input type="search" placeholder="Product name..." name="search" required />
                            <input type="submit" defaultValue=" " />
                        </form>
                        </div>
                        {/* price range */}
                        <div className="range">
                        <h3 className="agileits-sear-head">Price range</h3>
                        <ul className="dropdown-menu6">
                            <li>
                            <div id="slider-range" />
                            <input type="text" id="amount" style={{border: 0, color: '#ffffff', fontWeight: 'normal'}} />
                            </li>
                        </ul>
                        </div>
                        {/* //price range */}
                        {/*preference */}
                        <div className="left-side">
                        <h3 className="agileits-sear-head">Occasion</h3>
                        <ul>
                            <li>
                            <input type="checkbox" className="checked" />
                            <span className="span">Casuals</span>
                            </li>
                            <li>
                            <input type="checkbox" className="checked" />
                            <span className="span">Party</span>
                            </li>
                            <li>
                            <input type="checkbox" className="checked" />
                            <span className="span">Wedding</span>
                            </li>
                            <li>
                            <input type="checkbox" className="checked" />
                            <span className="span">Ethnic</span>
                            </li>
                        </ul>
                        </div>
                        {/* // preference */}
                        {/* discounts */}
                        <div className="left-side">
                        <h3 className="agileits-sear-head">Discount</h3>
                        <ul>
                            <li>
                            <input type="checkbox" className="checked" />
                            <span className="span">5% or More</span>
                            </li>
                            <li>
                            <input type="checkbox" className="checked" />
                            <span className="span">10% or More</span>
                            </li>
                            <li>
                            <input type="checkbox" className="checked" />
                            <span className="span">20% or More</span>
                            </li>
                            <li>
                            <input type="checkbox" className="checked" />
                            <span className="span">30% or More</span>
                            </li>
                            <li>
                            <input type="checkbox" className="checked" />
                            <span className="span">50% or More</span>
                            </li>
                            <li>
                            <input type="checkbox" className="checked" />
                            <span className="span">60% or More</span>
                            </li>
                        </ul>
                        </div>
                        {/* //discounts */}
                        {/* reviews */}
                        <div className="customer-rev left-side">
                        <h3 className="agileits-sear-head">Customer Review</h3>
                        <ul>
                            <li>
                            <a href="#">
                                <i className="fa fa-star" aria-hidden="true" />
                                <i className="fa fa-star" aria-hidden="true" />
                                <i className="fa fa-star" aria-hidden="true" />
                                <i className="fa fa-star" aria-hidden="true" />
                                <i className="fa fa-star" aria-hidden="true" />
                                <span>5.0</span>
                            </a>
                            </li>
                            <li>
                            <a href="#">
                                <i className="fa fa-star" aria-hidden="true" />
                                <i className="fa fa-star" aria-hidden="true" />
                                <i className="fa fa-star" aria-hidden="true" />
                                <i className="fa fa-star" aria-hidden="true" />
                                <i className="fa fa-star-o" aria-hidden="true" />
                                <span>4.0</span>
                            </a>
                            </li>
                            <li>
                            <a href="#">
                                <i className="fa fa-star" aria-hidden="true" />
                                <i className="fa fa-star" aria-hidden="true" />
                                <i className="fa fa-star" aria-hidden="true" />
                                <i className="fa fa-star-half-o" aria-hidden="true" />
                                <i className="fa fa-star-o" aria-hidden="true" />
                                <span>3.5</span>
                            </a>
                            </li>
                            <li>
                            <a href="#">
                                <i className="fa fa-star" aria-hidden="true" />
                                <i className="fa fa-star" aria-hidden="true" />
                                <i className="fa fa-star" aria-hidden="true" />
                                <i className="fa fa-star-o" aria-hidden="true" />
                                <i className="fa fa-star-o" aria-hidden="true" />
                                <span>3.0</span>
                            </a>
                            </li>
                            <li>
                            <a href="#">
                                <i className="fa fa-star" aria-hidden="true" />
                                <i className="fa fa-star" aria-hidden="true" />
                                <i className="fa fa-star-half-o" aria-hidden="true" />
                                <i className="fa fa-star-o" aria-hidden="true" />
                                <i className="fa fa-star-o" aria-hidden="true" />
                                <span>2.5</span>
                            </a>
                            </li>
                        </ul>
                        </div>
                        {/* //reviews */}
                        {/* deals */}
                        <div className="deal-leftmk left-side">
                        <h3 className="agileits-sear-head">Special Deals</h3>
                        <div className="special-sec1">
                            <div className="col-xs-4 img-deals">
                            <img src="images/s4.jpg" alt="" />
                            </div>
                            <div className="col-xs-8 img-deal1">
                            <h3>Shuberry Heels</h3>
                            <a href="single.html">$180.00</a>
                            </div>
                            <div className="clearfix" />
                        </div>
                        <div className="special-sec1">
                            <div className="col-xs-4 img-deals">
                            <img src="images/s2.jpg" alt="" />
                            </div>
                            <div className="col-xs-8 img-deal1">
                            <h3>Chikku Loafers</h3>
                            <a href="single.html">$99.00</a>
                            </div>
                            <div className="clearfix" />
                        </div>
                        <div className="special-sec1">
                            <div className="col-xs-4 img-deals">
                            <img src="images/s1.jpg" alt="" />
                            </div>
                            <div className="col-xs-8 img-deal1">
                            <h3>Bella Toes</h3>
                            <a href="single.html">$165.00</a>
                            </div>
                            <div className="clearfix" />
                        </div>
                        <div className="special-sec1">
                            <div className="col-xs-4 img-deals">
                            <img src="images/s5.jpg" alt="" />
                            </div>
                            <div className="col-xs-8 img-deal1">
                            <h3>Red Bellies</h3>
                            <a href="single.html">$225.00</a>
                            </div>
                            <div className="clearfix" />
                        </div>
                        <div className="special-sec1">
                            <div className="col-xs-4 img-deals">
                            <img src="images/s3.jpg" alt="" />
                            </div>
                            <div className="col-xs-8 img-deal1">
                            <h3>(SRV) Sneakers</h3>
                            <a href="single.html">$169.00</a>
                            </div>
                            <div className="clearfix" />
                        </div>
                        </div>
                        {/* //deals */}
                    </div>
                    {/* //product left */}
                    {/* product right */}
                    <div className="left-ads-display col-md-9">
                        <div className="wrapper_top_shop">
                        <div className="col-md-6 shop_left">
                            <img src="images/banner3.jpg" alt="" />
                            <h6>40% off</h6>
                        </div>
                        <div className="col-md-6 shop_right">
                            <img src="images/banner2.jpg" alt="" />
                            <h6>50% off</h6>
                        </div>
                        <div className="clearfix" />
                        {/* product-sec1 */}
                        <div className="product-sec1">
                            {/*/mens*/}
                                {this.showProducts(products)}       
                            {/* //mens */}
                            <div className="clearfix" />
                        </div>
                        {/* //product-sec1 */}
                        <div className="col-md-6 shop_left shp">
                            <img src="images/banner4.jpg" alt="" />
                            <h6>21% off</h6>
                        </div>
                        <div className="col-md-6 shop_right shp">
                            <img src="images/banner1.jpg" alt="" />
                            <h6>31% off</h6>
                        </div>
                        <div className="clearfix" />
                        </div>
                    </div>
                    <div className="clearfix" />
                    </div>
                </div>
                {/* //top products */}
                <div className="mid_slider_w3lsagile">
                    <div className="col-md-3 mid_slider_text">
                    <h5>Some More Shoes</h5>
                    </div>
                    <div className="col-md-9 mid_slider_info">
                    <div id="myCarousel" className="carousel slide" data-ride="carousel">
                        {/* Indicators */}
                        <ol className="carousel-indicators">
                        <li data-target="#myCarousel" data-slide-to={0} className="" />
                        <li data-target="#myCarousel" data-slide-to={1} className="active" />
                        <li data-target="#myCarousel" data-slide-to={2} className="" />
                        <li data-target="#myCarousel" data-slide-to={3} className="" />
                        </ol>
                        <div className="carousel-inner" role="listbox">
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
                        <div className="item active">
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
            </div>
            
        );
    }

    showProducts(products){
        var result = null;
        if(products.length > 0){
            result = products.map((product, index) => {
                return(
                        <Product    
                            key = {index}
                            product = {product}
                            index = {index}
                        />
                );
            });
        }

        return result;
    }
}

const mapStateToProps = state => {
    return {
        products : state.products
    }
}

export default connect(mapStateToProps, null)(Shop);
