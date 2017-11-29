export default (state=[],action)=>{
	var newS
	switch (action.type) {
		case 'add-hotBannerPic' :
			newS = [...state];
			newS.push(action.payload);
			return newS;
		default :
			return state;
	}
}