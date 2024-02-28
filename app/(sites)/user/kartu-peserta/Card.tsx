import React from 'react';


const data = {
  role: 'PANITIA',
  name: 'Brian',
  sebagai: 'Pemantapan Persiapan Ujian (PPU)',
  rumah: 'SDN NGIJO 01',
  kabupaten: 'KOTA SEMARANG',
  img: 'https://picsum.photos/200/300.jpg',
  tahun: 'Tahun 2023 - 2024'
}

function Card({ref}: { ref: React.RefObject<HTMLDivElement> }) {
  return (
    <div
      ref={ref}
      className="bg-white p-4 w-[600px] rounded-lg shadow-md flex flex-col items-center">
      <div className="bg-info w-full p-4 rounded-t-lg flex justify-center items-center">
        <h1 className="text-white text-3xl font-bold">{data.role}</h1>
      </div>
      <div className="mt-4">
        <h2 className="text-center text-lg font-semibold">{data.sebagai}</h2>
        <p className="text-center text-sm mt-1">{data.tahun}</p>
      </div>
      <div className="mt-4">
        <img
          alt="Ryan"
          className="rounded-lg border-4 border-white"
          height="150"
          src={data.img}
          style={{
            aspectRatio: "150/150",
            objectFit: "cover",
          }}
          width="150"
        />
      </div>
      <div className="mt-4 text-center">
        <h3 className="text-xl font-semibold">{data.name}</h3>
        <p className="text-sm">{data.rumah}</p>
        <p className="text-sm">{data.kabupaten}</p>
      </div>
      <div className="bg-info w-full p-4 rounded-b-lg flex justify-center items-center mt-2">
        <h1 className="text-white text-3xl font-bold">----</h1>
      </div>
    </div>
  );
}

export default Card;
