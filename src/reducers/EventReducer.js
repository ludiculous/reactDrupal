import {FETCH_EVENT} from '../actions/types';

const INITIAL_STATE = {
	eventdata:[]
};

export default (state = INITIAL_STATE,action) =>{
	switch (action.type){
		case FETCH_EVENT:

		 return Object.assign({}, state, {
        	eventdata: action.payload
     	 })
		default:
			return state;
	}

}