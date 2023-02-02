import React, { useState } from 'react'
import Head from 'next/head'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'
import { RxDotFilled } from 'react-icons/rx'
import banner from '../img/Banner.png'

const Slider: React.FC = () => {
  const slides = [
    {
      url: ' https://s3-alpha-sig.figma.com/img/cd95/5723/457258a8c4363be0c373157e315e85c1?Expires=1676246400&Signature=f~GpbjmHAaHUmRcYAn8VRqSsYGbA9pRKaAkT67H5bMClle3evSjoXFBGVRyy1QTh1Xz~pyFLwcDlJGUT21IRq23ea0yVeekJzkUIoebL9QN4zGInk-mU~6QsOTV9vc-uPr8KVUl~cmeA0RCNl4uBdZ7Yt~x2qsKGgRi41n7w5DY3EkBFsIX42ifigDILLKxCf-BhG4O3dip6cYwGJKcZQMXRrq-WdiDuzob77C7KeerIZQI-VnWRGzvS5bydhOsma8pPjQaQw-ZvgQSidLO6lrShyhI6eKKHy9MYhqhIOVHc37hNRL9roFEaoPwftLYbFZiQBiDQvSdwTPEeYmnb6g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
    },
    {
      url: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80'
    },
    {
      url: 'https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80'
    },

    {
      url: 'https://images.unsplash.com/photo-1512756290469-ec264b7fbf87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2253&q=80'
    },
    {
      url: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80'
    }
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex)
  }
  return (
    <div>
      <Head>
        <title>Slider</title>
      </Head>
      <div className="w-full  relative group">
        <div
          style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
          className="w-full h-[400px] rounded-2xl bg-center bg-cover duration-500"
        >
          <div className="w-[426px] h-[228px] grid place-content-center ml-20">
            <label className="text-[#F0B861] font-manrope font-bold text-5xl">
              25% discount
            </label>
            <div>
              <label className="text-white font-manrope font-bold text-5xl ">
                all Paulo Coelho books!
              </label>
            </div>
          </div>
        </div>

        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactLeft onClick={prevSlide} size={30} />
        </div>

        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactRight onClick={nextSlide} size={30} />
        </div>
        <div className="flex top-4 justify-center py-2">
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className="text-2xl cursor-pointer"
            >
              <RxDotFilled className="text-[#090937]/60" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Slider
