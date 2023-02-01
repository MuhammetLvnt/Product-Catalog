import React, { useState, useEffect } from 'react'
import { getCoverImageByFileName } from '@/services/ProductService'

interface Props {
  fileName: string
  styleClass: string
}

const ImageCom: React.FC<Props> = ({ fileName, styleClass }) => {
  const [imageUrl, setImageUrl] = useState('')
  const getImageUrl = () => {
    getCoverImageByFileName(fileName).then(result =>
      setImageUrl(result.action_product_image.url)
    )
    return
  }
  useEffect(() => {
    getImageUrl()
  }, [])

  return <img src={imageUrl} className={styleClass} />
}

export default ImageCom
