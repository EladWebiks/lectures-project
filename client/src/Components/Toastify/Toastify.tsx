import { useEffect } from 'react';
import { Slide, ToastContainer, toast } from 'react-toastify';
import { useMyContext } from '../../Context';

const Toastify= () => {
    const {toastData, setToastData} = useMyContext();
    const settings:any = {
        position: "top-center",
        autoClose: 2400,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Slide,
        }
    useEffect(() => {
      if(toastData?.type =="success")
      {
      toast.success(toastData?.content, settings);
        setToastData(null)
      }
      if(toastData?.type =="info")
      {
      toast.info(toastData?.content, settings);
        setToastData(null)
      }
        if(toastData?.type == "error")
        {
          toast.error(toastData?.content, settings);
            setToastData(null)
        }
        
    },[toastData]);
    return (
        <ToastContainer/>
    )
}
export default Toastify