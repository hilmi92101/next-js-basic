import { Component } from 'react'

type CounterProps = {
    message: string
}
type CounterState = {
    count: number
}

/** The count value is 5 */
export class Counter extends Component<CounterProps, CounterState> {
    
    state = {
        count: 0
    }

    handleClick = () => {
        this.setState(prevState => ({ count: prevState.count + 1 }))
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick}>Increment</button>
                {this.props.message} {this.state.count}
            </div>
        )
    }
}

// empty props
export class CounterV2 extends Component<{}, CounterState> {
    
    state = {
        count: 0
    }

    handleClick = () => {
        this.setState(prevState => ({ count: prevState.count + 1 }))
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick}>Increment</button>
                {this.state.count}
            </div>
        )
    }
}

// only props
export class CounterV3 extends Component<CounterProps> {

    render() {
        return (
            <div>
                <h1>1 {this.props.message}</h1>
                <h1>2 {this.props.message}</h1>
                <h1>3 {this.props.message}</h1>
            </div>
        )
    }
}