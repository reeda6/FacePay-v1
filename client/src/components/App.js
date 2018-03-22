//user upper case A if exporting

import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
//BrowserRouterlooks at URL and determines where to go
//Route used to set up a rule for transitioning

const Header=()=><h2>Header</h2>;
const Dashboard=()=><h2>Dash</h2>;
const SurveryNew=()=><h2>SurveryNew</h2>;
const Landing=()=><h2>Landing</h2>;


const App=()=>{
  return (
    <div>

      <BrowserRouter> //inside here will be rules and accoring routes
        //can only pass one componenet
        <div>
          <Route path="/" component={Landing} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
