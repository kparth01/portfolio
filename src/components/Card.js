import { Component } from "react";
import { Card } from 'antd';

class CustomCard extends Component {
    render() {
        return (
            <Card title="Card title" variant="borderless" style={{ width: 300 }}>
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
            </Card>
        )
    }
};

export default CustomCard;