import React, { Component } from 'react';

class ErrorBoundry extends Component {
   constructor(props) {
      super(props);
      this.state = {
         hasError: false
      }
   }

   componentDidCatch(error, info) {
      this.setState({ hasError: true })
   }

   render(h) {
      if (this.state.hasError) {
         return <h1>Oh No. Something's Wrong..</h1>
      }
      return this.props.children
   }
}

export default ErrorBoundry;