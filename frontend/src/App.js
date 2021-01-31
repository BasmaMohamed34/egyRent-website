//import logo from "./logo.svg";
//import "./assets";
//import "https://fonts.googleapis.com/css?family=Rufina:400,700";

const App = () => {
  return (
    <div className="App">
      <header className="top-area">
        <div className="header-area">
          <div className="container">
            <div className="row">
              <div className="col-sm-2">
                <div className="logo">
                  <a href="index.html">
                    tour<span>Nest</span>
                  </a>
                </div>
              </div>
              <div className="col-sm-10">
                <div className="main-menu">
                  <div className="navbar-header">
                    <button
                      type="button"
                      className="navbar-toggle"
                      data-toggle="collapse"
                      data-target=".navbar-collapse"
                    >
                      <i className="fa fa-bars"></i>
                    </button>
                  </div>
                  <div className="collapse navbar-collapse">
                    <ul className="nav navbar-nav navbar-right">
                      <li className="smooth-menu">
                        <a href="#home">home</a>
                      </li>
                      <li className="smooth-menu">
                        <a href="#gallery">Destination</a>
                      </li>
                      <li className="smooth-menu">
                        <a href="#pack">Packages </a>
                      </li>
                      <li className="smooth-menu">
                        <a href="#spo">Special Offers</a>
                      </li>
                      <li className="smooth-menu">
                        <a href="#blog">blog</a>
                      </li>
                      <li className="smooth-menu">
                        <a href="#subs">subscription</a>
                      </li>
                      <li>
                        <button className="book-btn">book now</button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="home-border"></div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default App;
