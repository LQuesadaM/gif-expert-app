import { fireEvent, render, screen } from '@testing-library/react'
import { GifExpertApp } from '../src/GifExpertApp'

describe('Pruebas en <GifExpertApp />', () => {
	const inputValue = 'Saitama'

	test('Debe agregar nueva categoria', () => {
		render(<GifExpertApp />)

		const input = screen.getByRole('textbox')
		const form = screen.getByRole('form')

		fireEvent.input(input, { target: { value: inputValue } })
		fireEvent.submit(form)
		expect(screen.getAllByRole('heading', { level: 3 }).length).toBe(2)
	})

	test('Debe verificar que no se añade una categoría si ya está en el arreglo', () => {
		render(<GifExpertApp />)

		const input = screen.getByRole('textbox')
		const form = screen.getByRole('form')

		expect(screen.getAllByRole('heading', { level: 3 }).length).toBe(1)

		//Agregando la categoria
		fireEvent.input(input, { target: { value: inputValue } })
		fireEvent.submit(form)
		expect(screen.getAllByRole('heading', { level: 3 }).length).toBe(2)

		//  Intentar agregar la misma categoria nuevamente
		fireEvent.input(input, { target: { value: inputValue } })
		fireEvent.submit(form)

		expect(screen.getAllByRole('heading', { level: 3 }).length).toBe(2)
	})
})
