import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import logo from '../../public/logo.svg'
import { login } from '../../services/AuthServices'
import { useAppDispatch, useAppSelector } from '@/store'
import { User, login as loginHandle } from '../../store/auth'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Cookies from 'js-cookie'

const Login: React.FC = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [checked, setChecked] = useState(false)
  const [error, setError] = useState('')

  const user: User = useAppSelector(state => state.auth.user)
  const router = useRouter()

  useEffect(() => {
    if (user.exists) {
      router.push('/')
    }
  }, [router, user.exists])

  interface FormData {
    email: string
    password: string
  }

  const [errors, setErrors] = useState<FormData>({
    email: '',
    password: ''
  })

  const dispatch = useAppDispatch()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    let isValid = true

    const passwordPattern = /^[a-zA-Z0-9]{6,20}$/
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

    if (!emailPattern.test(email)) {
      isValid = false
      setErrors(prevErrors => ({
        ...prevErrors,
        email: 'Invalid email address'
      }))
    }

    if (!passwordPattern.test(password)) {
      isValid = false
      setErrors(prevErrors => ({
        ...prevErrors,
        password: 'Password must be 6 to 20 alphanumeric characters'
      }))
    }

    if (isValid) {
      const result = await login(email, password)

      if (result.action_login.token == '') {
        setError('Your email or password is incorrect, please try again.')
        setEmail('')
        setPassword('')
        setErrors({ email: '', password: '' })
      }
      if (result.action_login.message == '') {
        if (checked) {
          const token = result.action_login.token
          Cookies.set('token', token, { expires: 30 })
        }

        dispatch(
          loginHandle({ exists: true, token: result.action_login.token })
        )
        router.push('/')
      }
    }
  }

  return (
    <div>
      <Head>
        <title>Login | Product Catalog</title>
      </Head>

      <section className="h-screen">
        <div className="flex min-h-full">
          <div className="relative hidden w-0 flex-1 lg:block">
            <img
              className="absolute inset-0 h-full w-full object-cover"
              src="https://s3-alpha-sig.figma.com/img/e481/cdea/66f3916ec341be3dea98c07eb554c77b?Expires=1676246400&Signature=DHmBOZM9-6~LfKbvREuE5fhSg3nIvP18U4ZfaDonhaOjVQex04-EmtlzZxoIwuhWVOddNL-pB1qR5tmuwzEjWTbB7N~NsEfQoR0UiIhsXTOPRP1KUx74fbjCV53DSiBkgJt4WBGvG~cU9SPf5IWgLLJD4nfYQly~p-ZFZrolCg45a2OY~Ge78t8TcOsfmYAstU5k9oZnYO01SJ-1cumfWhjdNra~OUBw-OiyfskANTXVbMTzLl-UCiOMsEi2bDCuxnr3CW~NZWooQouvlS-Nigut0lWzKkxrXmkNIwByUAsw4PjR39bOZr23sAVb85yDcaZau1XH~~nbkWCIjFRsbw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              alt=""
            />
          </div>
          <div className="flex justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-48">
            <div className="mx-auto w-full max-w-sm lg:w-96">
              <div className="flex justify-center">
                <Image src={logo} alt="" />
              </div>
              <div className="mt-28">
                <h2 className="font-manrope font-semibold text-2xl leading-[33px] text-[#090937]/60">
                  Welcome back!
                </h2>
                <h1 className="font-manrope font-bold text-3xl leading-[44px] text-[#090937]">
                  Login to your account
                </h1>
              </div>

              <div className="mt-8">
                <div className="mt-6">
                  <form className="space-y-6" onSubmit={handleSubmit}>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Email address
                      </label>
                      <div className="mt-1">
                        <input
                          id="email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          value={email}
                          placeholder="john@email.com"
                          onChange={e => setEmail(e.target.value)}
                          className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                        />
                        {errors.email && (
                          <p className="text-red-600">{errors.email}</p>
                        )}
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label
                        htmlFor="password"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Password
                      </label>
                      <div className="mt-1">
                        <input
                          id="password"
                          name="password"
                          type="password"
                          value={password}
                          autoComplete="current-password"
                          onChange={e => setPassword(e.target.value)}
                          className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                        />
                        {errors.password && (
                          <p className="text-red-600">{errors.password}</p>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <input
                          id="remember-me"
                          name="remember-me"
                          type="checkbox"
                          checked={checked}
                          onChange={e => setChecked(e.target.checked)}
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                        <label
                          htmlFor="remember-me"
                          className="ml-2 block text-sm text-gray-900"
                        >
                          Remember me
                        </label>
                      </div>
                    </div>

                    <div>
                      <button
                        type="submit"
                        className="flex w-full justify-center rounded-md border border-transparent bg-[#EF6B4A] py-2 px-4 text-sm font-medium text-white shadow-sm"
                      >
                        Login
                      </button>
                      {error && <p className="text-red-600">{error}</p>}
                    </div>
                    <div>
                      <Link
                        href="/register"
                        className="flex w-full justify-center rounded-md border border-[#6251DD] bg-white py-2 px-4 text-sm font-medium text-[#6251DD] shadow-sm"
                      >
                        Register
                      </Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Login
