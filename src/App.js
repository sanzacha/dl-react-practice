import React, { PureComponent } from 'react';
import MainView from './components/mainView/mainView';
import AppHeader from './components/appHeader/appHeader';

class App extends PureComponent {
    render() {
      return (
        <div className="App">
          <AppHeader />
          <MainView />
        </div>
      );
    }
}

export default App;
