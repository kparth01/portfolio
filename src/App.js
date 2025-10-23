import "./App.css";
import { useRef, useState } from "react";
import { Layout, Menu, ConfigProvider, Row, Col, Button, Drawer } from "antd";
import {
  HomeOutlined,
  UserOutlined,
  SettingOutlined,
  PhoneOutlined,
  MenuOutlined,
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

  const [drawerOpen, setDrawerOpen] = useState(false);

  const menuItems = [
    { key: "home", label: "Home", icon: <HomeOutlined /> },
    { key: "skills", label: "Skills", icon: <UserOutlined /> },
    { key: "experience", label: "Experience", icon: <SettingOutlined /> },
    { key: "contact", label: "Contact", icon: <PhoneOutlined /> },
  ];

  const handleMenuClick = (e) => {
    if (e.key === "home") scrollToSection(homeRef);
    if (e.key === "skills") scrollToSection(skillsRef);
    if (e.key === "experience") scrollToSection(experienceRef);
    if (e.key === "contact") scrollToSection(contactRef);
    setDrawerOpen(false);
  };

  return (
    <>
      <FontApp />
      <ConfigProvider
        theme={{
          token: { fontFamily: `'Cavolini', sans-serif` },
        }}
      >
        <Layout className="main-layout">
          <Header className="main-header">
            <div className="logo">Parth Kansara</div>

            {/* Desktop Menu */}
            <Menu
              theme="light"
              mode="horizontal"
              items={menuItems}
              onClick={handleMenuClick}
              className="main-menu desktop-menu"
            />

            {/* Mobile Hamburger */}
            <Button
              className="mobile-menu-button"
              type="text"
              icon={<MenuOutlined style={{ fontSize: "22px" }} />}
              onClick={() => setDrawerOpen(true)}
            />
          </Header>

          <Drawer
            title="Navigation"
            placement="right"
            onClose={() => setDrawerOpen(false)}
            open={drawerOpen}
            bodyStyle={{ padding: 0 }}
          >
            <Menu
              mode="vertical"
              items={menuItems}
              onClick={handleMenuClick}
              style={{ borderRight: "none" }}
            />
          </Drawer>

          <Content className="main-content">
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
      ;
    </>
  );
};

export default App;
