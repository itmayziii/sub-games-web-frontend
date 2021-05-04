import React from 'react'
import { Link } from 'react-router-dom'
import ROUTES from '../routes'
import Button from '../components/button'

export default function NotFoundPage (): React.ReactElement {
  return (
    <div className='flex flex-col items-center min-h-full pt-20 text-center'>
      <h1 className='text-4xl md:text-6xl'>404</h1>
      <h2 className='text-lg md:text-2xl mt-2'>Page Not Found</h2>
      <Button to={ROUTES.sessions} className='mt-4 mx-2 px-4 py-2' component={Link}>Go to Sub Games</Button>
      <Button to={ROUTES.sessions} className='mt-4 mx-2 px-4 py-2' component='button'>Go to Sub Games</Button>
    </div>
  )
}
