'use client'
import React from 'react';
import {Icon} from "@iconify/react/dist/iconify.js";

function Experience() {
  return (
    <div className="bg-white p-3 shadow-sm rounded-sm">

      <div className="grid grid-cols-2">
        <div>
          <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                                <span className="text-green-500">
                         <Icon icon="mdi:paper-outline"/>
                                </span>
            <span className="tracking-wide">Experience</span>
          </div>
          <ul className="list-inside space-y-2">
            <li>
              <div className="text-teal-600">Owner at Her Company Inc.</div>
              <div className="text-gray-500 text-xs">March 2020 - Now</div>
            </li>
            <li>
              <div className="text-teal-600">Owner at Her Company Inc.</div>
              <div className="text-gray-500 text-xs">March 2020 - Now</div>
            </li>

          </ul>
        </div>
        <div>
          <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
            <span className="text-green-500">
            <Icon icon="simple-line-icons:graduation"/>
            </span>
            <span className="tracking-wide">Education</span>
          </div>
          <ul className="list-inside space-y-2">
            <li>
              <div className="text-teal-600">Masters Degree in Oxford</div>
              <div className="text-gray-500 text-xs">March 2020 - Now</div>
            </li>
            <li>
              <div className="text-teal-600">Bachelors Degreen in LPU</div>
              <div className="text-gray-500 text-xs">March 2020 - Now</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Experience;
