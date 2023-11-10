import React from "react";
import { Badge, Button, Container, Image, Stack } from "react-bootstrap";

const skills = [
  "HTML",
  "CSS",
  "Javascript",
  "ReactJS",
  "SCSS",
  "Tailwindcss",
  "GSAP",
  "Responsive",
  "Git",
  "Redux",
  "Figma / Photoshop",
];

function About() {
  return (
    <>
      <Container fluid="xl" style={{ padding: "0 180px" }} id="about">
        <h1 style={{ marginTop: 60, marginBottom: 20, textTransform: 'uppercase', fontWeight: 700, color: "red" }}>About</h1>
        <Stack
          direction="horizontal"
          gap={3}
          style={{ alignItems: "flex-start" }}
        >
          <Image
            width={300}
            src="assets/avatar.jpg"
            rounded
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              flexWrap: "wrap",
              gap: 8,
              height: "100%",
            }}
          >
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 8,
              }}
            >
              {skills?.map((skill) => (
                <Badge bg="dark" className="px-4 py-2 text-lg">
                  <span style={{ fontSize: 16 }}>{skill}</span>
                </Badge>
              ))}
            </div>
            <p style={{ fontSize: 20, marginTop: 20 }}>
              Hi, my name is Nguyen Nhat Anh. I'm a junior at
              FPT University, Dang Nang, Viet Nam. Having more than 1 year of
              experience with many real projects, I promise to give you the best
              web design. I provide web design services, convert the design to
              code. If my services are suitable for you, please contact me!
            </p>
            <Button
              variant="primary"
              style={{
                backgroundColor: "#EE0000",
                border: "none",
                padding: "8px 12px",
                width: "50%"
              }}
            >
              Contact with me
            </Button>
          </div>
        </Stack>
      </Container>
    </>
  );
}

export default About;
