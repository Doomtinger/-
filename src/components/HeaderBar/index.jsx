import React, {Component} from 'react'
import { Icon, Badge, Dropdown, Menu, Modal } from 'antd'
import screenfull from 'screenfull'
import {initUserInfo, initLoginOut} from'../../store/actions'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom' //路由更新重新渲染页面
import { isAuthenticated } from '../../utils/Session'
import imgURL from './../../assets/img/defaultUser.jpg'
import avatar from './img/02.jpg'
class HeaderBar extends Component {
    constructor (props) {
        super(props)
        this.state = {
            icon: 'arrows-alt',
            count: 100,
            visible: false,
            // avatar: require('./img/04.jpg')
            avatar: avatar,
            imgURL: imgURL
        }  
    }
    componentDidMount () {
        console.log(this.props)
    }
    logout = () => {
        this.props.initLoginOut()
    }
    toggle = () => {
        this.props.onToggle()
    }
    screenfullToggle = () => {
        if (screenfull.enabled) {
            screenfull.toggle()
        }
    }
    render () {
        const {icon, count, visible, avatar} = this.state
        const isLogin = this.props.login
        const {location} = this.props
        const menu = (
            <Menu className='menu'>
                <Menu.ItemGroup title='用户中心' className='menu-group'>
                    <Menu.Item>你好 - {isAuthenticated()}</Menu.Item>
                    <Menu.Item>个人信息</Menu.Item>
                    <Menu.Item><span onClick={this.logout}>退出登录</span></Menu.Item>
                </Menu.ItemGroup>
                <Menu.ItemGroup title='设置中心' className='menu-group'>
                    <Menu.Item>个人设置</Menu.Item>
                    <Menu.Item>系统设置</Menu.Item>
                </Menu.ItemGroup>
            </Menu>
        )
        const login = (
            <Dropdown overlay={menu}>
                <img onClick={() => this.setState({visible: true})} src={this.state.avatar} alt=""/>
            </Dropdown>
        )
        const notLogin = (
            <div>
                <Link to={{pathname: '/login', state: {from: location}}} style={{color: 'rgba(0, 0, 0, 0.65)'}}>登录</Link>&nbsp;
                <img src={this.state.imgURL} alt=""/>
            </div>
        )
        return (
            <div id="headerbar">
                <Icon
                    className="trigger"
                    type={this.props.collapsed ? 'menu-unfold' : 'menu-fold'}
                    onClick={this.toggle}
                    />
                <div style={{lineHeight: '64px', float: 'right'}}>
                    <ul className='header-ul'>
                        <li>
                            <Icon type={icon} onClick={this.screenfullToggle}/>
                        </li>
                        <li onClick={() => this.setState({count: 0})}>
                            <Badge count={isLogin ? count : 0} overflowCount={99} style={{marginRight: -17}}>
                                <Icon type="notification"/>
                            </Badge>
                        </li>
                        <li>
                            {isLogin === 'yes' ? login : notLogin}
                        </li>
                    </ul>
                </div>
                <Modal
                    title="Basic Modal"
                    visible={this.state.visible}
                    >
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                </Modal>
            </div>
        )
    }
}
// mapStateToProps：将state映射到组件的props中
const mapStateToProps = (state) => {
    // console.log(state)
    return {
        name: state.userReducer.name,
        login: state.userReducer.login
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        initUserInfo (data) {
            // 如果不懂这里的逻辑可查看前面对redux-thunk的介绍
            dispatch(initUserInfo(data))
            // 执行setPageTitle会返回一个函数
            // 这正是redux-thunk的所用之处:异步action
            // 上行代码相当于
            /*dispatch((dispatch, getState) => {
                dispatch({ type: 'SET_PAGE_TITLE', data: data })
            )*/
        },
        initLoginOut (data) {
            dispatch(initLoginOut(data))
        }
    }
  }
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HeaderBar))