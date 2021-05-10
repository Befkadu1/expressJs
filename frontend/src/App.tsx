import React from 'react';
import logo from './logo.svg';
import './App.css';
import { environment } from './environments'
const API = environment.localUrl;
class App extends React.Component {

  state = {
    data: null
  };

  componentDidMount() {
    // Call our fetch function below once the component mounts
    this.callBackendAPI()
      .then(res => this.setState({ data: res.express }))
      .catch(err => console.log(err));
  }

  // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
  callBackendAPI = async () => {
    const response = await fetch(API + 'express_backend');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message)
    }
    return body;
  };

  render() {
    return (
      <div >
        <header>

        </header>
        <p>{this.state.data}</p>
      </div>
    );
  }
}

export default App;
