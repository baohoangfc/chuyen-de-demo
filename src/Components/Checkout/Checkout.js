import React, { Component } from 'react';
import Header from '../Header/Header';
class Checkout extends Component {
    render() {
        return (
            <div>
                <Header></Header>
                {/* top Products */}
                <div className="ads-grid_shop" >
                    <div className="shop_inner_inf">
                    <div className="privacy about">
                        <h3>Chec<span>kout</span></h3>
                        <div className="checkout-right" id="dmm">
                        <h4>Your shopping cart contains: <span>3 Products</span></h4>
                        <table className="timetable_sub" >
                            <thead>
                            <tr>
                                <th>SL No.</th>
                                <th>Quality</th>
                                <th>Product Name</th>
                                <th>Price</th>
                                <th>Total</th>
                            </tr>
                            </thead>
                            <tbody>
                            
                            </tbody>
                        </table>
                        <div className="checkout-left">
                        <div className="col-md-4 checkout-left-basket">
                            <h4>Continue to basket</h4>
                            <ul>
                            <li>Total <i>-</i> <span>$1405.00</span></li>
                            </ul>
                        </div>
                        </div>
                        </div>
                        <div className="checkout-left">
                        
                        <div className="col-md-8 address_form">
                            <h4>Add a new Details</h4>
                            <form action="payment.html" method="post" className="creditly-card-form agileinfo_form">
                            <section className="creditly-wrapper wrapper">
                                <div className="information-wrapper">
                                <div className="first-row form-group">
                                    <div className="controls">
                                    <label className="control-label">Full name: </label>
                                    <input className="billing-address-name form-control" type="text" name="name" placeholder="Full name" />
                                    </div>
                                    <div className="card_number_grids">
                                    <div className="card_number_grid_left">
                                        <div className="controls">
                                        <label className="control-label">Mobile number:</label>
                                        <input className="form-control" type="text" placeholder="Mobile number" />
                                        </div>
                                    </div>
                                    <div className="card_number_grid_right">
                                        <div className="controls">
                                        <label className="control-label">Landmark: </label>
                                        <input className="form-control" type="text" placeholder="Landmark" />
                                        </div>
                                    </div>
                                    <div className="clear"> </div>
                                    </div>
                                    <div className="controls">
                                    <label className="control-label">Town/City: </label>
                                    <input className="form-control" type="text" placeholder="Town/City" />
                                    </div>
                                    <div className="controls">
                                    <label className="control-label">Address type: </label>
                                    <select className="form-control option-w3ls">
                                        <option>Office</option>
                                        <option>Home</option>
                                        <option>Commercial</option>
                                    </select>
                                    </div>
                                </div>
                                <button className="submit check_out">Delivery to this Address</button>
                                </div>
                            </section>
                            </form>
                            <div className="checkout-right-basket">
                            <a href="payment.html">Make a Payment </a>
                            </div>
                        </div>
                        <div className="clearfix"> </div>
                        <div className="clearfix" />
                        </div>
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
                    
                </div>


                

        );
    }
}

export default Checkout;
