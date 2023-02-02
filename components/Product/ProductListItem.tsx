import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import Header from '@/components/Header'
import {
  getProductById,
  getCoverImageByFileName
} from '@/services/ProductService'
import { useRouter } from 'next/router'
import { Product } from '@/types'

const ProductListItem: React.FC = () => {
  const router = useRouter()

  const id = router.query.id as string
  const lastPart: string[] = id?.split('-')?.slice(-1)
  console.log(typeof lastPart, lastPart)

  const [productDetail, setProductDetail] = useState<Product>()
  const [imgUrl, setImgUrl] = useState('')

  const getProduct = () => {
    const finalPart: string = lastPart[0] ?? ''
    console.log(finalPart)
    getProductById(parseInt(finalPart))
      .then(result => {
        if (!result.product_by_pk) {
          router.push('/404')
        } else {
          getCoverImageByFileName(result.product_by_pk.cover)
            .then(image => {
              setImgUrl(image.action_product_image.url)
            })
            .catch(err => router.push('/404'))

          setProductDetail(result.product_by_pk)
        }
      })
      .catch(err => router.push('/404'))
  }
  const handleGoBack = () => {
    router.back()
  }

  useEffect(() => {
    getProduct()
  }, [])

  return (
    <div>
      <Head>
        <title>ProductListItem</title>
      </Head>
      <Header />

      <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8 mt-10">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">
          <button onClick={handleGoBack} className="mr-3">
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
          Book Details
        </h1>

        <div className="mt-8">
          <h2 className="sr-only">Products purchased</h2>

          <div className="space-y-24">
            <div className="grid grid-cols-1 text-sm sm:grid-cols-12 sm:grid-rows-1 sm:gap-x-6 md:gap-x-8 lg:gap-x-8">
              <div className="sm:col-span-4 md:col-span-5 md:row-span-2 md:row-end-2 w-[420px] h-[570px] grid place-items-center border bg-[#F4F4FF]">
                <img
                  src={imgUrl}
                  className="w-[350px] h-[450px] items-center"
                />
              </div>
              <div className="mt-6 sm:col-span-7 sm:mt-0 md:row-end-1  mb-[60px]">
                <div className="flex justify-between">
                  <h3 className="text-lg font-medium text-gray-900">
                    <h3 className="text-black text-[40px] leading-[55px] font-semibold font-manrope">
                      {productDetail?.name}
                    </h3>
                  </h3>
                  <span>
                    <svg
                      width="22"
                      height="20"
                      viewBox="0 0 22 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18.8149 3.27196L18.8143 3.27137C18.3094 2.77993 17.7139 2.38913 17.0599 2.12046L17.059 2.12006C16.3806 1.84022 15.6527 1.69691 14.9178 1.69859L14.9161 1.6986C13.8828 1.69859 12.8764 1.9795 12.0029 2.50866L12.0029 2.50867C11.7939 2.63526 11.5959 2.77394 11.4087 2.9247L10.9383 3.30362L10.4678 2.9247C10.2807 2.77394 10.0827 2.63526 9.87371 2.50867L9.87369 2.50866C9.00016 1.9795 7.99377 1.69859 6.96051 1.69859C6.21517 1.69859 5.49649 1.84004 4.8176 2.12006L4.81679 2.1204C4.16035 2.39027 3.5698 2.7778 3.06207 3.2716L3.06104 3.27259C2.5575 3.76046 2.15553 4.34141 1.87767 4.98239L18.8149 3.27196ZM18.8149 3.27196C19.318 3.76058 19.7201 4.3416 19.9989 4.98239M18.8149 3.27196L19.3374 2.73394C19.9107 3.29072 20.3691 3.95315 20.6871 4.68416M20.6871 4.68416L19.9989 4.98239M20.6871 4.68416C21.0168 5.44494 21.1852 6.25282 21.1828 7.08425C21.1828 7.86858 21.0215 8.68588 20.7013 9.51732L20.6871 4.68416ZM19.9989 4.98239C20.288 5.64941 20.4349 6.35511 20.4328 7.08211V7.08425C20.4328 7.76514 20.2928 8.49116 20.0014 9.24776L20.0008 9.24947C19.7594 9.88083 19.402 10.5509 18.9363 11.2411L19.9989 4.98239ZM18.9363 11.2412C18.1995 12.3319 17.1725 13.4891 15.8753 14.6783C13.7188 16.6538 11.5834 18.0186 11.5057 18.0681L11.5056 18.0682L10.9449 18.4253C10.9448 18.4253 10.9447 18.4253 10.9447 18.4254C10.9434 18.4261 10.941 18.4271 10.9371 18.4271C10.9332 18.4271 10.9308 18.4261 10.9295 18.4254C10.9295 18.4253 10.9294 18.4253 10.9294 18.4253L10.3687 18.0682L10.3687 18.0681L10.3569 18.0608C10.3572 18.061 10.357 18.0609 10.3562 18.0604C10.3536 18.0588 10.345 18.0533 10.3287 18.0429C10.3092 18.0305 10.2819 18.0128 10.2472 17.9902C10.1778 17.9449 10.0799 17.8802 9.95738 17.7974C9.71237 17.6317 9.37002 17.3943 8.96239 17.0964C8.14599 16.4995 7.07371 15.664 5.99916 14.6786L5.99908 14.6785C4.70167 13.4891 3.67457 12.3317 2.9377 11.2409C2.4731 10.5521 2.11732 9.88152 1.8728 9.24776C1.58141 8.49116 1.44141 7.76514 1.44141 7.08425C1.44141 6.35582 1.5886 5.64943 1.87765 4.98245L18.9363 11.2412Z"
                        stroke="#6251DD"
                        stroke-width="1.5"
                      />
                    </svg>
                  </span>
                </div>

                <p className="mt-3 text-black/60 font-manrope font-semibold leading-[44px] text-[32px]">
                  {productDetail?.author}
                </p>
              </div>
              <div className="sm:col-span-12 md:col-span-7">
                <div>
                  <h3 className="text-[#090937] font-manrope font-bold leading-[33px] text-2xl mb-[10px]">
                    Summary
                  </h3>
                  <p className="leading-[30px] font-manrope text-xl text-[#090937]/60">
                    {productDetail?.description}.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-end mt-[130px] mb-10">
            <button
              type="button"
              className="items-center justify-between flex rounded-md border bg-[#EF6B4A] w-[400px] h-[60px] px-6 py-3 text-base font-medium text-white shadow-sm"
            >
              <span
                className="w-20 h-[27px] font-manrope font-bold leading-[27px] text-xl"
                aria-hidden="true"
              >
                {productDetail?.price} $
              </span>
              <span className="w-[82px] h-[27px] font-manrope font-semibold leading-[27px] text-xl">
                Buy now
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductListItem
