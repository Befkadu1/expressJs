import React from 'react';
import './App.css';
import { environment } from './environments'
const API = environment.localUrl;
class App extends React.Component {
  state = {
    person: null
  }

  componentDidMount() {
    // Call our fetch function below once the component mounts
    this.callBackendAPI()
      .then(res => this.setState({ person: res.express }))
      .catch(err => console.log(err));
  }

  // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
  callBackendAPI = async () => {
    const response = await fetch(API + 'persons');
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
        <p>{this.state.person}</p>
      </div>
    );
  }
}

export default App;
