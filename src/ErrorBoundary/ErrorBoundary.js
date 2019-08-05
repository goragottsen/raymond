import React, {Component} from 'react';

class ErrorBoundary extends Component{
    state = {
        hasError: false,
        errorMessage: ''
    }

    componentDidCatch = (error, info) => {
        this.setState({hasError: true, errorMessage: error})
    }

    render(){
        if (this.state.hasError){
            return <h1>this.state.errorMessage</h1>;
        }else{
            return this.props.children; // Default case
        }
    }
}

export default ErrorBoundary;

// Only use it if you know your code may actually fail and you CAN'T control that.
// Works in production only!!!