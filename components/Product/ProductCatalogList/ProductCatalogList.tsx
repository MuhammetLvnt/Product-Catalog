import React from 'react'
import Head from 'next/head'

const ProductCatalogList: React.FC = () => {
  return (
    <div>
      <Head>
        <title>ProductCatalogList</title>
      </Head>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="flex items-center justify-between space-x-4">
            <h2 className="text-lg font-medium text-gray-900">Best Seller</h2>
            <a
              href="#"
              className="whitespace-nowrap text-sm font-medium text-indigo-600 hover:text-indigo-500"
            >
              View all
              <span aria-hidden="true"> &rarr;</span>
            </a>
          </div>
          <div className="mt-6 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
            {/* // */}
            <div className="group relative">
              <div className=" rounded-lg bg-[#090937]/10 w-80 h-[200px] flex">
                <div className="px-2 py-2">
                  <img className="object-cover object-center w-[120px] h-[180px] rounded-md" />
                </div>
                <div className="h-[180px] grid content-between ml-5 mt-2">
                  <div className="grid grid-rows-2">
                    <h2 className="font-manrope font-semibold text-xl leading-[27px]">
                      title
                    </h2>
                    <label className="font-manrope font-semibold text-base leading-[22px]">
                      yazar ismi
                    </label>
                  </div>
                  <div>
                    <p className="text-[#6251DD] font-manrope font-bold text-2xl leading-[33px]">
                      $15.65
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCatalogList
