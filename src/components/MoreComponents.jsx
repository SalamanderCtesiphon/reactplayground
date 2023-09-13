import React from 'react'

export function FavoriteFood() {
  return (
    <div>FavoriteFood</div>
  )
}

export function FavoriteDrink() {
  return (
    <div>
      <h1>FavoriteDrink</h1>
      <div>
        <h1>Test title</h1>
        <ol className="test-list">
          <li>List item 1</li>
          <li>List item 2</li>
          <li>List item 3</li>
        </ol>
        <svg>
          <circle cx="25" cy="75" r="20" stroke="green" strokeWidth="2" />
        </svg>
        <form>
          <input type="text" />
        </form>
      </div>
    </div>
  )
}