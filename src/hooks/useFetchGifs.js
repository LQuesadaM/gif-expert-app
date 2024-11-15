import { useState, useEffect } from 'react'
import { getGifs } from '../API/getGifts.js'

export const useFetchGifs = (category) => {
	const [images, setImage] = useState([])
	const [isLoading, setIsloading] = useState(true)

	const getImages = async () => {
		const newImages = await getGifs(category)
		setImage(newImages)
		setIsloading(false)
	}

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		getImages()
	}, [])

	return { images, isLoading }
}
