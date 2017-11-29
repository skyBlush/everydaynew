import {combineReducers} from 'redux';
import fruitproreducer from './fruitproreducer';
import addBannerPicReducer from './addBannerPicReducer';
import searchReducer from './searchReducer';
import loginReducer from './loginReducer';
import registReducer from './registReducer';
const reducers = combineReducers({
	Fruitpro:fruitproreducer,
	addBannerPic: addBannerPicReducer,
	searchFlag : searchReducer,
	loginFlag: loginReducer,
	registFlag: registReducer
})

export default reducers;