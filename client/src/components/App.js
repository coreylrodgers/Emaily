import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Header from './Header';
import Landing from './Landing';

const Dashboard = () => {
  return (
    <>
      <h2>Dashboard</h2>
      <p>{process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY}</p>
    </>
  );
};

const SurveyNew = () => {
  return <h2>Create new</h2>;
};

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={Landing} />
            <Route exact path="/surveys" component={Dashboard} />
            <Route exact path="/newSurvey" component={SurveyNew} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
