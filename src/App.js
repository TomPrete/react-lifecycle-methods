import { Component } from 'react';
import './App.css';
import Child from './components/Child';

class App extends Component {
  state = {
    isMounted: true,
    page: 1
  }

  toggleIsMounted = () => {
    this.setState({
      isMounted: !this.state.isMounted
    })
  }

  nextItem = () => {
    this.setState({
      page: this.state.page + 1
    })
  }
  backItem = () => {
    if (this.state.page > 1) {
      this.setState({
        page: this.state.page - 1
      })
    }
  }

  render() {
    return (
      <div className="App">
        <h1>Lifecycle Methods</h1>
        <Child isMounted={this.state.isMounted} page={this.state.page}/>
        <button onClick={this.backItem}>Back Item</button>
        <button onClick={this.toggleIsMounted}>Toggle Child Component</button>
        <button onClick={this.nextItem}>Next Item</button>
      </div>
    );
  }
}

export default App;
