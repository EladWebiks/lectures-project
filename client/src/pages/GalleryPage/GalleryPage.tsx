import { FC, Suspense, lazy } from "react";
import "./GalleryPage.css";
import NailCareRecommendation from "../../types/recommendations";

// Lazy load the components
const ImageGallery = lazy(() => import("../../Components/ImageGalley/ImageGallery"));
const Carousel = lazy(() => import("../../Components/Carousel/Carousel"));
const CarouselItem = lazy(() => import("../../Components/CarouselItem/CarouselItem"));

const mockRecommandations : NailCareRecommendation[] = [
    {
      username: "מיכל כהן",
      recommendation: "מומלץ להשתמש בקרם לחות לציפורניים כל ערב, זה באמת משפר את המראה והתחושה שלהן!",
      image: "https://via.placeholder.com/150",
    },
    {
      username: "דני לוי",
      recommendation: "חובה להקפיד לשים שכבת בסיס לפני לק כדי להגן על הציפורניים משבירה.",
      image: "https://via.placeholder.com/150",
    },
    {
      username: "שרון ישראלי",
      recommendation: "אני ממליצה להשתמש בשמן קוקוס לטיפוח הציפורניים והעור שמסביב. זה עשה פלאים לציפורניים שלי!",
      image: "https://via.placeholder.com/150",
    },
    {
      username: "יעל אברהם",
      recommendation: "ניסיתי לשייף את הציפורניים בכיוון אחד בלבד וזה עזר למנוע סדקים, אבל זה דורש הרבה זמן.",
      image: "https://via.placeholder.com/150",
    },
    {
      username: "אורן רוזן",
      recommendation: "חשוב לשתות הרבה מים! זה משפיע לא רק על העור, אלא גם על הציפורניים.",
      image: "https://via.placeholder.com/150",
    },
    {
      username: "נועה כהן",
      recommendation: "אני ממליצה לשמור על תזונה מאוזנת עם הרבה ויטמינים - זה שיפר את החוזק של הציפורניים שלי.",
      image: "https://via.placeholder.com/150",
    },
    {
      username: "גיל חן",
      recommendation: "ניסיתי להשתמש בשמן שקדים אבל לא ראיתי הבדל גדול. אולי כדאי לנסות משהו אחר.",
      image: "https://via.placeholder.com/150",
    },
    {
      username: "מיכאל לוי",
      recommendation: "טיפ מצוין הוא לא לחתוך את הקוטיקולה, אלא לדחוף אותה בעדינות אחורה.",
      image: "https://via.placeholder.com/150",
    },
    {
      username: "רחל ברקוביץ",
      recommendation: "חשוב להימנע מכסיסה של הציפורניים, זה עוזר לציפורניים לצמוח בריאות יותר.",
      image: "https://via.placeholder.com/150",
    },
    {
      username: "אילנה ישראלי",
      recommendation: "אני משתמשת בחומר מחזק לציפורניים פעמיים בשבוע וזה עושה עבודה נהדרת.",
      image: "https://via.placeholder.com/150",
    },
  ];
  



const GalleryPage: FC = () => {
  return (
    <div className="GalleryPage page">
      {/* Suspense wrapper for lazy-loaded components */}
      <Suspense fallback={<div>Loading gallery...</div>}>
        <ImageGallery />
      </Suspense>
      <div className="GalleryPage-carousel">
        <Suspense fallback={<div>Loading carousel...</div>}>
          <Carousel
            items={mockRecommandations.map((item,index) => (
              <Suspense key={index} fallback={<div>Loading item...</div>}>
                <CarouselItem item={item} />
              </Suspense>
            ))}
          />
        </Suspense>
      </div>
    </div>
  );
};

export default GalleryPage;
