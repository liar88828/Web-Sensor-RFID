import {IDataOrang} from "@/interface/type";
import {enableCache, Icon} from "@iconify/react";
import React from "react";
import {indonesianPhone} from "@/utils/next/formatIndonesia";


export function TableOrang({data}: { data: IDataOrang[] }) {
  enableCache('local');

  return (
    <table className="table table-zebra table-xs static shadow">
      {/* head */}
      <thead>
      <tr>
        <th>No</th>
        <th>Name</th>
        <th>No HP</th>
        <th>Alamat</th>
        <th></th>
      </tr>
      </thead>


      {/*------------------*/}
      <tbody>
      {/* row 1 */}
      {data.map((d, i) => <tr key={d.id}>
          <td>{i + 1}</td>
          <td>
            <div className="">
              <span className={'font-bold'}>{d.name}</span>
            </div>
            <div className="">
              <span>{d.email}</span>
            </div>
          </td>
          <td className={'text-nowrap'}>{indonesianPhone(d.no_hp)}</td>
          <td><span>{d.alamat}</span></td>

          <th>
            <button className="btn btn-info btn-xs">
              <Icon icon="fluent:apps-list-detail-20-regular"/>
            </button>
          </th>
        </tr>
      )}
      {/*------------------*/}
      </tbody>
    </table>

  );
}
