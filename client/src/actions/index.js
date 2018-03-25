import axios from 'axios';
import {FETCH_USER} from './types';
//axios used for ajax

//using thunk will allow this action to be dispatched to all reducers
// but need to wait until get is called and completed
export const fetchUser=()=> async dispatch=>{
  const res= await axios.get('/api/current_user');
  dispatch({type:FETCH_USER, payload:res.data});
};

export const handleToken=(token)=> async dispatch=>{
  const res=await axios.post('/api/stripe',token);
  dispatch ({type:FETCH_USER, payload:res.data});
};
