import PropTypes from 'prop-types'
import { GrifItem } from './GrifItem.jsx'
import { useFetchGifs } from '../hooks/useFetchGifs.js'
import { IsLoading } from './IsLoading.jsx'

export const GrifGrid = ({ category }) => {
	const { images, isLoading } = useFetchGifs(category)

	return (
		<>
			<h3>{category}</h3>
			<IsLoading isLoading={isLoading} />

			<div className="flex flex-row flex-wrap content-center">
				{images.map((image) => (
					<GrifItem key={image.id} {...image} />
				))}
			</div>
		</>
	)
}

GrifGrid.propTypes = {
	category: PropTypes.string.isRequired,
}
