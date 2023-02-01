import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import Header from '@/components/Header'
import {
  getProductsByCategoryId,
  getCategories
} from '@/services/ProductService'
import { useRouter } from 'next/router'
import { Category, Product } from '@/types'
import Link from 'next/link'
import ImageCom from '@/components/Image'

const ProductList: React.FC = () => {
  const router = useRouter()
  const id = parseInt(router.query.id as string, 10)
  const [productDetails, setProductDetails] = useState<Product[]>([])
  const [category, setCategory] = useState<Category>({ name: '', id })

  const getProductsCategoryId = async () => {
    const result = await getProductsByCategoryId(id)

    setProductDetails(result.product)
  }
  const getCategoryName = async () => {
    const result = await getCategories()

    const categoryName = result.category.find((res: Category) => res.id == id)

    setCategory(categoryName)
  }

  useEffect(() => {
    getProductsCategoryId()
    getCategoryName()
  }, [])

  return (
    <div>
      <Head>
        <title>ProductList</title>
      </Head>
      <div>
        <Header />
        <div className="mx-auto max-w-screen-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-screen-2xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-5">
            <button className="mr-3" onClick={() => router.push('/')}>
              <svg
                width="10"
                height="17"
                viewBox="0 0 10 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.60425 16.0833L0.583414 9.08332C0.500081 8.99999 0.441192 8.90971 0.406748 8.81249C0.371748 8.71527 0.354248 8.6111 0.354248 8.49999C0.354248 8.38888 0.371748 8.28471 0.406748 8.18749C0.441192 8.09027 0.500081 7.99999 0.583414 7.91666L7.60425 0.895823C7.79869 0.701379 8.04175 0.604156 8.33341 0.604156C8.62508 0.604156 8.87508 0.708323 9.08341 0.916656C9.29175 1.12499 9.39591 1.36805 9.39591 1.64582C9.39591 1.9236 9.29175 2.16666 9.08341 2.37499L2.95841 8.49999L9.08341 14.625C9.27786 14.8194 9.37508 15.0589 9.37508 15.3433C9.37508 15.6283 9.27091 15.875 9.06258 16.0833C8.85425 16.2917 8.61119 16.3958 8.33341 16.3958C8.05564 16.3958 7.81258 16.2917 7.60425 16.0833Z"
                  fill="#090937"
                />
              </svg>
            </button>
            <span>{category.name}</span>
          </h2>

          <div className="grid grid-cols-4 gap-4">
            {productDetails.map(productDetail => (
              <Link href={`/product/detail/${productDetail.id}`}>
                <div className="w-[300px] h-[433px] border grid content-center bg-[#F4F4FF]">
                  <div className=" grid place-items-center">
                    <ImageCom
                      fileName={productDetail.cover}
                      styleClass="w-[200px] h-[300px]"
                    />
                  </div>
                  <div className="mx-5 mt-5">
                    <div>
                      <label>{productDetail.name}</label>
                      <div className="flex justify-between">
                        <div>
                          <label className="h-[22px]">
                            {productDetail.author}
                          </label>
                        </div>
                        <div>
                          <label className="w-[82px] h-[33px] text-[#6251DD] font-manrope font-bold">
                            {productDetail.price} $
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductList
