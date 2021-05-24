import React from 'react'
import { Link, useParams } from 'react-router-dom'
import Button from '../button'
import ROUTES from '../../routes'

export default function UserNotSignedUpErrorPage (): React.ReactElement {
  const { userId } = useParams<{ userId: string }>()
  return (
    <div className='flex flex-col justify-center items-center pt-20'>
      <h1 className='text-4xl md:text-6xl'>Not Found</h1>
      <h2 className='text-lg md:text-2xl mt-2 mx-2 text-center'>User "{userId}" is not signed up for Sub Games.</h2>
      <Button to={ROUTES.sessions} className='mt-4 mx-2 px-4 py-2' component={Link}>Go to Sub Games</Button>
    </div>
  )
}
