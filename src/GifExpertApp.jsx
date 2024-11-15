import { useState } from 'react'
import { AddCategory, GrifGrid } from './components'

export const GifExpertApp = () => {
	const [categories, setCategories] = useState(['Dragon ball'])

	const onAddCategory = (newCategory) => {
		if (categories.includes(newCategory)) return

		setCategories([newCategory, ...categories])
	}

	return (
		<main className="space-y-5">
			<h1 className="text-3xl">GifExpertApp</h1>

			<main className="flex flex-col gap-2">
				<AddCategory onNewCategory={(e) => onAddCategory(e)} />
			</main>

			{categories.map((category) => (
				<GrifGrid category={category} key={category} />
			))}
		</main>
	)
}
