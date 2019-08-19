import React from 'react'
import { notification } from 'antd'
import {initUserInfo} from'../../store/actions'
import { withRouter } from 'react-router-dom' //路由更新重新渲染页面
import { connect } from 'react-redux'
import {preloadingImages} from '../../utils/utils'
import BGParticle from '../../utils/BGParticle'
import Loading2 from '../../components/Loading2'
import LoginForm from './LoginForm'
import './style.less'
// import './style.css'
const url = 'https://github.com/zhangZhiHao1996/image-store/blob/master/react-admin-master/bg1.jpg?raw=true'
const imgs = [
  'https://github.com/zhangZhiHao1996/image-store/blob/master/react-admin-master/slide1.jpg?raw=true',
  'https://github.com/zhangZhiHao1996/image-store/blob/master/react-admin-master/slide2.jpg?raw=true',
  'https://github.com/zhangZhiHao1996/image-store/blob/master/react-admin-master/slide3.jpg?raw=true',
  'https://github.com/zhangZhiHao1996/image-store/blob/master/react-admin-master/slide4.jpg?raw=true'
]
class Index extends React.Component{
  constructor(props) {
      super(props)
      this.state={
          name: 'wei', //用户名
          pwd: 'weixu', //密码
          url: '', //背景图片
          showBox: 'login',
          loading: false, 
          loading2: false
      }
  }
  componentDidMount () {
    const isLogin = this.props
    // console.log(this.props)
    if(isLogin){
      this.props.history.go(1)     //当浏览器用后退按钮回到登录页时，判断登录页是否登录，是登录就重定向上个页面
      // this.props.appStore.toggleLogin(false) //也可以设置退出登录
    }
    this.initPage()
    preloadingImages(imgs)  //预加载下一个页面的图片，预加载了第二次为什么还会去请求图片资源？
  }

  componentWillUnmount () {
    this.particle && this.particle.destory()
    notification.destroy()
  }
   //载入页面时的一些处理
   initPage = () => {
      this.setState({
          loading:true
      })
      // this.props.initUserInfo({username: 'wei', password: 'weixu'})
      this.loadImageAsync(url).then(url=>{
        this.setState({
            loading:false,
            url
        })
      }).then(()=>{
        //为什么写在then里？id为backgroundBox的DOM元素是在loading为false时才有，而上面的setState可能是异步的，必须等到setState执行完成后才去获取dom
        this.particle = new BGParticle('backgroundBox')
        this.particle.init()
        notification.open({
            message:<ul><li>初始账号：wei</li><li>初始密码：weixu</li></ul>,
            duration:0,
            className:'login-notification'
        })
      })
  }
   //登录的背景图太大，等载入完后再显示，实际上是图片预加载，
  loadImageAsync (url) {
      return new Promise(function(resolve, reject) {
        const image = new Image();
        image.onload = function() {
          resolve(url);
        };
        image.onerror = function() {
          console.log('图片载入错误')
        };
        image.src = url;
      });
  }
  login = (params) => {
      this.props.initUserInfo(params)
      const {from} = this.props.location.state || {from: {pathname: '/'}}
      this.props.history.push(from)
  }
  //切换showbox
  switchShowBox = (box) => {
    this.setState({
      showBox: box
    })
  }
  render() {
    const {showBox,loading} = this.state
    // 设置Sider的minHeight可以使左右自适应对齐
    return (
      <div id='login-page'>
        {
          loading ?
            <div>
              <h3 style={styles.loadingTitle} className='animated bounceInLeft'>载入中...</h3>
              {/* 哈哈哈 */}
              <Loading2/>
            </div>:
            <div>
              <div id='backgroundBox' style={styles.backgroundBox}/>
              <div className='container'>
                <LoginForm
                  className={showBox === 'login' ? 'box showBox' : 'box hiddenBox'}
                  switchShowBox={this.switchShowBox}
                  login={this.login}/>
                {/* <RegisterForm
                  className={showBox === 'register' ? 'box showBox' : 'box hiddenBox'}
                  switchShowBox={this.switchShowBox}/> */}
              </div>
            </div>
        }
      </div>
    );
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

// mapDispatchToProps：将dispatch映射到组件的props中
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
  }
}
const styles = {
    backgroundBox: {
        position: 'fixed',
        top: '0',
        left: '0',
        width: '100vw',
        height: '100vh',
        // backgroundImage: 'url(https://github.com/zhangZhiHao1996/image-store/blob/master/react-admin-master/bg5.jpg?raw=true)',
        backgroundImage: 'url(https://github.com/zhangZhiHao1996/image-store/blob/master/react-admin-master/bg1.jpg?raw=true)',
        backgroundSize: '100% 100%',
        transition:'all .5s'
    },
    loadingTitle:{
        position:'fixed',
        top:'50%',
        left:'50%',
        marginLeft: -45,
        marginTop: -18,
        color:'#000',
        fontWeight:500,
        fontSize:24
    },
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Index))