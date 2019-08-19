import React from 'react'
import {Layout} from 'antd'
import antd from 'antd'
import SilderNav from "../../components/SilderNav"
import HeaderBar from "../../components/HeaderBar"
const { Menu, Icon, Button } = antd;
const {Sider, Header, Content, Footer} = Layout
const { SubMenu }  = Menu;

class Index extends React.Component{
  state = {
    collapsed: false
  }

  toggle = () => {
    // console.log(this)  状态提升后，到底是谁调用的它
    this.setState({
      collapsed: !this.state.collapsed
    })
  }
  render() {
    // 设置Sider的minHeight可以使左右自适应对齐
    return (
      <div id='page'>
        <Layout>
          <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
            <SilderNav/>
          </Sider>
          <Layout>
            <Header style={{background: '#fff', padding: '0 16px'}}>
              <HeaderBar collapsed={this.state.collapsed} onToggle={this.toggle}/>
            </Header>
            <Content>Content</Content>
            <Footer style={{textAlign: 'center'}}>Footer</Footer>
          </Layout>
        </Layout>
      </div>
    );
  }
}
export default Index