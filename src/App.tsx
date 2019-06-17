import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import SmallBadge from './components/SmallBadge';
import Clamp from './components/Clamp';

const App: React.FC = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="md">
        <div className="container">
          <Navbar.Brand href="#home">ph</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav
              style={{ width: '100%' }}
              className="d-flex justify-content-around font-weight-light"
            >
              <Nav.Link href="#home">Add Movie</Nav.Link>
              <Nav.Link href="#home">Movies</Nav.Link>
              <Nav.Link href="#home">Calendar</Nav.Link>
              <Nav.Link href="#home">Activity</Nav.Link>
              <Nav.Link href="#home">Wanted</Nav.Link>
              <Nav.Link href="#home">Settings</Nav.Link>
              <Nav.Link href="#home">Status</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
      <Navbar className="border-bottom" expand="md" bg="white">
        <div className="container">
          <Navbar.Brand href="#home">Movies</Navbar.Brand>
        </div>
      </Navbar>
      <main className="container mt-4">
        <section className="mb-4">
          <div className="row mb-3">
            <div className="col-5 col-md-4">
              <img
                className="rounded border"
                width="100%"
                src="https://is4-ssl.mzstatic.com/image/thumb/Video1/v4/9e/fe/2f/9efe2fc2-7371-2360-237f-c95ceb550abe/pr_source.lsr/804x0w.png"
              />
            </div>

            <div className="col-7">
              <div className="row">
                <div className="col-7 col-md-12 col-valign-top">
                  <header
                    className="product-header movie-header product-header--padded-start"
                    role="banner"
                  >
                    <h1 className="font-weight-bolder">The Terminator</h1>

                    <ul className="list-inline text-muted small">
                      <li className="list-inline-item">100%</li>
                      <li className="list-inline-item">1 Hour 21 Minutes</li>
                      <li className="list-inline-item inline-list__item--bulleted movie-header__list__item--release-date">
                        <time
                          dateTime="1995-11-22T08:00:00.000Z"
                          aria-label="1995"
                        >
                          1995
                        </time>
                      </li>
                      <li className="list-inline-item">
                        <SmallBadge>720p</SmallBadge>
                      </li>
                    </ul>

                    <div className="d-none d-md-flex">
                      {/* large screen */}
                      <section>
                        <Clamp>
                          Set in a world where toys have a life of their own
                          when people are not present, Toy Story takes
                          moviegoers on a fantastic fun-filled journey, viewed
                          mostly through the eyes of two rival toys - Woody (Tom
                          Hanks), a pull-string talking cowboy, and Buzz
                          Lightyear (Tim Allen), a superhero space
                          action-figure. The comically-mismatched duo eventually
                          learn to put aside their differences when
                          circumstances separate them from their owner, Andy,
                          and they find themselves on a hilarious
                          adventure-filled mission where the only way they can
                          survive is to form an uneasy alliance. Toy Story was
                          the first full-length motion picture to be created
                          entirely through the use of computer animation.
                        </Clamp>
                      </section>
                    </div>
                  </header>
                </div>
              </div>
            </div>
          </div>
          {/* small screen */}
          <div className="row d-md-none">
            <div className="col-12">
              <section>
                <Clamp>
                  Set in a world where toys have a life of their own when people
                  are not present, Toy Story takes moviegoers on a fantastic
                  fun-filled journey, viewed mostly through the eyes of two
                  rival toys - Woody (Tom Hanks), a pull-string talking cowboy,
                  and Buzz Lightyear (Tim Allen), a superhero space
                  action-figure. The comically-mismatched duo eventually learn
                  to put aside their differences when circumstances separate
                  them from their owner, Andy, and they find themselves on a
                  hilarious adventure-filled mission where the only way they can
                  survive is to form an uneasy alliance. Toy Story was the first
                  full-length motion picture to be created entirely through the
                  use of computer animation.
                </Clamp>
              </section>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default App;
