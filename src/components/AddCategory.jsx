import PropTypes from 'prop-types'
import { useState } from 'react'

export const AddCategory = ({ onNewCategory }) => {
	const [inputValue, setInputValue] = useState('')

	const handleInput = ({ target }) => {
		setInputValue(target.value)
	}

	const handleSubmit = (event) => {
		event.preventDefault()
		if (inputValue.trim().length <= 1) return

		//setCategories((categories) => [categories, ...inputValue])
		onNewCategory(inputValue.trim())
		setInputValue('')
	}

	return (
		<form aria-label="form" onSubmit={(e) => handleSubmit(e)}>
			<input
				type="text"
				placeholder="Buscar Gif"
				value={inputValue}
				onChange={handleInput}
			/>
		</form>
	)
}

AddCategory.propTypes = {
	onNewCategory: PropTypes.func.isRequired,
}
