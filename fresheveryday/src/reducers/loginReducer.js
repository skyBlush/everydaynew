export default (state=null,action)=>{
	var newUser
	switch(action.type){
		case 'sendUsername':
			newUser = state;
			newUser = action.payload;
			return newUser;
		default :
			return state;
	}
}