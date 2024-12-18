import { createTheme } from '@mui/material/styles';

// הסבר לרעיון העיצובי:
// 1. גוון זהב רך (primary) עם נטייה למראה מודרני, לא צהוב מדי ולא "עתיק".
// 2. חום עמוק יותר (secondary) להבלטה של רכיבים מסוימים.
// 3. רקע בהיר-קרמי ל- default, ורקע paper טיפה יותר בהיר.
// 4. שימוש בגוונים כהים לטקסט (primary) לשמירה על ניגודיות טובה ונראות חדה.
// 5. בגזרת הטיפוגרפיה, הוספתי פונטים נפוצים (Roboto, Open Sans, sans-serif) ודאגתי ל- font weight אחיד.

const theme = createTheme({
  palette: {
    primary: {
      main: '#BFA25F', // זהב מודרני, לא צהבהב-מידי ולא כהה מדי
      contrastText: '#FFFFFF', // טקסט לבן מעל הגוון הזהוב
    },
    secondary: {
      main: '#6D4C41', // חום עמוק יותר
      contrastText: '#FFFFFF',
    },
    background: {
      default: '#F9F6EF', // רקע קרמי בהיר, מרגיש נקי ויוקרתי
      paper: '#FFFFFF', // רקע לבן לאלמנטים פנימיים (כרטיסים, מודלים וכו')
    },
    text: {
      primary: '#3E2723', // חום כהה לטקסט ראשי
      secondary: '#BFA25F', // זהב לגוון טקסט משני
    },
  },
  typography: {
    fontFamily: [
      'Roboto',
      'Open Sans',
      'sans-serif',
    ].join(','),
    h1: {
      fontSize: '2.4rem',
      fontWeight: 600,
      color: '#3E2723',
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 600,
      color: '#3E2723',
    },
    h3: {
      fontSize: '1.8rem',
      fontWeight: 500,
      color: '#3E2723',
    },
    body1: {
      fontSize: '1rem',
      fontWeight: 400,
      color: '#3E2723',
    },
    body2: {
      fontSize: '0.9rem',
      fontWeight: 400,
      color: '#6D4C41',
    },
  },
  // ניתן להוסיף פה גם חלק של component overrides במידת הצורך
});

export default theme;