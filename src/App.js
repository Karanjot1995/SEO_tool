import React, { Component } from 'react';
import Search from './components/Search'
import './App.css';
import './components/Search.css'
import {Switch, Route} from 'react-router-dom'
import CheckUp from './components/CheckUp'
import Results from './components/Results'
import Compile from './components/Compile'
import {connect} from 'react-redux'

class App extends Component {
state={
  pageLink: "",
  response: '',
  post: '',
  responseToPost: '',

}

componentDidMount() {
  this.callApi()
    .then(res => this.setState({ response: res.array[1] }))
    .catch(err => console.log(err));
}

callApi = async () => {
  const response = await fetch('/api/hello');
  const body = await response.json();
  if (response.status !== 200) throw Error(body.message);
  console.log(body)

  return body;
};

handleSubmit = async e => {
  e.preventDefault();
  const response = await fetch('/api/world', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      // 'Access-Control-Allow-Origin':'*',
    },
    body: JSON.stringify({ post: this.state.post }),
  });
  const body = await response.text();
  
  this.setState({ responseToPost: body });

};



  render() {
    return (
      <div className="App">
      <Switch>
        <Route exact path='/' render={() =>(<Search/>)} />
        <Route exact path='/checkup' render={() =>(<Compile/>)}/>
      </Switch>
      <p>{this.state.response}</p>
        <form onSubmit={this.handleSubmit}>
          <p>
            <strong>Post to Server:</strong>
          </p>
          <input
            type="text"
            value={this.state.post}
            onChange={e => this.setState({ post: e.target.value })}
          />
          <button type="submit">Submit</button>
        </form>
        <p>{this.state.responseToPost}</p>
      </div>
    );
  }
}

export default App;
