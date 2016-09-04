// increment
export function increment(index) {
	return {
		type: 'INCREMENT_LIKES',
		index: index
	}
}

// add comment
export function addComment(postId, author, comment) {
	return {
		type: 'ADD_COMMENT',
		postId, //ES5 postId: postId // ES6 postId // equal
		author,
		comment
	}
}

// remove comment

export function removeComment(postId, index) {
	return {
		type: 'REMOVE_COMMENT',
		postId,
		index
	}
}
