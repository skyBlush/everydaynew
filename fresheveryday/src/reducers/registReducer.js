export default (state=null,action)=>{
	var regist
	switch(action.type){
		case 'changeRegistFlag':
			regist = state;
			regist = action.payload;
			return regist;
		default :
			return state;
	}
}