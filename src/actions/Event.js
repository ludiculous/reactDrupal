import axios from 'axios';
import {FETCH_EVENT} from './types';

export const fetchEvents = ()=>{
  console.log('fetching Event');

     return (dispatch) =>{
        axios("/api/events")
        .then(res=>{
        window.BE = res.data ;
        var response = res.data
        var data = JSON.parse(response.data);
        console.log(data);
        
        dispatch({
          type: FETCH_EVENT,
          payload: data
        })

      }).catch(err =>{
            console.log(err)
        })
  }
}


 
