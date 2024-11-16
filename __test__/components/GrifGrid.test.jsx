import { render, screen } from '@testing-library/react'
import { GrifGrid } from '../../src/components/GrifGrid.jsx'
import { useFetchGifs } from '../../src/hooks/useFetchGifs.js'

jest.mock('../../src/hooks/useFetchGifs.js')

describe('Pruebas en <GrifGrid/>', () => {
	const category = 'One Puch'

	test('Debe de mostrar el login inicialmente', () => {
		useFetchGifs.mockReturnValue({
			images: [],
			isLoading: true,
		})
		render(<GrifGrid category={category} />)
		expect(screen.getByText('Cargando...'))
		expect(screen.getByText(category))
	})

	test('Debe de mostrar los item cuando se cargan las imágenes useFetchGifs', () => {
		const gifs = [
			{
				id: 'ABC',
				title: 'Saitama',
				url: 'https://localhost/saitama.jpg',
			},
			{
				id: '123',
				title: 'Goku',
				url: 'https://localhost/goku.jpg',
			},
		]
		useFetchGifs.mockReturnValue({
			images: gifs,
			isLoading: false,
		})
		render(<GrifGrid category={category} />)
		expect(screen.getAllByRole('img').length).toBe(2)
	})
})
