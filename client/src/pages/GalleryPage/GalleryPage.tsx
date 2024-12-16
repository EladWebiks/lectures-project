import { FC } from 'react'
import ImageGallery from '../../Components/ImageGalley/ImageGallery'
import './GalleryPage.css'

const GalleryPage: FC = () => {
  return (
    <div className='GalleryPage page'>
      <ImageGallery/>
    </div>
  )
}

export default GalleryPage
