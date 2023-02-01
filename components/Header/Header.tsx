import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import headerLogo from '../../public/headerlogo.svg'
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'

const Header: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Header</title>
      </Head>
      <div className="mx-auto max-w-screen-2xl h-[120px] px-4 sm:px-6 lg:px-8 grid content-center">
        <div className="relative flex justify-between lg:gap-8 xl:grid xl:grid-cols-12">
          <div className="flex md:absolute md:inset-y-0 md:left-0 lg:static xl:col-span-2 items-center">
            <Link href="/">
              <Image src={headerLogo} alt="" />
            </Link>
          </div>
          <div className="min-w-0 flex-1 md:px-8 lg:px-0 xl:col-span-6">
            <div className="flex items-center px-6 py-4 md:mx-auto md:max-w-3xl lg:mx-0 lg:max-w-none xl:px-0">
              <div className="w-full">
                <label htmlFor="search" className="sr-only">
                  Search
                </label>
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <MagnifyingGlassIcon
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </div>
                  <input
                    id="search"
                    name="search"
                    className="block w-full rounded-md border bg-[#F4F4FF] border-gray-300  py-2 pl-10 pr-3 text-sm placeholder-gray-500 focus:border-indigo-500 focus:text-gray-900 focus:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
                    placeholder="Search"
                    type="search"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="hidden lg:flex lg:items-center lg:justify-end xl:col-span-4">
            <a
              href="#"
              className="ml-5 flex-shrink-0 rounded border bg-[#F4F4FF] p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.5714 6.44444C16.5714 8.89904 14.5247 10.8889 12 10.8889C9.47527 10.8889 7.42857 8.89904 7.42857 6.44444C7.42857 3.98985 9.47527 2 12 2C14.5247 2 16.5714 3.98985 16.5714 6.44444Z"
                  stroke="#090937"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12 14.2222C7.58172 14.2222 4 17.7045 4 22H20C20 17.7045 16.4183 14.2222 12 14.2222Z"
                  stroke="#090937"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </a>
            <button className="ml-5 flex-shrink-0 rounded-md bg-[#F4F4FF] p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
              <svg
                width="25"
                height="23"
                viewBox="0 0 25 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.4275 3.52276L21.4267 3.52199C20.8466 2.95726 20.1622 2.50814 19.4106 2.19935L19.4093 2.19882C18.6296 1.87717 17.793 1.71244 16.9482 1.71437L16.9459 1.71438C15.7578 1.71437 14.6009 2.03737 13.5969 2.64555L13.5969 2.64556C13.3567 2.79106 13.1293 2.95038 12.9143 3.12352L12.287 3.62874L11.6598 3.12352C11.4448 2.95038 11.2174 2.79106 10.9772 2.64556L10.9771 2.64555C9.97317 2.03737 8.81627 1.71437 7.62815 1.71437C6.77087 1.71437 5.94491 1.877 5.16469 2.19882L5.16361 2.19927C4.4091 2.50946 3.73052 2.95476 3.14698 3.52229L3.14562 3.52361C2.56728 4.08394 2.10566 4.75114 1.78659 5.48719L21.4275 3.52276ZM21.4275 3.52276C22.0055 4.08412 22.4674 4.75159 22.7877 5.48765M21.4275 3.52276L22.7877 5.48765M22.7877 5.48765C23.1195 6.25354 23.288 7.06336 23.2856 7.89774V7.90059C23.2856 8.6813 23.1251 9.51682 22.7885 10.3908L22.7876 10.3931C22.5088 11.1223 22.095 11.8989 21.5536 12.7013C20.6973 13.9689 19.5015 15.3171 17.9873 16.7053C15.4692 19.012 12.9749 20.6061 12.8863 20.6625L12.8861 20.6626L12.2856 21.0451L11.6852 20.6626L11.6773 20.6577L11.6694 20.6528C11.6697 20.653 11.6288 20.6273 11.544 20.572C11.4633 20.5194 11.3492 20.4439 11.2062 20.3473C10.9204 20.154 10.5206 19.8769 10.0446 19.5288C9.09084 18.8316 7.83869 17.8559 6.58438 16.7056L6.58427 16.7055C5.06992 15.3173 3.87398 13.969 3.01763 12.7013L22.7877 5.48765ZM1.28564 7.90059C1.28564 7.06414 1.45461 6.25325 1.78655 5.48727L1.78275 10.3908C1.44615 9.51676 1.28564 8.68127 1.28564 7.90059ZM3.0176 12.7013C2.47759 11.9008 2.0654 11.1234 1.78278 10.3908L3.0176 12.7013Z"
                  stroke="#090937"
                  stroke-width="2"
                />
              </svg>
            </button>
            <button className="ml-5 flex-shrink-0 rounded-md bg-[#F4F4FF] p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 2H4.22222L4.66667 4.22222M6.44444 13.1111H17.5556L22 4.22222H4.66667M6.44444 13.1111L4.66667 4.22222M6.44444 13.1111L3.89679 15.6588C3.19682 16.3587 3.69257 17.5556 4.68246 17.5556H17.5556M17.5556 17.5556C16.3283 17.5556 15.3333 18.5505 15.3333 19.7778C15.3333 21.0051 16.3283 22 17.5556 22C18.7829 22 19.7778 21.0051 19.7778 19.7778C19.7778 18.5505 18.7829 17.5556 17.5556 17.5556ZM8.66667 19.7778C8.66667 21.0051 7.67174 22 6.44444 22C5.21715 22 4.22222 21.0051 4.22222 19.7778C4.22222 18.5505 5.21715 17.5556 6.44444 17.5556C7.67174 17.5556 8.66667 18.5505 8.66667 19.7778Z"
                  stroke="#090937"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
