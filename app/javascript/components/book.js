import React from 'react'
import PropTypes from 'prop-types'

const Book = props => (
  <div>Title: {props.title}!</div>
)

Book.defaultProps = {
  title: 'this is my default title'
}

Book.propTypes = {
  title: PropTypes.string
}

export default Book
