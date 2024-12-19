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
  fetchUser: ()=>void;
  logOut: () => void
  toastData: toastData | null
  setToastData: React.Dispatch<React.SetStateAction<toastData | null>>
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
  const [toastData, setToastData] = useState<toastData| null>(null);
  const fetchUser = async () => {
    const userData = await InitialFetchUser();
    setUser(userData);
  };
  const logOut = () =>{
    localStorage.setItem("authToken", "");
    setUser(null);
    setToastData({type:"info", content:"Logged out successfully"})
    
  }
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
    toastData
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
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Hats",
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    title: "Honey",
    author: "@arwinneil",
  },
  {
    img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    title: "Basketball",
  },
  {
    img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
    title: "Fern",
  },
  {
    img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
    title: "Mushrooms",
  },
  {
    img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
    title: "Tomato basil",
  },
  {
    img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
    title: "Sea star",
  },
];
