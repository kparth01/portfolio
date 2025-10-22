import { Component } from "react";
import { Divider, Typography, Flex, Button, Row, Col } from "antd";

const { Title, Paragraph, Text, Link } = Typography;

class Home extends Component {
  render() {
    return (
      <>
        <div style={{ alignItems: "center" }}>
          <Typography>
            <Paragraph>
              Parth is highly versatile Sr. Software Developer with 9+ years of
              experience, he has delivered impactful cloud and modernisation
              projects across Singapore’s government and banking sectors.
            </Paragraph>
            <Paragraph>
              Skilled in Java, React, and cloud platforms like AWS and Azure,
              Parth is adept at building scalable systems and driving migrations
              from legacy architectures.
            </Paragraph>
            <Paragraph>
              <strong>Areas of expertise:</strong>
            </Paragraph>
            <Flex vertical gap="small">
              <Row>
                <Col span={8} order={3}>
                  <Button color="primary" variant="outlined">
                    Software Development
                  </Button>
                </Col>
                <Col span={8} order={2}>
                  <Button color="primary" variant="outlined">
                    Solution Designing
                  </Button>
                </Col>
                <Col span={8} order={1}>
                  <Button color="primary" variant="outlined">
                    Technical Documentation
                  </Button>
                </Col>
              </Row>
              <Row>
                <Col span={8} order={3}>
                  <Button color="primary" variant="outlined">
                    Requirement Gathering
                  </Button>
                </Col>
                <Col span={8} order={2}>
                  <Button color="primary" variant="outlined">
                    Test-Driven Development
                  </Button>
                </Col>
                <Col span={8} order={1}>
                  <Button color="primary" variant="outlined">
                    Dev-ops Task
                  </Button>
                </Col>
              </Row>
              <Row>
                <Col span={8} order={3}>
                  <Button color="primary" variant="outlined">
                    Coding & Debugging
                  </Button>
                </Col>
              </Row>
            </Flex>
          </Typography>
        </div>
      </>
    );
  }
}

export default Home;
