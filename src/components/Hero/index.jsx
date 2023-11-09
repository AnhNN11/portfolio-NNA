import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Container, Image } from "react-bootstrap";
// import { Component } from '../../../public/banner.webp''

function Hero() {
  return (
    // <Container fluid className="mb-4" style={{width:}}>
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100 h-15"
          src="assets/Carroute1.jpg"
          alt="Second slide"
          style={{ height: 600, objectFit: "cover" }}
        />
        <Carousel.Caption
          style={{
            marginRight: "40%",
            textAlign: "left",
            fontFamily: "Arial, sans-serif",
            color: "white",
          }}
        >
          <h5 style={{ fontWeight: "bold", fontSize: "80px" }}>
            MINDX TECHNOLOGY
          </h5>
          <p style={{ fontSize: "18px" }}>Nurturing GLOBAL PIONEER</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 "
          src="assets/Workshop.jpg"
          alt="First slide"
          style={{ height: 600, objectFit: "cover" }}
        />
        <Carousel.Caption>
          {/* <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 h-15"
          src="assets/Carousel2.jpg"
          alt="Third slide"
          style={{ height: 600, objectFit: "cover" }}
        />
        <Carousel.Caption>
          {/* <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    // </Container>
  );
}

export default Hero;
