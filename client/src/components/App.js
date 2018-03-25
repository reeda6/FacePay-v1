//user upper case A if exporting

import React,{Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import {connect} from 'react-redux';
//connect allows componenets to call action creators
import * as actions from '../actions';
//BrowserRouterlooks at URL and determines where to go
//Route used to set up a rule for transitioning

import Header from './Header';
import Landing from './Landing';

const Dashboard=()=> <h2>Dash</h2>;
const SurveryNew=()=> <h2>SurveryNew</h2>;
//const Landing=()=> <h2>Landing</h2>;

//inside here will be rules and accoring routes
  //can only pass one componenet

  //DONT KEEP COMMENTS IN BELOW
class App extends Component {
  componentDidMount(){
      this.props.fetchUser();
  }
  render(){
    return (

      <div className="container">
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={Landing} />
            <Route exact path="/surveys" component={Dashboard} />
            <Route path="/surveys/new" component={SurveryNew} />
          </div>
        </BrowserRouter>
      </div>
    );
};
};

export default connect(null, actions)(App);
//actions assigned to app as props
