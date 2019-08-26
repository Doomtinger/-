import React from 'react'
import CustomBreadcrumb from '../../../components/CustomBreadcrumb'
import TypingCard from '../../../components/TypingCard'

class ButtonDemo extends React.Component {
    state = {
        size: 'default'
    }
    render() {
        const cardContent = `标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。`
        return ( 
            <div>
                <CustomBreadcrumb arr={['基本', '按钮']} />
                <TypingCard source={cardContent}/>
                我为什么不显示
            </div>
        )
    }
}
export default ButtonDemo