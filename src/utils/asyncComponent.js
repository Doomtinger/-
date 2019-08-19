import React, { Component } from 'react'
// 按需加载
export const asyncComponent = importComponent => {
    class AsyncComponent extends Component {
        constructor(props) {
            super(props)
            this.state = {
                component: null
            }
        }

        async componentDidMount() {
            const { default: component } = await importComponent()
            this.setState({
                component: component
            })
        }

        render() {
            // console.log(this.state.component)
            const C = this.state.component
            return C ? < C {...this.props }
            />: null
        }
    }
    return AsyncComponent
}