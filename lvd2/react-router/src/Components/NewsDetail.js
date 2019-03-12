import React, { Component } from 'react';

class NewsDetail extends Component {
    render() {
        return (
            <div>
            <header className="masthead">
              <div className="container h-100">
                <div className="row h-100">
                  <div className="col-lg-7 my-auto">
                    <div className="header-content mx-auto">
                      <h1 className="mb-5">Đây là trang Chi Tiết</h1>
                      <a href="#download" className="btn btn-outline btn-xl js-scroll-trigger">Start Now for Free!</a>
                    </div>
                  </div>
                  <div className="col-lg-5 my-auto">
                    <div className="device-container">
                      <div className="device-mockup iphone6_plus portrait white">
                        <div className="device">
                          <div className="screen">
                            {/* Demo image for screen mockup, you can put an image here, some HTML, an animation, video, or anything else! */}
                            <img src="https://blackrockdigital.github.io/startbootstrap-new-age/img/demo-screen-1.jpg" alt="new detail" className="img-fluid"  />
                          </div>
                          <div className="button">
                            {/* You can hook the "home button" to some JavaScript events or just remove it */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </header>
            <div className="jumbotron jumbotron-fluid">
              <div className="container">
                <img src="http://placehold.it/1200x400" alt="new detail" className="img-fluid"  />
                <p className="lead">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi quam ipsa omnis accusantium natus, blanditiis rem nostrum magnam, esse sint atque dolorum nobis enim suscipit nemo, inventore debitis modi fugiat.</p>
                <p className="lead">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi quam ipsa omnis accusantium natus, blanditiis rem nostrum magnam, esse sint atque dolorum nobis enim suscipit nemo, inventore debitis modi fugiat.</p>
                <p className="lead">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi quam ipsa omnis accusantium natus, blanditiis rem nostrum magnam, esse sint atque dolorum nobis enim suscipit nemo, inventore debitis modi fugiat.</p>
                <hr className="my-2" />
                <p>More info</p>
                <p className="lead">
                  <a className="btn btn-primary btn-lg" href="Jumbo action link" role="button">Jumbo action name</a>
                </p>
              </div>
            </div>
          </div>
          
        );
    }
}

export default NewsDetail;