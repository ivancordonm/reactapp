import React from 'react'
import Link from 'next/link'

function MealsPage() {
  return (
    <main>
      <h1>Meals</h1>
      <p>
        <Link href='/meals/meal-1'>Meal 1</Link>
      </p>
      <p>
        <Link href='/meals/meal-2'>Meal 2</Link>
      </p>
    </main>
  )
}

export default MealsPage
