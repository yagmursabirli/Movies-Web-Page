// src/components/Loading.jsx
import React from 'react';
import { ClipLoader } from "react-spinners";
function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-home">
      <div className="text-white text-2xl font-bold">
        <ClipLoader color='#fff' size={80}/>
      </div>
    </div>
  );
}
export default Loading;