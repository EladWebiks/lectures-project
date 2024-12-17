import { FC, Suspense, lazy } from "react";
import "./GalleryPage.css";

// Lazy load the components
const ImageGallery = lazy(() => import("../../Components/ImageGalley/ImageGallery"));
const Carousel = lazy(() => import("../../Components/Carousel/Carousel"));
const CarouselItem = lazy(() => import("../../Components/CarouselItem/CarouselItem"));

const arr = [1, 2, 3, 4];

const GalleryPage: FC = () => {
  return (
    <div className="GalleryPage page">
      {/* Suspense wrapper for lazy-loaded components */}
      <Suspense fallback={<div>Loading gallery...</div>}>
        <ImageGallery />
      </Suspense>
      <div style={{ maxWidth: "500px", margin: "0 auto" }}>
        <Suspense fallback={<div>Loading carousel...</div>}>
          <Carousel
            items={arr.map((item) => (
              <Suspense key={item} fallback={<div>Loading item...</div>}>
                <CarouselItem index={item} />
              </Suspense>
            ))}
          />
        </Suspense>
      </div>
    </div>
  );
};

export default GalleryPage;
