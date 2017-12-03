export default (state=null,action)=>{
	switch(action.type){
		case "changeflag":
			var newflag = state;
			newflag = action.payload;
			return newflag;
		default:
			return state; 
	}
}