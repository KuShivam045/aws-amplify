import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { useEffect } from "react";

const paymentfailure = () => {

  const router=useRouter()
  const pathType = Cookies.get('AsPath')?.split('/')[1];

  const NavigatePath=()=>{
    if(pathType === "par-stepfourth"){
      return window.open(Cookies.get("AsPath"), "_self");
    }
    if(pathType === "checkusereligibility"){
      return window.open(Cookies.get("AsPath"), "_self");
    }
    if(pathType === "clientrequirementdetail"){
      return window.open(Cookies.get("AsPath"), "_self");
    }
    else{
      return window.open(Cookies.get("AsPath"), "_self");
    }
  }

  useEffect(() => {
    // pageViewTracker();
  }, []);
  return (
    <div className="text-center mt-5 mb-5 border h-48 flex flex-col justify-center items-center w-[500px] mx-auto">
      <h1 className="text-4xl font-bold">!OOPs Payment Failed</h1>
      <div>
        <button onClick={() => NavigatePath()} className="text-lg text-blue-600 hover:text-blue-500 mt-6">
          Retry Again
        </button>
      </div>
    </div>
  );
};

export default paymentfailure;
