import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Navbar, Nav, Row, Col, Image, Card } from "react-bootstrap";
import { RiArrowRightUpLine } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { AiOutlineLinkedin } from "react-icons/ai";
import { RiTwitterXLine } from "react-icons/ri";
import { AiFillFacebook } from "react-icons/ai";
import { GoArrowLeft } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Homepage = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <Container fluid>
        <Navbar collapseOnSelect expand="lg" className="global-padding">
          <Container>
            <Navbar.Brand href="#home">
              <img src="./Palynx Logo.jpg" alt="logo" className="logo-img" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" className="menu-event">
              <Nav className="me-auto">
                <Nav.Link href="#">Home</Nav.Link>
                <Nav.Link href="#" className="Event">
                  Events
                </Nav.Link>
              </Nav>
              <Nav>
                <button className="btn F-btn">
                  <Nav.Link href="#" className="text-white">
                    Join waitlist
                  </Nav.Link>
                </button>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Container>
      <Container fluid className="section-hero">
        <Container>
          <div>
            <Row>
              <Col sm={6}>
                <h1 className="hero-heading ">
                  We help you explore your{" "}
                  <span className="class-orange">city</span> & find{" "}
                  <span className="class-orange">new friends</span>.
                </h1>
                <p className="text-size-medium">
                  Connect with people with like minds, simillar interest, goals
                  and motivations and plans all on Palnyx
                </p>
                <div>
                  <h4 className="text-medium">
                    Join <span className="class-orange"> 12,000+ </span>people
                    to be the first to know when we launch{" "}
                  </h4>
                  <form
                    action="#"
                    className="d-flex justify-content-center w-75"
                  >
                    <div className="form-box1">
                      <input type="text" placeholder="Enter your email" />
                      <button type="submit" className="btn  btn-lg ">
                        Join waitlist
                      </button>
                    </div>
                  </form>
                </div>
              </Col>
              <Col sm={6}>
                <div className="hero2">
                  <Image src="./phone-modified.png" className="header2-image" />
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </Container>
      <Container fluid className="section">
        <Container className="section2">
          <div>
            <h2 className="heading-title">
              Great experience, create a great life
            </h2>
            <p className="text-size-medium">
              We want you to enjoy a complete experience wherever you are.
            </p>
          </div>
          <Row className="gx-5">
            <Col sm={4}>
              <Image src="./rd11.png" alt="maps" style={{ width: "100%" }} />
              <div className="mt-4">
                <h3>Find events close to you</h3>
                <p>
                  You don't need to go far, all events around your location will
                  be shown.
                </p>
              </div>
            </Col>
            <Col sm={4}>
              <Image src="./rd22.png" alt="map" style={{ width: "100%" }} />
              <div className="mt-4">
                <h3>Meet people & connect</h3>
                <p>
                  We recommend events and people that are specifically tailored
                  to you.
                </p>
              </div>
            </Col>
            <Col sm={4}>
              <Image
                src="./rd33.png"
                alt="road-map"
                style={{ width: "100%" }}
              />
              <div className="mt-4">
                <h3>Share memories</h3>
                <p>
                  Get to know more about your connections and share memories.
                </p>
              </div>
            </Col>
            <div className="d-flex justify-content-center">
              <button className="mx-3 btn  row-btn" type="button">
                Join waitlist
              </button>
            </div>
          </Row>

          <Row className="mt-5 fff">
            <div className="head-plynx">
              <h2>Intuitive platform that helps with easy recommendations.</h2>
              <p>
                PALYNX USES AI TO EASILY RECOMMEND THE RIGHT EVENTS TO ATTEND
                AND THE RIGHT FRIENDS TO ATTEND WITH.
              </p>
            </div>

            <p className="text-size-large">Events & Recommendations</p>
            <Col sm={5} className="card-event">
              <Card className=" text-white cad1">
                {/* <Card.Img src="./strawberry.jpg" alt="Card image" /> */}
                <Card.ImgOverlay>
                  <div className="Cad-text">
                    <Card.Title className="floral">Beacon Day Trip</Card.Title>
                    <Card.Text>
                      <p className="floral-pre">FishKill, NY12508,USA June 9</p>
                    </Card.Text>
                  </div>

                  <button className="md btn ">
                    More details
                    <RiArrowRightUpLine className="rit" />
                  </button>
                </Card.ImgOverlay>
              </Card>
            </Col>
            <Col sm={5} className="card-event">
              <Card className=" text-white cad2">
                {/* <Card.Img src="./strww.png" alt="Card image" /> */}
                <Card.ImgOverlay>
                  <div className="Cad-text">
                    <Card.Title className="floral">
                      Floral Design Class{" "}
                    </Card.Title>
                    <Card.Text>
                      <p className="floral-pre">
                        Brooklyn, NY11215,USA June 23
                      </p>
                    </Card.Text>
                  </div>

                  <button className="md btn">
                    More details
                    <RiArrowRightUpLine className="rit" />
                  </button>
                </Card.ImgOverlay>
              </Card>
            </Col>
            <Col sm={2} className="card-event">
              <Card className="text-white cad3">
                {/* <Card.Img src="./group.png" alt="Card image" /> */}
                <Card.ImgOverlay>
                  <div className="Cad-text1">
                    <Card.Title className="floral1 text-black">
                      Pokemon GO Fest 2024
                    </Card.Title>
                    <Card.Text>
                      <p className="floral-pre1 text-black">
                        Randall's Island Park{" "}
                        <span className="mx-3">July 5</span>
                      </p>
                    </Card.Text>
                  </div>

                  <button className="md btn">
                    More details
                    <RiArrowRightUpLine className="rit" />
                  </button>
                </Card.ImgOverlay>
              </Card>
            </Col>
          </Row>
        </Container>
      </Container>
      <Container>
        <div className="head-plynx2">
          <h2>Create, contribute, like & share.</h2>
          <p className="plynx">
            You don’t have to be an onlooker, you get to engage with people of
            like minds in your community through a variety of activities.
          </p>
        </div>

        <div id="demo" class="carousel-slide mt-5" data-bs-ride="carousel">
          <div class="carousel Slidee">
            <div className="card card-34">
              <Image
                src="./girl.webp"
                alt="Los Angeles"
                class="d-block w-100"
              />
            </div>
            <div className="card card-34">
              <Image
                src="./boat.webp"
                alt="Los Angeles"
                class="d-block w-100"
              />
            </div>
            <div className="card card-34">
              <Image
                src="./boat2.webp"
                alt="Los Angeles"
                class="d-block w-100"
              />
            </div>
            <div className="card card-34">
              <Image src="./gym.webp" alt="Los Angeles" class="d-block w-100" />
            </div>
          </div>
          <div className="float-end mt-5 mb-5">
            <span id="left" className="Icon">
              <GoArrowLeft />
            </span>
            <span id="right" className="Icon mx-4">
              <GoArrowRight />
            </span>
          </div>
        </div>
      </Container>
      <Container
        fluid
        className="before-Footer d-flex justify-content-center mt-5"
      >
        <div>
          <h2 className="text-center">
            See new events, meet new people right around your corner and get
            your plans rolling.
          </h2>
          <p className="text-center">
            Join the waitlist and be the first to know when we launch
          </p>

          <div className="d-flex align-items-center justify-content-center w-75">
            <form action="#" className="d-flex justify-content-center">
              <div className="form-box">
                <input
                  type="text"
                  id="place-H"
                  placeholder="Enter your email"
                />
                <button type="submit" className="btn  btn-lg ">
                  Join waitlist
                </button>
              </div>
            </form>
          </div>
        </div>
      </Container>
      <div className="slider-container">
        <Slider {...settings}>
          <div className="">
            <Image src="./boat2.webp" alt="Los Angeles" class="d-block w-25" />
          </div>
          <div className="">
            <Image src="./boat2.webp" alt="Los Angeles" class="d-block w-25" />
          </div>
          <div className="">
            <Image src="./boat2.webp" alt="Los Angeles" class="d-block w-25" />
          </div>
          <div className="">
            <Image src="./boat2.webp" alt="Los Angeles" class="d-block w-25" />
          </div>
          <div className="">
            <Image src="./boat2.webp" alt="Los Angeles" class="d-block w-25" />
          </div>
        </Slider>
      </div>
      <Container fluid className="footer mt-5">
        <Container>
          <Row className="">
            <Col md={6}>
              <img src="./pp.png" alt="logo" className="logo-img b-ff" />
              <div className="d-flex Policy ">
                <p>Terms of Service</p>
                <p className="mx-4">Privacy policy</p>
              </div>
            </Col>
            <Col md={6} className="d-flex justify-content-end icon">
              <div>
                <h4>Follow us on</h4>
                <div className="b-icon">
                  <FaInstagram className="" />
                  <AiFillFacebook className="mx-1" />
                  <AiOutlineLinkedin className="mx-1" />
                  <RiTwitterXLine className="mx-1" />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
};
export default Homepage;
