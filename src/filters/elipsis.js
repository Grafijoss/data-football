const toEllipsis = {}

function convertToEllipsis(current) {
	const maxLength = 180
	return current.length > maxLength ? `${current.substring(0, maxLength)}...` : current
}

toEllipsis.install = function (Vue) {
	Vue.filter('to-ellipsis', (val) => {
		return convertToEllipsis(val)
	})
}

export default toEllipsis
