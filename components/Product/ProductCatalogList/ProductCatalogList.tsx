import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import {
  getProductsByCategoryId,
  getCoverImageByFileName
} from '@/services/ProductService'
import { Product } from '@/types'
import Link from 'next/link'
interface Props {
  title: string
  id: number
}

const ProductCatalogList: React.FC<Props> = ({ title, id }) => {
  const [products, setProducts] = useState<Product[]>([])

  const getProductByCategory = async () => {
    const result = await getProductsByCategoryId(id)

    setProducts(result.product)
  }

  useEffect(() => {
    getProductByCategory()
  }, [])

  return (
    <div>
      <Head>
        <title>ProductCatalogList</title>
      </Head>

      <div className="flex items-center justify-between space-x-4 my-10">
        <h2 className="text-lg font-medium text-gray-900">{title}</h2>
        <Link
          href={`/products/${id}`}
          className="whitespace-nowrap text-sm font-medium text-indigo-600 hover:text-indigo-500"
        >
          View all
          <span aria-hidden="true"> &rarr;</span>
        </Link>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
        {products.map((product, index) => (
          <div className="group relative">
            <div className=" rounded-lg bg-[#090937]/10 w-80 h-[200px] flex">
              <div className="px-2 py-2">
                <img
                  // src={()=>{}}
                  className="object-cover object-center w-[120px] h-[180px] rounded-md"
                />
              </div>
              <div className="h-[180px] grid content-between ml-5 mt-2">
                <div className="grid grid-rows-2">
                  <h2 className="font-manrope font-semibold text-xl leading-[27px]">
                    {product.name}
                  </h2>
                  <label className="font-manrope font-semibold text-base leading-[22px]">
                    {product.author}
                  </label>
                </div>
                <div>
                  <p className="text-[#6251DD] font-manrope font-bold text-2xl leading-[33px]">
                    {product.price}$
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductCatalogList
