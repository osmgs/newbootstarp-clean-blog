import React from 'react'


function Header(props) {
  return (
    <div>
    {/* Navigation*/}
    <nav className="navbar navbar-expand-lg navbar-light" id="mainNav">
      <div className="container px-4 px-lg-5">
        <a className="navbar-brand" href="/">Start Bootstrap</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          Menu
          <i className="fas fa-bars" />
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ms-auto py-4 py-lg-0">
            <li className="nav-item"><a className="nav-link px-lg-3 py-3 py-lg-4" href="/">Home</a></li>
            <li className="nav-item"><a className="nav-link px-lg-3 py-3 py-lg-4" href="/about">About</a></li>
            <li className="nav-item"><a className="nav-link px-lg-3 py-3 py-lg-4" href="/contact">Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
    {/* Page Header*/}
    <header className="masthead" style={{backgroundImage: `url("assets/img/${props.img}-bg.jpg")`}}>
      <div className="container position-relative px-4 px-lg-5">
        <div className="row gx-4 gx-lg-5 justify-content-center">
          <div className="col-md-10 col-lg-8 col-xl-7">
            <div className="site-heading">
              <h1>{props.title}</h1>
              <span className="subheading">{props.description}</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  </div>
  )
}

export default Header
