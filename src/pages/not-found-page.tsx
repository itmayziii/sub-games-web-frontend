import React from 'react'
import { Link } from 'react-router-dom'
import ROUTES from '../routes'

const NotFoundPage: React.FC = function NotFoundPage () {
  return (
    <>
      <p>The page you were looking for was not found</p>
      <Link to={ROUTES.sessions}>Go to sessions</Link>
    </>
  )
}

export default NotFoundPage
