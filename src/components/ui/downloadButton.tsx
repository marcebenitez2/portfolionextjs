// app/components/DownloadButton.jsx
"use client";

import React from "react";

const DownloadButton = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/CVV.pdf'; // Ruta al archivo PDF en la carpeta public
    link.download = 'CVV.pdf'; // Nombre del archivo descargado
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button 
      onClick={handleDownload} 
      className="relative md:top-20 inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
      Descargar CV
    </button>
  );
};

export default DownloadButton;