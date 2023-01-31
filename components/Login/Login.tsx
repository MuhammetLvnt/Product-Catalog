import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import logo from '../../public/logo.svg'

const Login: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Login</title>
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
                  <form className="space-y-6">
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
                          placeholder="john@email.com"
                          required
                          className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                        />
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
                          autoComplete="current-password"
                          required
                          className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                        />
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <input
                          id="remember-me"
                          name="remember-me"
                          type="checkbox"
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
                    </div>
                    <div>
                      <button
                        type="submit"
                        className="flex w-full justify-center rounded-md border border-[#6251DD] bg-white py-2 px-4 text-sm font-medium text-[#6251DD] shadow-sm"
                      >
                        Register
                      </button>
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
