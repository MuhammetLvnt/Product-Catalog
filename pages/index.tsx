import Head from 'next/head'
import { useEffect, useState } from 'react'
import Header from '@/components/Header/Header'
import Slider from '@/components/Slider/Slider'
import ProductCatalogList from '@/components/Product/ProductCatalogList/ProductCatalogList'
import { getCategories } from '@/services/ProductService'
import { Category } from '@/types'

export default function Home() {
  const [categories, setCategories] = useState<Category[]>([])
  const getAllCategories = async () => {
    const result = await getCategories()

    setCategories(result.category)
  }
  useEffect(() => {
    getAllCategories()
  }, [])

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <div className="mx-auto max-w-screen-2xl px-4 sm:py-5 sm:px-6 lg:max-w-screen-2xl lg:px-8">
        <Slider />
        {categories.map((category, index) => (
          <ProductCatalogList
            key={index}
            title={category.name}
            id={category.id}
          />
        ))}
      </div>
    </>
  )
}
