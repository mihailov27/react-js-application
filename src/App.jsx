import React from 'react';

class App extends React.Component {
    constructor() {
        super();
        this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
    };
    forceUpdateHandler() {
        this.forceUpdate();
    };
    render() {
        return (
            <div>
                <button onClick={this.forceUpdateHandler}>Set state</button>
                <h4>val: {Math.random()}</h4>
            </div>
        );
    }
}

export default App;
