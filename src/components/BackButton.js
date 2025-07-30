<<<<<<< HEAD
"use client";
import { useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa";

function BackButton() {
    const router= useRouter();
  return(
    <button className="flex items-center" onClick={() => router.back()} type="button">
        <FaArrowLeft />
    Back

   </button>
  )

}

export default BackButton;
=======
"use client";
import { useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa";

function BackButton() {
    const router= useRouter();
  return(
    <button className="flex items-center" onClick={() => router.back()} type="button">
        <FaArrowLeft />
    Back

   </button>
  )

}

export default BackButton;
>>>>>>> dff7259d9c648c2ed6ef28607dacf6d55f73aca2
