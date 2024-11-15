import PropTypes from 'prop-types'

export const GrifItem = ({ title, url, id }) => {
	return (
		<div className="card">
			<img src={url} alt={title} />
			<p>{title}</p>
		</div>
	)
}

GrifItem.propType = {
	title: PropTypes.string.isRequired,
	url: PropTypes.string.isRequired,
}
