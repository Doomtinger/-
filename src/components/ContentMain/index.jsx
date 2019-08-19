import React from 'react'
import { withRouter, Switch, Redirect } from 'react-router-dom'
import LoadableComponent from '../../utils/LoadableComponent'
import PrivateRoute from '../PrivateRoute'

const Home = LoadableComponent(()=>import('../../router/Home/index'))  //参数一定要是函数，否则不会懒加载，只会代码拆分

//基本组件Demo
const ButtonDemo = LoadableComponent(()=>import('../../router/General/ButtonDemo/index'))
const IconDemo = LoadableComponent(()=>import('../../router/General/IconDemo/index'))

// //导航组件Demo
// const DropdownDemo = LoadableComponent(()=>import('../../router/Navigation/DropdownDemo/index'))
// const MenuDemo = LoadableComponent(()=>import('../../router/Navigation/MenuDemo/index'))
// const StepsDemo = LoadableComponent(()=>import('../../router/Navigation/StepsDemo/index'))

// //输入组件Demo
// const FormDemo1 = LoadableComponent(()=>import('../../router/Entry/FormDemo/FormDemo1'))
// const FormDemo2 = LoadableComponent(()=>import('../../router/Entry/FormDemo/FormDemo2'))
// const UploadDemo = LoadableComponent(()=>import('../../router/Entry/UploadDemo/index'))

// //显示组件Demo
// const CarouselDemo = LoadableComponent(()=>import('../../router/Display/CarouselDemo/index'))
// const CollapseDemo = LoadableComponent(()=>import('../../router/Display/CollapseDemo/index'))
// const ListDemo = LoadableComponent(()=>import('../../router/Display/ListDemo/index'))
// const TableDemo = LoadableComponent(()=>import('../../router/Display/TableDemo/index'))
// const TabsDemo = LoadableComponent(()=>import('../../router/Display/TabsDemo/index'))

// //反馈组件Demo
// const SpinDemo = LoadableComponent(()=>import('../../router/Feedback/SpinDemo/index'))
// const ModalDemo = LoadableComponent(()=>import('../../router/Feedback/ModalDemo/index'))
// const NotificationDemo = LoadableComponent(()=>import('../../router/Feedback/NotificationDemo/index'))

// //其它
// const AnimationDemo = LoadableComponent(()=>import('../../router/Other/AnimationDemo/index'))
// const GalleryDemo = LoadableComponent(()=>import('../../router/Other/GalleryDemo/index'))
// const DraftDemo = LoadableComponent(()=>import('../../router/Other/DraftDemo/index'))
// const ChartDemo = LoadableComponent(()=>import('../../router/Other/ChartDemo/index'))
// const LoadingDemo = LoadableComponent(()=>import('../../router/Other/LoadingDemo/index'))
// const ErrorPage = LoadableComponent(()=>import('../../router/Other/ErrorPage/index'))
// const SpringText = LoadableComponent(()=>import('../../router/Other/SpringText/index'))

// //关于
// const About = LoadableComponent(()=>import('../../router/About/index'))
class ContentMain extends React.Component {
  render () {
    return (
      <div style={{padding: 16, position: 'relative'}}>
        <Switch>
          <PrivateRoute exact path='/home' component={Home}/>

          <PrivateRoute exact path='/home/general/button' component={ButtonDemo}/>
          {/* <PrivateRoute exact path='/home/general/icon' component={IconDemo}/> */}

          {/* <PrivateRoute exact path='/home/navigation/dropdown' component={DropdownDemo}/>
          <PrivateRoute exact path='/home/navigation/menu' component={MenuDemo}/>
          <PrivateRoute exact path='/home/navigation/steps' component={StepsDemo}/> */}

          {/* <PrivateRoute exact path='/home/entry/form/basic-form' component={FormDemo1}/>
          <PrivateRoute exact path='/home/entry/form/step-form' component={FormDemo2}/>
          <PrivateRoute exact path='/home/entry/upload' component={UploadDemo}/> */}

          {/* <PrivateRoute exact path='/home/display/carousel' component={CarouselDemo}/>
          <PrivateRoute exact path='/home/display/collapse' component={CollapseDemo}/>
          <PrivateRoute exact path='/home/display/list' component={ListDemo}/>
          <PrivateRoute exact path='/home/display/table' component={TableDemo}/>
          <PrivateRoute exact path='/home/display/tabs' component={TabsDemo}/> */}

          {/* <PrivateRoute exact path='/home/feedback/modal' component={ModalDemo}/>
          <PrivateRoute exact path='/home/feedback/notification' component={NotificationDemo}/>
          <PrivateRoute exact path='/home/feedback/spin' component={SpinDemo}/> */}

          {/* <PrivateRoute exact path='/home/other/animation' component={AnimationDemo}/>
          <PrivateRoute exact path='/home/other/gallery' component={GalleryDemo}/>
          <PrivateRoute exact path='/home/other/draft' component={DraftDemo}/>
          <PrivateRoute exact path='/home/other/chart' component={ChartDemo}/>
          <PrivateRoute exact path='/home/other/loading' component={LoadingDemo}/>
          <PrivateRoute exact path='/home/other/404' component={ErrorPage}/>
          <PrivateRoute exact path='/home/other/springText' component={SpringText}/> */}

          {/* <PrivateRoute exact path='/home/about' component={About}/> */}

          <Redirect exact from='/' to='/home'/>
        </Switch>
      </div>
    )
  }
}

export default withRouter(ContentMain)