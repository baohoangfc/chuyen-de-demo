import React, { Component } from 'react';
import Header from '../Header/Header';

class About extends Component {
    render() {
        return (
            <div>
                <Header></Header>
                {/* top Products */}
                <div className="ads-grid_shop">
                    <div className="shop_inner_inf">
                    <h3 className="head">About Us</h3>
                    <p className="head_para">Add Some Description</p>
                    <div className="inner_section_w3ls">
                        <div className="col-md-6 news-left">
                        <img src="images/ab.jpg" alt=" " className="img-responsive" />
                        </div>
                        <div className="col-md-6 news-right">
                        <h4>Welcome to our Downy Shoes</h4>
                        <p className="sub_p">Etiam faucibus viverra libero vel efficitur. Ut semper nisl ut laoreet ultrices. Maecenas dictum arcu purus, sit amet
                            volutpat purus viverra sit amet. Quisque lacinia quam sed tortor interdum, malesuada congue nunc ornare. Cum sociis
                            In semper lorem eget tortor pulvinar ultricies.
                        </p>
                        <p>Etiam faucibus viverra libero vel efficitur. Ut semper nisl ut laoreet ultrices. Maecenas dictum arcu purus, sit amet
                            volutpat purus viverra sit amet. Quisque lacinia quam sed tortor interdum, malesuada congue nunc ornare. Cum sociis
                            . In semper lorem eget tortor pulvinar ultricies.
                        </p>
                        </div>
                        <div className="clearfix"> </div>
                    </div>
                    </div>
                </div>
                <div className="mid_services">
                    <div className="col-md-6 according_inner_grids">
                    <h3 className="heading two">Who We Are</h3>
                    <div className="according_info">
                        <div className="panel-group about_panel" id="accordion" role="tablist" aria-multiselectable="true">
                        <div className="panel panel-default">
                            <div className="panel-heading" role="tab" id="headingOne">
                            <h4 className="panel-title asd">
                                <a className="pa_italic" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                <span className="glyphicon glyphicon-plus" aria-hidden="true" /><i className="glyphicon glyphicon-minus" aria-hidden="true" />assumenda est cliche voluptate
                                </a>
                            </h4>
                            </div>
                            <div id="collapseOne" className="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
                            <div className="panel-body panel_text">
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </div>
                            </div>
                        </div>
                        <div className="panel panel-default">
                            <div className="panel-heading" role="tab" id="headingTwo">
                            <h4 className="panel-title asd">
                                <a className="pa_italic collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                <span className="glyphicon glyphicon-plus" aria-hidden="true" /><i className="glyphicon glyphicon-minus" aria-hidden="true" />Itaque earum rerum
                                </a>
                            </h4>
                            </div>
                            <div id="collapseTwo" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
                            <div className="panel-body panel_text">
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </div>
                            </div>
                        </div>
                        <div className="panel panel-default">
                            <div className="panel-heading" role="tab" id="headingThree">
                            <h4 className="panel-title asd">
                                <a className="pa_italic collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                <span className="glyphicon glyphicon-plus" aria-hidden="true" /><i className="glyphicon glyphicon-minus" aria-hidden="true" />autem accusamus terry qui
                                </a>
                            </h4>
                            </div>
                            <div id="collapseThree" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
                            <div className="panel-body panel_text">
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </div>
                            </div>
                        </div>
                        <div className="panel panel-default">
                            <div className="panel-heading" role="tab" id="headingThree">
                            <h4 className="panel-title asd">
                                <a className="pa_italic collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                <span className="glyphicon glyphicon-plus" aria-hidden="true" /><i className="glyphicon glyphicon-minus" aria-hidden="true" />autem accusamus terry qui
                                </a>
                            </h4>
                            </div>
                            <div id="collapseThree" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
                            <div className="panel-body panel_text">
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="col-md-6 mid_services_img">
                    <div className="bar-grids">
                        <h3 className="heading two three">Our Skills</h3>
                        <div className="skill_info">
                        <h6>Development<span> 95% </span></h6>
                        <div className="progress">
                            <div className="progress-bar progress-bar-striped active" style={{width: '95%'}}>
                            </div>
                        </div>
                        <h6>Pricing<span> 85% </span></h6>
                        <div className="progress">
                            <div className="progress-bar progress-bar-striped active" style={{width: '85%'}}>
                            </div>
                        </div>
                        <h6>Production <span>90% </span></h6>
                        <div className="progress">
                            <div className="progress-bar progress-bar-striped active" style={{width: '90%'}}>
                            </div>
                        </div>
                        <h6>Advertising <span>86% </span></h6>
                        <div className="progress prgs-last">
                            <div className="progress-bar progress-bar-striped active" style={{width: '86%'}}>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="clearfix"> </div>
                </div>
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

export default About;
