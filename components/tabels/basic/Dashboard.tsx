import {IDataOrang} from "@/interface/type";
import {Icon} from "@iconify/react";
import React from "react";

export function TableOrang({data}: { data: IDataOrang[] }) {
  return (

    <table className="table table-zebra table-xs static">
      {/* head */}
      <thead>
      <tr>
        <th>No</th>
        <th>Name</th>
        <th>Alamat</th>
        <th>No HP</th>
        <th></th>
      </tr>
      </thead>


      {/*------------------*/}
      <tbody>
      {/* row 1 */}
      {data.map((d, i) => <tr key={d.name}>
          <td>{i + 1}</td>
          <td>
            <div className="flex items-center gap-3">
              {/*<div className="avatar">*/}
              {/*  <div className="mask mask-squircle w-12 h-12">*/}
              {/*    <img src="https://picsum.photos/200/300?random=2"/>*/}
              {/*  </div>*/}
              {/*</div>*/}
              <div>
                <div className="font-bold">{d.name}</div>
              </div>
            </div>
          </td>
          <td>
            {d.alamat}
            {/*<br/>*/}
            {/*<span className="badge badge-ghost badge-sm">Desktop Support Technician</span>*/}
          </td>
          <td className={'text-nowrap'}>{d.no_hp}</td>
          <th>
            <button className="btn btn-info btn-xs">

              <Icon icon="fluent:apps-list-detail-20-regular"/>
            </button>
          </th>
        </tr>
      )}
      {/*------------------*/}

      </tbody>

      {/* foot */}
      {/*<tfoot>*/}
      {/*<tr>*/}
      {/*  <th>No</th>*/}
      {/*  <th>Name</th>*/}
      {/*  <th>Alamat</th>*/}
      {/*  <th>No HP</th>*/}
      {/*  <th></th>*/}
      {/*</tr>*/}
      {/*</tfoot>*/}

    </table>

  );
}
