import { render, screen } from '@testing-library/react'
import { GrifItem } from '../../src/components/GrifItem.jsx'

describe('Prueba en <GriftItem/>', () => {
	const title = 'Saitama'
	const url = 'https://one-puch-man.com/saitama.jpg'
	test('Debe de hacer match con el snapshop', () => {
		const { container } = render(<GrifItem title={title} url={url} />)
		expect(container).toMatchSnapshot()
	})

	test('Debe de mostrar la imagen con el URL y el ALT indicado', () => {
		render(<GrifItem title={title} url={url} />)
		//expect(screen.getByRole('img').src).toBe(url)
		//expect(screen.getByRole('img').alt).toBe(title)
		const { src, alt } = screen.getByRole('img')
		expect(src).toBe(url)
		expect(alt).toBe(title)
	})

	test('Debe de mostrar el titulo en el componente', () => {
		render(<GrifItem title={title} url={url} />)
		expect(screen.getByText(title)).toBeTruthy()
	})
})
