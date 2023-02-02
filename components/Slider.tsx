import React, { useState } from 'react'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'
import { RxDotFilled } from 'react-icons/rx'

const Slider: React.FC = () => {
  const slides = [
    {
      url: 'https://s3-alpha-sig.figma.com/img/cd95/5723/457258a8c4363be0c373157e315e85c1?Expires=1676246400&Signature=f~GpbjmHAaHUmRcYAn8VRqSsYGbA9pRKaAkT67H5bMClle3evSjoXFBGVRyy1QTh1Xz~pyFLwcDlJGUT21IRq23ea0yVeekJzkUIoebL9QN4zGInk-mU~6QsOTV9vc-uPr8KVUl~cmeA0RCNl4uBdZ7Yt~x2qsKGgRi41n7w5DY3EkBFsIX42ifigDILLKxCf-BhG4O3dip6cYwGJKcZQMXRrq-WdiDuzob77C7KeerIZQI-VnWRGzvS5bydhOsma8pPjQaQw-ZvgQSidLO6lrShyhI6eKKHy9MYhqhIOVHc37hNRL9roFEaoPwftLYbFZiQBiDQvSdwTPEeYmnb6g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
    },
    {
      url: 'https://s3.piton.com.tr/assignment/mutlu-olma-sanati.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=P%21T10.MINIO%2F20230202%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230202T104324Z&X-Amz-Expires=600&X-Amz-SignedHeaders=host&X-Amz-Signature=a014949b977de7adea5872efef1c7d26c94f063d22d39560590bd4653486ab67'
    },
    {
      url: 'https://s3.piton.com.tr/assignment/mor-bir-fil-gordum-sanki.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=P%21T10.MINIO%2F20230202%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230202T104251Z&X-Amz-Expires=600&X-Amz-SignedHeaders=host&X-Amz-Signature=ed91b90ee1352b000ed7e09c27ced14724bf0f1f53bb4d320a885e981e610da8'
    },

    {
      url: 'https://s3.piton.com.tr/assignment/dune.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=P%21T10.MINIO%2F20230202%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230202T104157Z&X-Amz-Expires=600&X-Amz-SignedHeaders=host&X-Amz-Signature=1177b4fdde9b468b770bd960190277ef99c53584a48e01c3326ad20ce79f4154'
    },
    {
      url: 'https://s3.piton.com.tr/assignment/kurk-mantolu-madonna.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=P%21T10.MINIO%2F20230202%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230202T104453Z&X-Amz-Expires=600&X-Amz-SignedHeaders=host&X-Amz-Signature=de2520504a945527415b46b038806ad43b0bbdfd923a4d45fde425f7fa8d951a'
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
              <RxDotFilled
                className={`${
                  currentIndex == slideIndex
                    ? 'text-orange-600'
                    : 'text-[#090937]/60'
                }`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Slider
