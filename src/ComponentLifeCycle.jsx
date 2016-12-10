import React from 'react';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {data : 0};
        this.setNewNumber = this.setNewNumber.bind(this);
    };
    setNewNumber() {
        this.setState({data: this.state.data + 1})
    }
    render() {
        return (
            <div>
                <button onClick = {this.setNewNumber}>INCREMENT</button>
                <Content myNumber = {this.state.data}></Content>
            </div>
        );
    }
}

class Content extends React.Component {

    componentWillMount() {
        console.log('component will mount.');
    };
    componentDidMount() {
        console.log('component did mount.');
    };
    componentWillReceiveProps(newProps) {
        console.log('component will receive props.');
    };
    shouldComponentUpdate() {
        return true;
    };
    componentWillUpdate(nextProps, nextState) {
        console.log('component will update.');
    };
    componentDidUpdate(prevProps, prevState) {
        console.log('component did update.');
    };
    componentWillUnmount() {
        console.log('component will unmount.');
    };
    render() {
        return (
            <div>
                <h3>{this.props.myNumber}</h3>
            </div>
        );
    }
}

export default App;