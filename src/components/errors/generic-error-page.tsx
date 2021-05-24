import React from 'react'
import Button from '../button'
import ROUTES from '../../routes'
import { Link } from 'react-router-dom'

export default function GenericErrorPage (): React.ReactElement {
  return (
    <div className='flex flex-col justify-center items-center pt-20'>
      <h1 className='text-6xl'>Error</h1>
      <Button to={ROUTES.sessions} className='mt-4 mx-2 px-4 py-2' component={Link}>Go to Sub Games</Button>
    </div>
  )
}
