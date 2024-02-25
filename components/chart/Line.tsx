'use client'

import React from 'react';
import {
  CategoryScale,
  Chart as ChartJS,
  type ChartOptions,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from 'chart.js';
import {Line} from 'react-chartjs-2';
import {LineChart} from "@/interface/type";


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options: ChartOptions<'line'> = {
  responsive: true,
  maintainAspectRatio: false,

  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Sensor Masuk',
    },
  },

  // scales: {
  //
  //   r: {
  //     ticks: {
  //       backdropPadding: {
  //         height:20
  //       }
  //     }
  //   }
  // }

};

const labels = [
  "Januari",
  "Februari",
  "Maret",
  "April",
  "Mei",
  "Juni",
  "Juli",
  "Agustus",
  "September",
  "Oktober",
  "November",
  "Desember"
]


export function Lines({data}: { data: LineChart[] }) {
  const datOption = {
    labels: data.map(d => d.month),
    datasets: [
      // {
      //   label: 'Belum Masuk',
      //   data: data.map(() => faker.number.int({min: -100, max: 100})),
      //   borderColor: 'rgb(255, 99, 132)',
      //   backgroundColor: 'rgba(255, 99, 132, 0.5)',
      // },
      {
        label: 'Sudah Masuk',
        data: data.map((d) => d.record_count),
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };
  return <Line options={options}
               data={datOption}
               width={100}
               height={100}
  />;
}
