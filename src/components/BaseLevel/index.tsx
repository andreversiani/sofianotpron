import { useEffect } from 'react'
import './index.css'

interface Props {
  imagePath: string
  children?: any
  title?: string
  imageText?: string
}

export const BaseLevel = ({ children, imagePath, title, imageText = '' }: Props) => {

  useEffect(() => {
    title ? document.title = title: null
  }, [])

  const imgSrc = '/backgrounds/' + imagePath;
  return (
    <div className='base-level'>
      <div className='img-container' style={{ position: 'relative'}}>
        <img className='base-img' src={imgSrc} alt="Descrição da Imagem"/>
        {imageText && <h1 className='image-text'>{imageText}</h1>}
      </div>
      {children}
    </div>
  )
}