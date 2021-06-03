import React from 'react';
import { Provider } from 'react-redux';
import { Root } from 'native-base';
import store from './store';

//screens
import Router from './router';

const App = () => {
  return (
    <Provider store={store}>
      {/* <Root> */}
        <Router />
      {/* </Root> */}
    </Provider>
  );
};

export default App;
