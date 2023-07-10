import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/roblox.png";
import projImg2 from "../assets/img/smashyunblured.png";
import projImg3 from "../assets/img/lagged.png";
import projImg4 from "../assets/img/blastar.png";
import projImg5 from "../assets/img/phoneblastar.png";
import projImg6 from "../assets/img/bingobeats.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Games for people who are blind or have low vision",
      description: "I worked with Microsoft to create multiple experiences on roblox for people who are blind or have low vision. It started when a blind client talked about an issue he experienced when playing current games. He said that all the games rely on eyesight and that it was difficult to navigate most of the games. We came up with the solutuion of using audio and our first prototype was 'Crossy Road' (Next Project)",
      imgUrl: projImg1,
    },
    {
      title: "Crossy Road",
      description: "I created crossy road for people who are blind or have low vision. The idea of the game is to cross multiple roads without being hit. The game uses stereo audio to help people understand where the cars are. To find more information, please visit www.dull.info",
      imgUrl: projImg2,
    },
    {
      title: "Lag Tester",
      description: "Tests how many blocks your device can handle.",
      imgUrl: projImg3,
    },
    {
      title: "BLAST AR",
      description: "We created this game for the Xreal AR Jam competion. It got first place in milestone one and an honourable mention in milestone 2",
      imgUrl: projImg4,
    },
    {
      title: "BLAST AR MOBILE",
      description: "Play with AR or other mobile users.",
      imgUrl: projImg5,
    },
    {
      title: "Bingo Beats",
      description: "An adaptation to NRM's existing bingo beats game. It turns boring numbers into fun songs.",
      imgUrl: projImg6,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Here are all the projects iv'e worked on over the past couple of years.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt=""></img>
    </section>
  )
}
