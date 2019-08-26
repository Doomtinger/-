import React from 'react'
import { Button, Row, Col, Card, Icon, Radio, Dropdown, Menu, message } from 'antd'
import CustomBreadcrumb from '../../../components/CustomBreadcrumb/index'
import TypingCard from '../../../components/TypingCard'


class ButtonDemo extends React.Component {
    state = {
        size: 'default',
        loading: false,
        iconLoading: false
    }
    handleMenuClick(e) {
        console.log(e)
        message.info(`Click on menu ${e.key} item.`)
    }
    enterLoading = () => {
        this.setState({ loading: true });
    };
    enterIconLoading= (e) => {
        console.log(e)
        this.setState({
            iconLoading: true
        })
    }
    render() {
        const { size, loading, iconLoading} = this.state
        const cardContent = `标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。`
        const menu = (
            <Menu onClick={this.handleMenuClick}>
                <Menu.Item key="1">1st item</Menu.Item>
                <Menu.Item key="2">2nd item</Menu.Item>
                <Menu.Item key="3">3rd item</Menu.Item>
            </Menu>
        );

        return ( 
            <div>
                <CustomBreadcrumb arr={['基本', '按钮']} />
                <TypingCard source={cardContent} />
                <Row gutter={ 16 }>
                    <Col span={12}>
                        <Card className="card-item" bordered={false}>
                            <Button type="primary">Primary</Button>&emsp;
                        <Button>Default</Button>&emsp;
                        <Button type="dashed">Dashed</Button>&emsp;
                        <Button type="danger">Danger</Button>&emsp;
                        {/* <Button type="link">Link</Button>&emsp; */}
                        </Card>
                        <Card className="card-item" bordered={false}>
                            <div>
                                <Radio.Group value={size} onChange={this.handleSizeChange}>
                                    <Radio.Button value="large">Large</Radio.Button>
                                    <Radio.Button value="default">Default</Radio.Button>
                                    <Radio.Button value="small">Small</Radio.Button>
                                </Radio.Group>
                                <br />
                                <br />
                                <Button type="primary" size={size}>
                                    Primary
                            </Button>
                                <Button size={size}>Normal</Button>
                                <Button type="dashed" size={size}>
                                    Dashed
                            </Button>
                                <Button type="danger" size={size}>
                                    Danger
                            </Button>
                                <Button type="link" size={size}>
                                    Link
                            </Button>
                                <br />
                                <Button type="primary" shape="circle" icon="download" size={size} />
                                <Button type="primary" shape="round" icon="download" size={size}>
                                    Download
                            </Button>
                                <Button type="primary" icon="download" size={size}>
                                    Download
                            </Button>
                                <br />
                                <Button.Group size={size}>
                                    <Button type="primary">
                                        <Icon type="left" />
                                        Backward
                                </Button>
                                    <Button type="primary">
                                        Forward
                                <Icon type="right" />
                                    </Button>
                                </Button.Group>
                            </div>
                        </Card>
                    </Col>
                    <Col span={12}>
                        <Card bordered={false} className='card-item'>
                                <div>
                                    <Button type="primary" shape="circle" icon="search" />
                                    <Button type="primary" icon="search">
                                        Search
                                </Button>
                                    <Button shape="circle" icon="search" />
                                    <Button icon="search">Search</Button>
                                    <br />
                                    <Button shape="circle" icon="search" />
                                    <Button icon="search">Search</Button>
                                    <Button type="dashed" shape="circle" icon="search" />
                                    <Button type="dashed" icon="search">
                                        Search
                                </Button>
                                </div>
                        </Card>
                        <Card bordered={false} className='card-item'>
                            <div>
                                <Button type="primary">primary</Button>
                                <Button>secondary</Button>
                                <Dropdown overlay={menu}>
                                    <Button>
                                        Actions <Icon type="down" />
                                    </Button>
                                </Dropdown>
                            </div>
                        </Card>
                        <Card bordered={false} className='card-item'>
                            <div>
                                <Button type="primary" loading>
                                    Loading
                                </Button>
                                <Button type="primary" size="small" loading>
                                    Loading
                                </Button>
                                <br />
                                <Button type="primary" loading={this.state.loading} onClick={this.enterLoading}>
                                    Click me!
                                </Button>
                                <Button
                                    type="primary"
                                    icon="poweroff"
                                    loading={this.state.iconLoading}
                                    onClick={this.enterIconLoading}
                                >
                                    Click me!
                                </Button>
                                <br />
                                <Button type="primary" loading />
                                <Button type="primary" shape="circle" loading />
                                <Button type="danger" shape="round" loading />
                            </div>
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}
export default ButtonDemo