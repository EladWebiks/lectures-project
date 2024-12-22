import { ReactNode, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { CircularProgress } from "@mui/material";
import { useMyContext } from "../Context";

const PrivateRoute = ({ component }: { component: ReactNode }) => {
    const navigate = useNavigate();
    const {user} = useMyContext();
    useEffect(() => {
        if (!user) {
            navigate('/');
        }
    }, [])
    return <>
    {user ? component : <CircularProgress color="secondary" />}
    </>;
};

export default PrivateRoute