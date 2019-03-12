import React, { Component } from 'react';

class News extends Component {
    render() {
        return (
            <div>
  <header className="masthead">
    <div className="container h-100">
      <div className="row h-100">
        <div className="col-lg-7 my-auto">
          <div className="header-content mx-auto">
            <h1 className="mb-5">Đây là trang Tin Tức</h1>
            <a href="#download" className="btn btn-outline btn-xl js-scroll-trigger">Start Now for Free!</a>
          </div>
        </div>
        <div className="col-lg-5 my-auto">
          <div className="device-container">
            <div className="device-mockup iphone6_plus portrait white">
              <div className="device">
                <div className="screen">
                  {/* Demo image for screen mockup, you can put an image here, some HTML, an animation, video, or anything else! */}
                  <img src="https://blackrockdigital.github.io/startbootstrap-new-age/img/demo-screen-1.jpg" className="img-fluid" alt="new news" />
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
  <div className="container">
    <div className="row">
      <div className="col-4">
        <div className="card">
          <div className="card-body">
            <a href="./tinchitiet.html"> <img src="http://placehold.it/800x400" alt="new news" className="img-fluid" /></a>
            <blockquote className="blockquote">
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptate sit quibusdam numquam laudantium, minima dolorem qui illum ea ipsam suscipit, asperiores id distinctio, dolor enim corporis voluptas unde? </p>
              <footer className="card-blockquote">Tin tức <cite title="Source title">Số 1</cite></footer>
            </blockquote>
          </div>
        </div>
      </div>
      <div className="col-4">
        <div className="card">
          <div className="card-body">
            <a href="./tinchitiet.html"> <img src="http://placehold.it/800x400" alt="new news" className="img-fluid" /></a>
            <blockquote className="blockquote">
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptate sit quibusdam numquam laudantium, minima dolorem qui illum ea ipsam suscipit, asperiores id distinctio, dolor enim corporis voluptas unde? </p>
              <footer className="card-blockquote">Tin tức <cite title="Source title">Số 2</cite></footer>
            </blockquote>
          </div>
        </div>
      </div>
      <div className="col-4">
        <div className="card">
          <div className="card-body">
            <a href="./tinchitiet.html"> <img src="http://placehold.it/800x400" alt="new news" className="img-fluid" /></a>
            <blockquote className="blockquote">
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptate sit quibusdam numquam laudantium, minima dolorem qui illum ea ipsam suscipit, asperiores id distinctio, dolor enim corporis voluptas unde? </p>
              <footer className="card-blockquote">Tin tức <cite title="Source title">Số 3</cite></footer>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

        );
    }
}

export default News;