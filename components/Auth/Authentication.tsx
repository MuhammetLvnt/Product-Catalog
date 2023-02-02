import { useAppDispatch, useAppSelector } from '@/store'
import { User, login } from '@/store/auth'
import Cookies from 'js-cookie'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

const Authentication: React.FC = () => {
  const user: User = useAppSelector(state => state.auth.user)
  const dispatch = useAppDispatch()
  const router = useRouter()

  useEffect(() => {
    if (user.exists) {
      router.push('/')
    } else {
      const existingToken = Cookies.get('token')
      if (existingToken) {
        dispatch(login({ exists: true, token: existingToken }))
      } else {
        router.push('/login')
      }
    }
  }, [])
  return <></>
}

export default Authentication
