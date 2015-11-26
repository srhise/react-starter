// MOUNTING LIFECYCLE 
// https://egghead.io/lessons/react-component-lifecycle-mounting-usage
// start-code 

import React from 'react';
import ReactDOM from 'react-dom';
class App extends React.Component {
  constructor(){
    super();
    this.state = { val: 0 };
    this.update = this.update.bind(this);
  }
  update(){
    this.setState({val: this.state.val + 1 })
  }
  componentWillMount(){
    console.log('mounting')
  }
  render(){
    console.log('rendering!')
    return <button onClick={this.update}>{this.state.val}</button>
  }
  componentDidMount(){
    console.log('mounted')
  }
  componentWillUnmount(){
    console.log('bye!')
  }
}

class Wrapper extends React.Component {
  constructor(){
    super();
  }
  mount(){
    ReactDOM.render(<App />, document.getElementById('a'))
  }
  unmount(){
    ReactDOM.unmountComponentAtNode(document.getElementById('a'))
  }
  render(){
    return (
        <div>
          <button onClick={this.mount.bind(this)}>Mount</button>
          <button onClick={this.unmount.bind(this)}>Unmount</button>
          <div id="a"></div>
        </div>
    )
  }
}

export default Wrapper

// end-code


// START NESTED COMPONENTS

// start-code 

// import React from 'react';
// import ReactDOM from 'react-dom';

// class App extends React.Component {
// 	render() {
// 		return <Button>I <Heart/> React</Button>
// 	}  
// }

// class Button extends React.Component {
// 	render() {
// 		return <button>{this.props.children}</button>
// 	}
// }

// const Heart = () => <span className="something-cool">Heart</span>

// end-code




// STATE BASICS //

// start-code

// import React from 'react';
// import ReactDOM from 'react-dom';

// class App extends React.Component {
//   constructor() {
//   	super();
//   	this.state = {
//   		red: 0,
//   		green: 0,
//   		blue: 0
//   	}
//   	this.update = this.update.bind(this)
//   }

//   update(e) {
//   	this.setState({
//   		red: ReactDOM.findDOMNode(this.refs.red.refs.inp).value,
//   		green: ReactDOM.findDOMNode(this.refs.green.refs.inp).value,
//   		blue: ReactDOM.findDOMNode(this.refs.blue.refs.inp).value
//   	})
//   }

//   render(){
//     return (
//     	<div>
// 	    	<div>
// 	    		<Slider ref="red" update={this.update}/>
// 	    		{this.state.red}
// 	    		<br/>
// 	    		<Slider	ref="green" update={this.update}/>
// 	    		{this.state.green}
// 	    		<br/>
// 	    		<Slider ref="blue" update={this.update}/>
// 	    		{this.state.blue}
// 	    		<br/>
// 	    	</div>
//     	</div>
//     )
//   }
// }

// class Slider extends React.Component {
// 	render() {
// 		return (
// 			<div>
// 			<input ref="inp" type="range"
// 				min="0"
// 				max="255"
// 				onChange={this.props.update}/>
// 			</div>
// 		)
// 	}
// }

//export default App