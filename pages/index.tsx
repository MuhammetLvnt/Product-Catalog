import Head from 'next/head'
import { useEffect, useState } from 'react'
import Header from '@/components/Header'
import Slider from '@/components/Slider'
import ProductCatalogList from '@/components/Product/ProductCatalogList'
import { getCategories } from '@/services/ProductService'
import { Category } from '@/types'
import Cookies from 'js-cookie'
import { useAppDispatch, useAppSelector } from '../store'
import { User, login } from '@/store/auth'
import { useRouter } from 'next/router'

export default function Home() {
  const user: User = useAppSelector(state => state.auth.user)
  const dispatch = useAppDispatch()
  const router = useRouter()
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    if (user.exists) {
      setShowContent(true)
    } else {
      const existingToken = Cookies.get('token')
      if (existingToken) {
        dispatch(login({ exists: true, token: existingToken }))
        setShowContent(true)
      } else {
        router.push('/login')
      }
    }
  }, [])

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
        <title>Anasayfa | Product Catalog</title>
        <meta name="description" content="Product Catalog List" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.svg" />
      </Head>

      {showContent && (
        <>
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
      )}
    </>
  )
}
