export default (state=[],action)=>{
	var newS;
	switch(action.type){
		case "FRUIT_LOAD":
			newS=[...state]
			newS.push(action.payload)
			return newS;
		default:
			return state;
	}
}