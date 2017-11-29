export default (state=null,action)=>{
	var newFlag
	switch(action.type){
		case 'changeFlag':
			newFlag = state;
			newFlag = action.payload;
			return newFlag;
		default :
			return state
	}
}
