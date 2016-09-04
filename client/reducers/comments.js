function postComments(state=[], action) {
	
	switch (action.type) {
		case 'ADD_COMMENT':
			return [
				...state,
				{
					user: action.author,
					text: action.comment
				}
			]
		case 'REMOVE_COMMENT':
			return state.filter((comment, i) => {
				return action.index !== i;
			});
		default:
			return state;
	}

}

function comments(state={}, action) {

	if (typeof action.postId !== 'undefined') {
		return Object.assign({}, state, {
			[action.postId]: postComments(state[action.postId], action)
		});
	}
	return state;
}

export default comments;