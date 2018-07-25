import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import registerApp from './redux/reducers'
import AppRouter  from "./routers/route"

const store = createStore(registerApp)
class App extends Component {
  render() {
    return (
      <Provider store={store}>
          <AppRouter/>
      </Provider>
    );
  }
}

export default App;
