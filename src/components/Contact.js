import { Typography, Form, Input, Row, Col, Flex, Button } from "antd";

const { Title } = Typography;

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 6 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 14 },
  },
};

const Contact = () => {
  const [form] = Form.useForm();
  const variant = Form.useWatch("variant", form);
  return (
    <>
      <Typography>
        <Title>Contact</Title>
        <Flex vertical gap="small">
          <Row>
            <Col span={24} order={1}>
              <Form
                {...formItemLayout}
                form={form}
                variant={variant || "filled"}
                style={{ maxWidth: 600 }}
                initialValues={{ variant: "filled" }}
              >
                <Form.Item
                  label="Your Name"
                  name="name"
                  rules={[{ required: true, message: "Please input!" }]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  label="Your Email"
                  name="email"
                  rules={[{ required: true, message: "Please input!" }]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  label="Your Message"
                  name="message"
                  rules={[{ required: true, message: "Please input!" }]}
                >
                  <Input.TextArea />
                </Form.Item>
                <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
                  <Button type="primary" htmlType="submit">
                    Submit
                  </Button>
                </Form.Item>
              </Form>
            </Col>
          </Row>
        </Flex>
      </Typography>
    </>
  );
};

export default Contact;
