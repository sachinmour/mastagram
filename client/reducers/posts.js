function posts(state=[], action) {
	switch (action.type) {	

		case 'INCREMENT_LIKES':
			return state.map((post, i) => {
				if (i === action.index) {
					return Object.assign({}, post, {
						likes: post.likes+1
					})
				}
				return post;
			})
		default:
			return state;

	}
}

export default posts;