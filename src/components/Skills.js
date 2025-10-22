import { Component } from "react";
import { Typography, Flex, Image, Row, Col, Progress } from "antd";
import javaIcon from "../assets/svg/java.svg";
import nosql from "../assets/svg/nosql.svg";
import awsIcon from "../assets/svg/aws.svg";
import reactIcon from "../assets/svg/reactjs.svg";
import pythonIcon from "../assets/svg/python.svg";
import gitlabIcon from "../assets/svg/gitlab.svg";
import camundaIcon from "../assets/svg/camunda.svg";
import azureIcon from "../assets/svg/azure.svg";

const { Title } = Typography;

class Skills extends Component {
  render() {
    return (
      <>
        <Typography>
          <Title>Skills</Title>
          <Flex vertical gap="small">
            <Row>
              <Col span={8} order={1}>
                <Image
                  src={javaIcon}
                  width={100}
                  height={100}
                  type="primary"
                  disabled
                  style={{ marginBottom: "8px" }}
                  preview={true}
                />
                <Flex vertical gap="small" style={{ width: 180 }}>
                  <Progress percent={85} size="small" />
                </Flex>
                <Flex
                  vertical
                  gap="small"
                  style={{ width: 100 }}
                  justify="center"
                  align="center"
                >
                  Java
                </Flex>
              </Col>
              <Col span={8} order={2}>
                {/* AWS Cloud  */}
                <Image
                  src={awsIcon}
                  width={100}
                  height={100}
                  type="primary"
                  disabled
                  style={{ marginBottom: "8px" }}
                />
                <Flex vertical gap="small" style={{ width: 180 }}>
                  <Progress percent={80} size="small" />
                </Flex>
                <Flex
                  vertical
                  gap="small"
                  style={{ width: 100 }}
                  justify="center"
                  align="center"
                >
                  AWS
                </Flex>
              </Col>
              <Col span={8} order={3}>
                <Image
                  src={reactIcon}
                  width={100}
                  height={100}
                  type="primary"
                  disabled
                  style={{ marginBottom: "8px" }}
                />
                <Flex vertical gap="small" style={{ width: 180 }}>
                  <Progress percent={70} size="small" />
                </Flex>
                <Flex
                  vertical
                  gap="small"
                  style={{ width: 100 }}
                  justify="center"
                  align="center"
                >
                  ReactJS
                </Flex>
              </Col>
            </Row>
            <Row></Row>
            <Row></Row>
            <Row></Row>
            <Row>
              <Col span={8} order={1}>
                <Image
                  src={nosql}
                  width={100}
                  height={100}
                  type="primary"
                  disabled
                  style={{ marginBottom: "8px" }}
                />
                <Flex vertical gap="small" style={{ width: 180 }}>
                  <Progress percent={70} size="small" />
                </Flex>
                <Flex
                  vertical
                  gap="small"
                  style={{ width: 100 }}
                  justify="center"
                  align="center"
                >
                  NoSQL
                </Flex>
              </Col>
              <Col span={8} order={2}>
                <Image
                  src={pythonIcon}
                  width={100}
                  height={100}
                  type="primary"
                  disabled
                  style={{ marginBottom: "8px" }}
                />
                <Flex vertical gap="small" style={{ width: 180 }}>
                  <Progress percent={60} size="small" />
                </Flex>
                <Flex
                  vertical
                  gap="small"
                  style={{ width: 100 }}
                  justify="center"
                  align="center"
                >
                  Python
                </Flex>
              </Col>
              <Col span={8} order={3}>
                <Image
                  src={gitlabIcon}
                  width={100}
                  height={100}
                  type="primary"
                  disabled
                  style={{ marginBottom: "8px" }}
                />
                <Flex vertical gap="small" style={{ width: 180 }}>
                  <Progress percent={80} size="small" />
                </Flex>
                <Flex
                  vertical
                  gap="small"
                  style={{ width: 100 }}
                  justify="center"
                  align="center"
                >
                  Git
                </Flex>
              </Col>
            </Row>
            <Row></Row>
            <Row></Row>
            <Row></Row>
            <Row>
              <Col span={8} order={1}>
                <Image
                  src={azureIcon}
                  width={100}
                  height={100}
                  type="primary"
                  disabled
                  style={{ marginBottom: "8px" }}
                />
                <Flex vertical gap="small" style={{ width: 180 }}>
                  <Progress percent={70} size="small" />
                </Flex>
                <Flex
                  vertical
                  gap="small"
                  style={{ width: 100 }}
                  justify="center"
                  align="center"
                >
                  Azure
                </Flex>
              </Col>
              <Col span={8} order={2}>
                <Image
                  src={camundaIcon}
                  width={100}
                  height={100}
                  type="primary"
                  disabled
                  style={{ marginBottom: "8px" }}
                />
                <Flex vertical gap="small" style={{ width: 180 }}>
                  <Progress percent={85} size="small" />
                </Flex>
                <Flex
                  vertical
                  gap="small"
                  style={{ width: 100 }}
                  justify="center"
                  align="center"
                >
                  Camunda
                </Flex>
              </Col>
            </Row>
          </Flex>
        </Typography>
      </>
    );
  }
}

export default Skills;
