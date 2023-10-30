import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import DocList from './DocList';
import DocViewer from './DocViewer';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/doc/:docName" component={DocViewer} />
        <Route path="/" component={DocList} />
      </Switch>
    </Router>
  );
}

export default App;