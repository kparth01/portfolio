import { useRef } from "react";
import { Layout, Menu, ConfigProvider, Row, Col } from "antd";
import {
  HomeOutlined,
  UserOutlined,
  SettingOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import FontApp from "./components/FontApp";
import AppFooter from "./components/AppFooter";

const { Header, Content } = Layout;

const App = () => {
  const homeRef = useRef(null);
  const skillsRef = useRef(null);
  const experienceRef = useRef(null);
  const contactRef = useRef(null);
  const appFooter = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <FontApp />
      <ConfigProvider theme={{ token: { fontFamily: `'Cavolini'` } }}>
        <Layout
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 70px;",
          }}
        >
          <Header
            style={{
              background: "#fff",
              display: "flex",
              alignItems: "center",
              boxShadow: "0 2px 8px #f0f1f2",
              //padding: '0 24px',
            }}
          >
            <div
              style={{
                fontWeight: "bold",
                fontSize: "20px",
                marginRight: "24px",
                color: "#1890ff",
              }}
            >
              Parth Kansara
            </div>

            <Menu
              theme="light"
              mode="horizontal"
              defaultSelectedKeys={["home"]}
              onClick={(e) => {
                if (e.key === "home") scrollToSection(homeRef);
                if (e.key === "skills") scrollToSection(skillsRef);
                if (e.key === "experience") scrollToSection(experienceRef);
                if (e.key === "contact") scrollToSection(contactRef);
              }}
              items={[
                { key: "home", label: "Home", icon: <HomeOutlined /> },
                { key: "skills", label: "Skills", icon: <UserOutlined /> },
                {
                  key: "experience",
                  label: "Experience",
                  icon: <SettingOutlined />,
                },
                { key: "contact", label: "Contact", icon: <PhoneOutlined /> },
              ]}
              style={{ flex: 1 }}
            ></Menu>
          </Header>
          {/* <Content style={{ padding: "24px" }}>
            <section ref={homeRef} style={{ height: "30vh" }}>
              <Home />
            </section>
            <section ref={skillsRef} style={{ height: "55vh" }}>
              <Skills />
            </section>
            <section ref={experienceRef} style={{ height: "60vh" }}>
              <Experience />
            </section>
            <section ref={contactRef}>
              <Contact />
            </section>
            <section ref={appFooter}>
              <AppFooter />
            </section>
          </Content> */}
          <Content style={{ padding: "24px" }}>
            <Row gutter={[0, 48]}>
              <Col span={24}>
                <section ref={homeRef}>
                  <Home />
                </section>
              </Col>

              <Col span={24}>
                <section ref={skillsRef}>
                  <Skills />
                </section>
              </Col>

              <Col span={24}>
                <section ref={experienceRef}>
                  <Experience />
                </section>
              </Col>

              <Col span={24}>
                <section ref={contactRef}>
                  <Contact />
                </section>
              </Col>

              <Col span={24}>
                <section ref={appFooter} style={{ paddingBottom: "48px" }}>
                  <AppFooter />
                </section>
              </Col>
            </Row>
          </Content>
        </Layout>
      </ConfigProvider>
    </>
  );
};

export default App;
