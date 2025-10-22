import { Typography, Flex, Button, Row, Col } from "antd";
import { Component } from "react";

const { Title, Paragraph, Text, Link } = Typography;


class Experience extends Component {
    render() {
        return (
            <>
                <Typography>
                    <Title>Experience</Title>
                    <Text strong>
                        Sr. Software Engineer / Tech Lead @ Accenture [Client: Government Agency] &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 3.5+ Years
                    </Text>
                    <Text>
                        <ul>
                            <li>Designed and architected a cloud-based notification system from scratch that is responsible to send SMS, E-mail & Push notifications using Spring-boot (JDK 17), AWS lambda, Dynamo DB (for reporting), SNS & SQS.</li>
                            <li>Developed Admin-Portal from scratch using technologies like ReactJS (framework Antd) for notification module.</li>
                            <li>Setup AWS API GW and network security for exposing backend APIs for public / private use.</li>
                            <li>Implemented scheduled code deployment to SIT & UAT using Python & Gitlab to AWS (using EKS). </li>
                            <li>Design & enhance ETL batch jobs using spring-batch & Java.</li>
                            <li>Supporting / planning Go-Live activities as Team Lead.</li>
                        </ul>
                    </Text>
                    <Text strong>
                        Senior Software Engineer @ Ridik Pte Ltd [Client: Standard Chartered Bank] &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;	1+ Year
                    </Text>
                    <Text>
                        <ul>
                            <li>Designing and developing backend Microservices from scratch using Spring-boot (JDK 11) & Gradle.</li>
                            <li>Integrating Spring-boot app with databases like Postgres and Cassandra using JPA framework.</li>
                            <li>Design & Developed Feedback service using Spring-boot & Cassandra DB.</li>
                            <li>Perform unit & integration testing with JUnit (Mockito). Using SonarQube for better code quality & Jacoco for test coverage.</li>
                        </ul>
                    </Text>

                    <Text strong>
                        Senior Software Engineer @ Comtel Pte Ltd [Client: MSI Global Pte Ltd.] &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 1.6 Years
                    </Text>
                    <Text>
                        <ul>
                            <li>Effectively revamped the legacy EJB application using Spring-boot (JDK 1.8) and Microservices architecture to migrate the application to AWS cloud.</li>
                            <li>Introducing Unit testing for the new application using Mockito Framework.</li>
                            <li>Implementing CI/CD with Jenkins, Gitlab, Maven and Nexus Repository for the continuous build and integration.</li>
                        </ul>
                    </Text>
                    <Text strong>
                        Software Engineer @ Integro Pte. Ltd [Client: UOB Bank] &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 4+ Years
                    </Text>
                    <Text>
                        <ul>
                            <li>Using Spring-MVC and Hibernate has developed 15+ new features/Change Requests such as Credit-Deviation to calculate loan amount that should be allowed for customer, Pre-Qualification analysis, Batch-Jobs for generating reports, syncing transactions. etc.</li>
                            <li>Performed unit-testing with Junit and code-reviews for the peers using tools like findbugs.</li>
                        </ul>
                    </Text>
                </Typography>
            </>
        );
    }
};

export default Experience;
