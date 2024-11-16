import { waitFor } from '@testing-library/react'
import { getGifs } from '../../src/API/getGifts'

describe('Pruebas en getGifts()', () => {
	test('Debe retornar un arreglo de gifs', async () => {
		const gifs = await getGifs('One Puch')
		expect(gifs[0]).toEqual({
			id: expect.any(String),
			title: expect.any(String),
			url: expect.any(String),
		})
	}, 10000)
})
