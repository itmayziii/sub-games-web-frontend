import React, { useMemo } from 'react'
import { useLocation } from 'react-router-dom'
import Button from '../components/button'
import twitchLogoWhite from '../assets/images/twitch-logo-white.png'

export default function LoginPage (): React.ReactElement {
  const location = useLocation()
  const query = useMemo<URLSearchParams>(() => {
    return new URLSearchParams(location.search)
  }, [location.search])

  const redirectURL = query.get('redirect_url')
  let twitchLoginURL = 'https://local-api.sub-games.com/v1/login'
  if (redirectURL !== null) {
    twitchLoginURL += `?redirect_url=${redirectURL}`
  }
  return (
    <div className='flex flex-col justify-center items-center mt-20 md:mt-32'>
      <Button
        href={twitchLoginURL}
        className='flex items-center px-6 py-2'
        component='a'
      >
        <img src={twitchLogoWhite} alt='twitch logo' className='w-6 pointer-events-none' />
        <span className='ml-2 pointer-events-none'>Login with Twitch</span>
      </Button>
    </div>
  )
}
