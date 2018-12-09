import React, { Component } from 'react';

class Product extends Component {
    
    render() {
        var {product, index } = this.props;
        return (
            <div className="col-md-4 product-men">
                            <div className="product-shoe-info shoe">
                                <div className="men-pro-item">
                                <div className="men-thumb-item">
                                    <img src="images/s1.jpg" alt="" />
                                    <div className="men-cart-pro">
                                    <div className="inner-men-cart-pro">
                                        <a href="single.html" className="link-product-add-cart">Quick View</a>
                                    </div>
                                    </div>
                                    <span className="product-new-top">New</span>
                                </div>
                                <div className="item-info-product">
                                    <h4>
                                    <a href="single.html">{product.name} </a>
                                    </h4>
                                    <div className="info-product-price">
                                    <div className="grid_meta">
                                        <div className="product_price">
                                        <div className="grid-price ">
                                            <span className="money ">${product.price}</span>
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
                                        <form method="post">
                                        <input type="hidden" name="cmd" defaultValue="_cart" />
                                        <input type="hidden" name="add" defaultValue={1} />
                                        <input type="hidden" name="shoe_item" defaultValue={product.name} />
                                        <input type="hidden" name="amount" defaultValue={product.price} />
                                        <button type="submit" className="shoe-cart pshoe-cart"><i className="fa fa-cart-plus" aria-hidden="true" /></button>
                                        <a href="checkout" data-toggle="modal" data-target="#myModal1" />
                                        </form>  
                                    </div>
                                    </div>
                                    <div className="clearfix" />
                                </div>
                                </div>
                            </div>
                            </div>
        );
    }
}

export default Product;