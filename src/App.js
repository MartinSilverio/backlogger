import React from 'react';
import { SWRConfig } from 'swr';
import { Provider } from 'react-redux';
import store from './redux/store';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SearchPage from './pages/search-page/SearchPage';
import MyBacklogPage from './pages/my-backlog-page/MyBacklogPage';
import Header from './components/header/Header';
import './App.css';

const fetcher = (url) => fetch(url).then((response) => response.json());

function App() {
  return (
    <SWRConfig
      value={{
        fetcher: fetcher,
        revalidateOnFocus: false,
      }}
    >
      <Provider store={store}>
        <Router>
          <div className='App'>
            <Header />
            <Switch>
              <Route path='/backlog'>
                <MyBacklogPage />
              </Route>
              <Route exact path='/'>
                <SearchPage />
              </Route>
            </Switch>
          </div>
        </Router>
      </Provider>
    </SWRConfig>
  );
}

export default App;
