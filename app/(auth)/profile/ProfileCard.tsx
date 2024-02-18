import React from 'react';


const dataProfile = {
  name: 'Febrian',
  jabatan: 'PT. Orangenah',
  keterangan: "kerjaan ne mong tura turu paling",
  status: "Active",
  tahunKerja: new Date().toLocaleDateString('id-ID',{dateStyle:'full'}),
}

function ProfileCard() {
  return (
    <div className="bg-white p-3 border-t-4 border-green-400">
      <div className="image overflow-hidden">
        {/*<div className="avatar">*/}

          <img className="h-auto w-full mx-auto rounded"
               src="https://picsum.photos/id/4/200/200"
               alt="asdasda"/>

        {/*</div>*/}

      </div>
      <h1 className="text-gray-900 font-bold text-xl leading-8 my-1">{dataProfile.name}</h1>
      <h3 className="text-gray-600 font-lg text-semibold leading-6">{dataProfile.jabatan}</h3>
      <p className="text-sm text-gray-500 hover:text-gray-600 leading-6">{dataProfile.keterangan}</p>
      <ul
        className="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
        <li className="flex items-center py-3">
          <span>Status</span>
          <span className="ml-auto">
            <span
              className="bg-green-500 py-1 px-2 rounded text-white text-sm">
              {dataProfile.status}
            </span>
          </span>
        </li>
        <li className="flex items-center py-3">
          <span>Member since</span>
          <span className="ml-auto">{dataProfile.tahunKerja}</span>
        </li>
      </ul>
    </div>
  );
}

export default ProfileCard;
