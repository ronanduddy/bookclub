import React from 'react'
import ReactDOM from 'react-dom'
import Book from '../components/book'

document.addEventListener('DOMContentLoaded', () => {
  const node = document.getElementById('books_data')
  const books = JSON.parse(node.getAttribute('value'))

  ReactDOM.render(
    <Book title={books.title} />,
    document.body.appendChild(document.createElement('div')),
  )
})
