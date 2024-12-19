import React, { createContext, useContext, useEffect, useState } from "react";
import { toastData, UserModel } from "./types/schemas";
import axios from "axios";
import { getUserByToken } from "./constants/uri";

interface MyContextType {
  Links: Record<string, string>;
  image: { img: string; title: string }[];
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  baseUrl: string;
  user: UserModel | null;
  setUser: React.Dispatch<React.SetStateAction<UserModel | null>>;
  fetchUser: () => void;
  logOut: () => void;
  toastData: toastData | null;
  setToastData: React.Dispatch<React.SetStateAction<toastData | null>>;
}

const MyContext = createContext<MyContextType | undefined>(undefined);

export const useMyContext = (): MyContextType => {
  const context = useContext(MyContext);
  if (!context) {
    throw new Error("useMyContext must be used within a MyProvider");
  }
  return context;
};

export const MyProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const baseUrl = import.meta.env.VITE_BURL || "No base url in env";
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState<UserModel | null>(null);
  const [toastData, setToastData] = useState<toastData | null>(null);
  const fetchUser = async () => {
    const userData = await InitialFetchUser();
    setUser(userData);
  };
  const logOut = () => {
    localStorage.setItem("authToken", "");
    setUser(null);
    setToastData({ type: "info", content: "Logged out successfully" });
  };
  useEffect(() => {
    fetchUser();
  }, []);

  const value: MyContextType = {
    Links: {
      "about us": "about",
      gallery: "gallery",
      home: "/",
      "contact us": "contact",
      calendar: "calendar",
    },
    image: itemData,
    open,
    setOpen,
    baseUrl,
    user,
    setUser,
    fetchUser,
    logOut,
    setToastData,
    toastData,
  };

  return <MyContext.Provider value={value}>{children}</MyContext.Provider>;
};

const InitialFetchUser = async (): Promise<UserModel | null> => {
  const endpoint = import.meta.env.VITE_BURL + getUserByToken;
  const token = localStorage.getItem("authToken");

  try {
    const response = await axios.get(endpoint, {
      headers: {
        Authorization: `Bearer ${token}`, // Fixed the header format
      },
    });

    const user = response.data.user;
    if (user) return user;
    return null;
  } catch (error) {
    console.error("Error fetching user:", error);
    return null;
  }
};

const itemData = [
  {
    img: "https://mountainsidespa.com/wp-content/uploads/2019/07/spa-treatments.jpeg",
    title: "Relaxing Spa Treatments",
  },
  {
    img: "https://media.istockphoto.com/id/921797424/photo/woman-in-mask-on-face-in-spa-beauty-salon.jpg?s=1024x1024&w=is&k=20&c=1n0yAVpOE6DKl1Dhuok0-KVXfttwXEtD-HCKynRxq-4=",
    title: "Woman with Face Mask",
  },
  {
    img: "https://media.istockphoto.com/id/692999494/photo/hairdresser-cutting-some-hair-tips.jpg?s=2048x2048&w=is&k=20&c=Ue_ywxHImJPcpvTr2aLzIxB9-m9JfHCMKXETR2pZ16w=",
    title: "Hairdresser at Work",
  },
  {
    img: "https://media.istockphoto.com/id/1321856038/photo/portrait-beautiful-young-woman-with-clean-fresh-skin.jpg?s=2048x2048&w=is&k=20&c=Ut1WZnvwAzIQun1Q-Ih0wCNs5DCaDyDWz9JM0T6uIkU=",
    title: "Clean and Fresh Skin",
  },
  {
    img: "https://media.istockphoto.com/id/1167657805/photo/closeup-of-beautician-applying-nail-at-salon.jpg?s=2048x2048&w=is&k=20&c=Mm9_dsA0oZ7PAX6HxK7rwivI30DQSpZAOnx7I6YN2V8=",
    title: "Nail Care at Salon",
  },
  {
    img: "https://media.istockphoto.com/id/1095594306/photo/nice-young-businesswoman-talking-on-the-phone.jpg?s=2048x2048&w=is&k=20&c=DHXEx0K02lA4C0J5sBQIcThV-KQu8LlGXktFTAapJD4=",
    title: "Businesswoman Talking on Phone",
  },
  {
    img: "https://media.istockphoto.com/id/1221061311/photo/manicurist-massaging-the-fingers-of-a-brunette.jpg?s=2048x2048&w=is&k=20&c=Ycf7Gadlg8nKodCMDkQXDkqab3qmNNX7geuRp_PSpRI=",
    title: "Manicurist Massaging Fingers",
  },
  {
    img: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNvc21ldGljfGVufDB8fDB8fHww",
    title: "Cosmetic Products",
  },
];
