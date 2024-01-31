import React from "react";
import "../../styles/footer.css";

import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";

const quickLinks = [
  {
    path: "/about",
    display: "About",
  },
  {
    path: "#",
    display: "Privacy Policy",
  },
  {
    path: "/cars",
    display: "Car Listing",
  },
  {
    path: "/blogs",
    display: "Blog",
  },
  {
    path: "/contacts",
    display: "Contacts",
  },
];

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="4" md="4" sm="12">
            <div className="logo footer__logo">
              <h1>
                <Link to="/home" className="d-flex align-items-center gap-2">
                  <i class="ri-car-line"></i>
                  <span>
                    Rent Car <br /> Service
                  </span>
                </Link>
              </h1>
            </div>
            <p className="footer__logo-content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              alias deserunt mollitia sint totam odio aliquam eveniet pariatur
              expedita, cum dicta ratione dolor ipsa necessitatibus quaerat quos
              temporibus ipsam accusamus.
            </p>
          </Col>

          <Col lg="2" md="4" sm="6">
            <div className="mb-4">
              <h5 className="footer__link-title">Quick Links</h5>
              <ListGroup>
                {quickLinks.map((item, index) => (
                  <ListGroupItem key={index} className="p-0 mt-3 quick__link">
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))}
              </ListGroup>
            </div>
          </Col>

          <Col lg="3" md="4" sm="6">
            <div className="mb-4">
              <h5 className="footer__link-title">Head Office</h5>
              <p className="office__info">Dummy street 23, Majorca, Spain</p>
              <p className="office__info">Phone: +371-222-88-555</p>
              <p className="office__info">Email: car.rental@gmail.com</p>
              <p className="office__info">Office time: 10am - 7pm</p>
            </div>
          </Col>

          <Col lg="3" md="4" sm="6">
            <h5 className="footer__link-title">Newsletter</h5>
            <p className="section__description">Subscribe our newsletter</p>
            <div className="newsletter">
              <input type="email" placeholder="Email" />
              <span>
                <i class="ri-send-plane-line"></i>
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
