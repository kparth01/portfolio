import { Component } from "react";
import { Layout, Space, Image } from "antd";
import linkedinIcon from "../assets/svg/linkedin.svg";
import githubIcon from "../assets/svg/github.svg";
import gmailIcon from "../assets/svg/gmail.svg";
import stackoverflowIcon from "../assets/svg/stackoverflow.svg";

const { Footer } = Layout;

class AppFooter extends Component {
  render() {
    return (
      <Footer
        style={{
          textAlign: "center",
          padding: "24px 0",
          background: "#f9f9f9",
        }}
      >
        <Space direction="vertical" align="center" size="small">
          <div>
            <a
              href="https://www.linkedin.com/in/parth-kansara-7ba7b593/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={linkedinIcon} width={40} preview={false} />
            </a>
            <a
              href="https://github.com/kparth01"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={githubIcon} width={40} preview={false} />
            </a>
            <a
              href="mailto:kparth01@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={gmailIcon} width={40} preview={false} />
            </a>
            <a
              href="https://stackoverflow.com/users/9952631/parth-kansara"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={stackoverflowIcon} width={40} preview={false} />
            </a>
          </div>
          <div style={{ fontSize: 12, color: "#888" }}>
            © {new Date().getFullYear()} Parth Kansara. All rights reserved.
          </div>
        </Space>
      </Footer>
    );
  }
}

export default AppFooter;
