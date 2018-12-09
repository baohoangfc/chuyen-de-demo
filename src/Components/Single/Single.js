import React, { Component } from 'react';

class Single extends Component {
    render() {
        return (
            <div>
                {/* top Products */}
                <div className="ads-grid_shop">
                    <div className="shop_inner_inf">
                    <div className="col-md-4 single-right-left ">
                        <div className="grid images_3_of_2">
                        <div className="flexslider">
                            <ul className="slides">
                            <li data-thumb="images/d2.jpg">
                                <div className="thumb-image"> <img src="images/d2.jpg" data-imagezoom="true" className="img-responsive" /> </div>
                            </li>
                            <li data-thumb="images/d1.jpg">
                                <div className="thumb-image"> <img src="images/d1.jpg" data-imagezoom="true" className="img-responsive" /> </div>
                            </li>
                            <li data-thumb="images/d3.jpg">
                                <div className="thumb-image"> <img src="images/d3.jpg" data-imagezoom="true" className="img-responsive" /> </div>
                            </li>
                            </ul>
                            <div className="clearfix" />
                        </div>
                        </div>
                    </div>
                    <div className="col-md-8 single-right-left simpleCart_shelfItem">
                        <h3>Shoe Rock Vision(SRV) Sneakers (Blue)</h3>
                        <p><span className="item_price">$650</span>
                        <del>$1,199</del>
                        </p>
                        <div className="rating1">
                        <ul className="stars">
                            <li><a href="#"><i className="fa fa-star" aria-hidden="true" /></a></li>
                            <li><a href="#"><i className="fa fa-star" aria-hidden="true" /></a></li>
                            <li><a href="#"><i className="fa fa-star" aria-hidden="true" /></a></li>
                            <li><a href="#"><i className="fa fa-star-half-o" aria-hidden="true" /></a></li>
                            <li><a href="#"><i className="fa fa-star-o" aria-hidden="true" /></a></li>
                        </ul>
                        </div>
                        <div className="description">
                        <h5>Check delivery, payment options and charges at your location</h5>
                        <form action="#" method="post">
                            <input type="text" defaultValue="Enter pincode" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Enter pincode';}" required />
                            <input type="submit" defaultValue="Check" />
                        </form>
                        </div>
                        <div className="color-quality">
                        <div className="color-quality-right">
                            <h5>Quality :</h5>
                            <select id="country1" onchange="change_country(this.value)" className="frm-field required sect">
                            <option value="null">5 Qty</option>
                            <option value="null">6 Qty</option> 
                            <option value="null">7 Qty</option>					
                            <option value="null">10 Qty</option>								
                            </select>
                        </div>
                        </div>
                        <div className="occasional">
                        <h5>Types :</h5>
                        <div className="colr ert">
                            <label className="radio"><input type="radio" name="radio" defaultChecked /><i />Casual Shoes</label>
                        </div>
                        <div className="colr">
                            <label className="radio"><input type="radio" name="radio" /><i />Sneakers </label>
                        </div>
                        <div className="colr">
                            <label className="radio"><input type="radio" name="radio" /><i />Formal Shoes</label>
                        </div>
                        <div className="clearfix"> </div>
                        </div>
                        <div className="occasion-cart">
                        <div className="shoe single-item single_page_b">
                            <form action="#" method="post">
                            <input type="hidden" name="cmd" defaultValue="_cart" />
                            <input type="hidden" name="add" defaultValue={1} />
                            <input type="hidden" name="shoe_item" defaultValue="Chikku Loafers" />
                            <input type="hidden" name="amount" defaultValue={405.00} />
                            <input type="submit" name="submit" defaultValue="Add to cart" className="button add" />
                            <a href="#" data-toggle="modal" data-target="#myModal1" />
                            </form>
                        </div>
                        </div>
                        <ul className="social-nav model-3d-0 footer-social social single_page">
                        <li className="share">Share On : </li>
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
                        <li>
                            <a href="#" className="pinterest">
                            <div className="front"><i className="fa fa-linkedin" aria-hidden="true" /></div>
                            <div className="back"><i className="fa fa-linkedin" aria-hidden="true" /></div>
                            </a>
                        </li>
                        </ul>
                    </div>
                    <div className="clearfix"> </div>
                    {/*/tabs*/}
                    <div className="responsive_tabs">
                        <div id="horizontalTab">
                        <ul className="resp-tabs-list">
                            <li>Description</li>
                            <li>Reviews</li>
                            <li>Information</li>
                        </ul>
                        <div className="resp-tabs-container">
                            {/*/tab_one*/}
                            <div className="tab1">
                            <div className="single_page">
                                <h6>Lorem ipsum dolor sit amet</h6>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elPellentesque vehicula augue eget nisl ullamcorper, molestie
                                blandit ipsum auctor. Mauris volutpat augue dolor.Consectetur adipisicing elit, sed do eiusmod tempor incididunt
                                ut lab ore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco. labore et dolore
                                magna aliqua.</p>
                                <p className="para">Lorem ipsum dolor sit amet, consectetur adipisicing elPellentesque vehicula augue eget nisl ullamcorper, molestie
                                blandit ipsum auctor. Mauris volutpat augue dolor.Consectetur adipisicing elit, sed do eiusmod tempor incididunt
                                ut lab ore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco. labore et dolore
                                magna aliqua.</p>
                            </div>
                            </div>
                            {/*//tab_one*/}
                            <div className="tab2">
                            <div className="single_page">
                                <div className="bootstrap-tab-text-grids">
                                <div className="bootstrap-tab-text-grid">
                                    <div className="bootstrap-tab-text-grid-left">
                                    <img src="images/t1.jpg" alt=" " className="img-responsive" />
                                    </div>
                                    <div className="bootstrap-tab-text-grid-right">
                                    <ul>
                                        <li><a href="#">Admin</a></li>
                                        <li><a href="#"><i className="fa fa-reply-all" aria-hidden="true" /> Reply</a></li>
                                    </ul>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elPellentesque vehicula augue eget.Ut enim ad minima veniam,
                                        quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis
                                        autem vel eum iure reprehenderit.</p>
                                    </div>
                                    <div className="clearfix"> </div>
                                </div>
                                <div className="add-review">
                                    <h4>add a review</h4>
                                    <form action="#" method="post">
                                    <input type="text" name="Name" required="Name" />
                                    <input type="email" name="Email" required="Email" />
                                    <textarea name="Message" required defaultValue={""} />
                                    <input type="submit" defaultValue="SEND" />
                                    </form>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="tab3">
                            <div className="single_page">
                                <h6>Shoe Rock Vision(SRV) Sneakers (Blue)</h6>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elPellentesque vehicula augue eget nisl ullamcorper, molestie
                                blandit ipsum auctor. Mauris volutpat augue dolor.Consectetur adipisicing elit, sed do eiusmod tempor incididunt
                                ut lab ore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco. labore et dolore
                                magna aliqua.</p>
                                <p className="para">Lorem ipsum dolor sit amet, consectetur adipisicing elPellentesque vehicula augue eget nisl ullamcorper, molestie
                                blandit ipsum auctor. Mauris volutpat augue dolor.Consectetur adipisicing elit, sed do eiusmod tempor incididunt
                                ut lab ore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco. labore et dolore
                                magna aliqua.</p>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    {/*//tabs*/}
                    {/* /new_arrivals */}
                    <div className="new_arrivals">
                        <h3>Featured Products</h3>
                        {/* /womens */}
                        <div className="col-md-3 product-men women_two">
                        <div className="product-shoe-info shoe">
                            <div className="men-pro-item">
                            <div className="men-thumb-item">
                                <img src="images/s4.jpg" alt />
                                <div className="men-cart-pro">
                                <div className="inner-men-cart-pro">
                                    <a href="single.html" className="link-product-add-cart">Quick View</a>
                                </div>
                                </div>
                                <span className="product-new-top">New</span>
                            </div>
                            <div className="item-info-product">
                                <h4>
                                <a href="single.html">Shuberry Heels </a>
                                </h4>
                                <div className="info-product-price">
                                <div className="grid_meta">
                                    <div className="product_price">
                                    <div className="grid-price ">
                                        <span className="money ">$575.00</span>
                                    </div>
                                    </div>
                                    <ul className="stars">
                                    <li><a href="#"><i className="fa fa-star" aria-hidden="true" /></a></li>
                                    <li><a href="#"><i className="fa fa-star" aria-hidden="true" /></a></li>
                                    <li><a href="#"><i className="fa fa-star" aria-hidden="true" /></a></li>
                                    <li><a href="#"><i className="fa fa-star" aria-hidden="true" /></a></li>
                                    <li><a href="#"><i className="fa fa-star-half-o" aria-hidden="true" /></a></li>
                                    </ul>
                                </div>
                                <div className="shoe single-item hvr-outline-out">
                                    <form action="#" method="post">
                                    <input type="hidden" name="cmd" defaultValue="_cart" />
                                    <input type="hidden" name="add" defaultValue={1} />
                                    <input type="hidden" name="shoe_item" defaultValue="Shuberry Heels" />
                                    <input type="hidden" name="amount" defaultValue={575.00} />
                                    <button type="submit" className="shoe-cart pshoe-cart"><i className="fa fa-cart-plus" aria-hidden="true" /></button>
                                    <a href="#" data-toggle="modal" data-target="#myModal1" />
                                    </form>
                                </div>
                                </div>
                                <div className="clearfix" />
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="col-md-3 product-men women_two">
                        <div className="product-shoe-info shoe">
                            <div className="men-pro-item">
                            <div className="men-thumb-item">
                                <img src="images/s5.jpg" alt />
                                <div className="men-cart-pro">
                                <div className="inner-men-cart-pro">
                                    <a href="single.html" className="link-product-add-cart">Quick View</a>
                                </div>
                                </div>
                                <span className="product-new-top">New</span>
                            </div>
                            <div className="item-info-product">
                                <h4>
                                <a href="single.html">Red Bellies </a>
                                </h4>
                                <div className="info-product-price">
                                <div className="grid_meta">
                                    <div className="product_price">
                                    <div className="grid-price ">
                                        <span className="money ">$325.00</span>
                                    </div>
                                    </div>
                                    <ul className="stars">
                                    <li><a href="#"><i className="fa fa-star" aria-hidden="true" /></a></li>
                                    <li><a href="#"><i className="fa fa-star" aria-hidden="true" /></a></li>
                                    <li><a href="#"><i className="fa fa-star" aria-hidden="true" /></a></li>
                                    <li><a href="#"><i className="fa fa-star-half-o" aria-hidden="true" /></a></li>
                                    <li><a href="#"><i className="fa fa-star-o" aria-hidden="true" /></a></li>
                                    </ul>
                                </div>
                                <div className="shoe single-item hvr-outline-out">
                                    <form action="#" method="post">
                                    <input type="hidden" name="cmd" defaultValue="_cart" />
                                    <input type="hidden" name="add" defaultValue={1} />
                                    <input type="hidden" name="shoe_item" defaultValue="Red Bellies" />
                                    <input type="hidden" name="amount" defaultValue={325.00} />
                                    <button type="submit" className="shoe-cart pshoe-cart"><i className="fa fa-cart-plus" aria-hidden="true" /></button>
                                    <a href="#" data-toggle="modal" data-target="#myModal1" />
                                    </form>
                                </div>
                                </div>
                                <div className="clearfix" />
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="col-md-3 product-men women_two">
                        <div className="product-shoe-info shoe">
                            <div className="men-pro-item">
                            <div className="men-thumb-item">
                                <img src="images/s7.jpg" alt />
                                <div className="men-cart-pro">
                                <div className="inner-men-cart-pro">
                                    <a href="single.html" className="link-product-add-cart">Quick View</a>
                                </div>
                                </div>
                                <span className="product-new-top">New</span>
                            </div>
                            <div className="item-info-product">
                                <h4>
                                <a href="single.html">Running Shoes</a>
                                </h4>
                                <div className="info-product-price">
                                <div className="grid_meta">
                                    <div className="product_price">
                                    <div className="grid-price ">
                                        <span className="money ">$875.00</span>
                                    </div>
                                    </div>
                                    <ul className="stars">
                                    <li><a href="#"><i className="fa fa-star" aria-hidden="true" /></a></li>
                                    <li><a href="#"><i className="fa fa-star" aria-hidden="true" /></a></li>
                                    <li><a href="#"><i className="fa fa-star" aria-hidden="true" /></a></li>
                                    <li><a href="#"><i className="fa fa-star" aria-hidden="true" /></a></li>
                                    <li><a href="#"><i className="fa fa-star-half-o" aria-hidden="true" /></a></li>
                                    </ul>
                                </div>
                                <div className="shoe single-item hvr-outline-out">
                                    <form action="#" method="post">
                                    <input type="hidden" name="cmd" defaultValue="_cart" />
                                    <input type="hidden" name="add" defaultValue={1} />
                                    <input type="hidden" name="shoe_item" defaultValue="Running Shoes" />
                                    <input type="hidden" name="amount" defaultValue={875.00} />
                                    <button type="submit" className="shoe-cart pshoe-cart"><i className="fa fa-cart-plus" aria-hidden="true" /></button>
                                    <a href="#" data-toggle="modal" data-target="#myModal1" />
                                    </form>
                                </div>
                                </div>
                                <div className="clearfix" />
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="col-md-3 product-men women_two">
                        <div className="product-shoe-info shoe">
                            <div className="men-pro-item">
                            <div className="men-thumb-item">
                                <img src="images/s8.jpg" alt />
                                <div className="men-cart-pro">
                                <div className="inner-men-cart-pro">
                                    <a href="single.html" className="link-product-add-cart">Quick View</a>
                                </div>
                                </div>
                                <span className="product-new-top">New</span>
                            </div>
                            <div className="item-info-product">
                                <h4>
                                <a href="single.html">Sukun Casuals</a>
                                </h4>
                                <div className="info-product-price">
                                <div className="grid_meta">
                                    <div className="product_price">
                                    <div className="grid-price ">
                                        <span className="money ">$505.00</span>
                                    </div>
                                    </div>
                                    <ul className="stars">
                                    <li><a href="#"><i className="fa fa-star" aria-hidden="true" /></a></li>
                                    <li><a href="#"><i className="fa fa-star" aria-hidden="true" /></a></li>
                                    <li><a href="#"><i className="fa fa-star" aria-hidden="true" /></a></li>
                                    <li><a href="#"><i className="fa fa-star" aria-hidden="true" /></a></li>
                                    <li><a href="#"><i className="fa fa-star-half-o" aria-hidden="true" /></a></li>
                                    </ul>
                                </div>
                                <div className="shoe single-item hvr-outline-out">
                                    <form action="#" method="post">
                                    <input type="hidden" name="cmd" defaultValue="_cart" />
                                    <input type="hidden" name="add" defaultValue={1} />
                                    <input type="hidden" name="shoe_item" defaultValue="Sukun Casuals" />
                                    <input type="hidden" name="amount" defaultValue={505.00} />
                                    <button type="submit" className="shoe-cart pshoe-cart"><i className="fa fa-cart-plus" aria-hidden="true" /></button>
                                    <a href="#" data-toggle="modal" data-target="#myModal1" />
                                    </form>
                                </div>
                                </div>
                                <div className="clearfix" />
                            </div>
                            </div>
                        </div>
                        </div>
                        {/* //womens */}
                        <div className="clearfix" />
                    </div>
                    {/*//new_arrivals*/}
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
                        <li data-target="#myCarousel" data-slide-to={0} className />
                        <li data-target="#myCarousel" data-slide-to={1} className="active" />
                        <li data-target="#myCarousel" data-slide-to={2} className />
                        <li data-target="#myCarousel" data-slide-to={3} className />
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
}

export default Single;
