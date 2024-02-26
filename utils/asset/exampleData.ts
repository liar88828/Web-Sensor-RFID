import {ISensor} from "@/interface/type";


const dataOrang = [
  {
    "id": "asdas",
    "name": "Willis Conroy",
    "alamat": "Brand",
    "no_hp": "501-028-967"
  },
  {
    "id": "10asdasa8862",
    "name": "Jean Sipes",
    "alamat": "Web",
    "no_hp": "501-050-298"
  },
  {
    "id": "asdasdaas",
    "name": "Duane Lubowitz V",
    "alamat": "Paradigm",
    "no_hp": "501-584-596"
  },
  {
    "id": "4637adfasd33",
    "name": "Sonja Hirthe-Klocko V",
    "alamat": "Response",
    "no_hp": "501-537-961"
  },
  {
    "id": "381asdfa324",
    "name": "Percy Christiansen",
    "alamat": "Communications",
    "no_hp": "501-600-762"
  },
  {
    "id": "694asdf907",
    "name": "Julius Kovacek",
    "alamat": "Interactions",
    "no_hp": "501-139-005"
  },
  {
    "id": "2333asdf32",
    "name": "Dr. Leon King",
    "alamat": "Assurance",
    "no_hp": "501-569-701"
  },
  {
    "id": "asddfghf",
    "name": "Levi O'Connell",
    "alamat": "Web",
    "no_hp": "501-986-160"
  },
  {
    "id": "343asfgfdsg112",
    "name": "Alicia Friesen DDS",
    "alamat": "Accounts",
    "no_hp": "501-696-336"
  },
  {
    "id": "950sdfg853",
    "name": "Edmond Zulauf",
    "alamat": "Data",
    "no_hp": "501-857-916"
  },
  {
    "id": "950dsgf85123",
    "name": "Edmond Zulauf",
    "alamat": "Data",
    "no_hp": "501-857-916"
  },
  {
    "id": "950sdfg8123153",
    "name": "Edmond Zulauf",
    "alamat": "Data",
    "no_hp": "501-857-916"
  },
  {
    "id": "123sdfg1",
    "name": "Edmond Zulauf",
    "alamat": "Data",
    "no_hp": "501-857-916"
  },
  {
    "id": "3sdf356g2",
    "name": "Edmond Zulauf",
    "alamat": "Data",
    "no_hp": "501-857-916"
  },
  {
    "id": "12346531",
    "name": "Edmond Zulauf",
    "alamat": "Data",
    "no_hp": "501-857-916"
  },
  {
    "id": "95012353",
    "name": "Edmond Zulauf",
    "alamat": "Data",
    "no_hp": "501-857-916"
  }
]


const dataRecord =
  [
    {
      "id": "164341",
      "jamMasuk": "Sun Jun 16 2024 19:53:03 GMT+0700 (Indochina Time)",
      "tanggal": "2023-06-08T18:25:35.932Z",
      "lokasi": "Tulsa"
    },
    {
      "id": "764999",
      "jamMasuk": "Fri Jul 28 2023 01:13:19 GMT+0700 (Indochina Time)",
      "tanggal": "2024-05-25T20:34:05.078Z",
      "lokasi": "Andalas"
    },
    {
      "id": "239781",
      "jamMasuk": "Sat Aug 12 2023 06:03:49 GMT+0700 (Indochina Time)",
      "tanggal": "2023-04-01T16:42:06.022Z",
      "lokasi": "North Saul"
    },
    {
      "id": "647521",
      "jamMasuk": "Wed Oct 23 2024 19:03:35 GMT+0700 (Indochina Time)",
      "tanggal": "2024-02-17T19:39:32.749Z",
      "lokasi": "West Rickiefort"
    },
    {
      "id": "269891",
      "jamMasuk": "Sun Jul 02 2023 15:11:13 GMT+0700 (Indochina Time)",
      "tanggal": "2023-09-16T21:58:51.622Z",
      "lokasi": "Dickifort"
    },
    {
      "id": "851682",
      "jamMasuk": "Wed Jan 10 2024 19:13:53 GMT+0700 (Indochina Time)",
      "tanggal": "2023-09-19T16:27:21.314Z",
      "lokasi": "Anaborough"
    },
    {
      "id": "502109",
      "jamMasuk": "Thu May 02 2024 19:08:02 GMT+0700 (Indochina Time)",
      "tanggal": "2023-05-09T07:19:58.310Z",
      "lokasi": "Felicitystad"
    },
    {
      "id": "262531",
      "jamMasuk": "Fri Nov 08 2024 03:57:27 GMT+0700 (Indochina Time)",
      "tanggal": "2024-05-05T08:19:40.291Z",
      "lokasi": "New Karinefield"
    },
    {
      "id": "16543241",
      "jamMasuk": "Sun Jun 16 2024 19:53:03 GMT+0700 (Indochina Time)",
      "tanggal": "2023-06-08T18:25:35.932Z",
      "lokasi": "Tulsa"
    },
    {
      "id": "76442999",
      "jamMasuk": "Fri Jul 28 2023 01:13:19 GMT+0700 (Indochina Time)",
      "tanggal": "2024-05-25T20:34:05.078Z",
      "lokasi": "Annandale"
    },
    {
      "id": "23937281",
      "jamMasuk": "Sat Aug 12 2023 06:03:49 GMT+0700 (Indochina Time)",
      "tanggal": "2023-04-01T16:42:06.022Z",
      "lokasi": "North Saul"
    },
    {
      "id": "64745421",
      "jamMasuk": "Wed Oct 23 2024 19:03:35 GMT+0700 (Indochina Time)",
      "tanggal": "2024-02-17T19:39:32.749Z",
      "lokasi": "West Rickiefort"
    },
    {
      "id": "26923891",
      "jamMasuk": "Sun Jul 02 2023 15:11:13 GMT+0700 (Indochina Time)",
      "tanggal": "2023-09-16T21:58:51.622Z",
      "lokasi": "Dickifort"
    },
    {
      "id": "38516482",
      "jamMasuk": "Wed Jan 10 2024 19:13:53 GMT+0700 (Indochina Time)",
      "tanggal": "2023-09-19T16:27:21.314Z",
      "lokasi": "Anaborough"
    },
    {
      "id": "50521509",
      "jamMasuk": "Thu May 02 2024 19:08:02 GMT+0700 (Indochina Time)",
      "tanggal": "2023-05-09T07:19:58.310Z",
      "lokasi": "Felicitystad"
    },
    {
      "id": "42662531",
      "jamMasuk": "Fri Nov 08 2024 03:57:27 GMT+0700 (Indochina Time)",
      "tanggal": "2024-05-05T08:19:40.291Z",
      "lokasi": "New Karinefield"
    },
    {
      "id": "1643241",
      "jamMasuk": "Sun Jun 16 2024 19:53:03 GMT+0700 (Indochina Time)",
      "tanggal": "2023-06-08T18:25:35.932Z",
      "lokasi": "Tulsa"
    },
    {
      "id": "7642999",
      "jamMasuk": "Fri Jul 28 2023 01:13:19 GMT+0700 (Indochina Time)",
      "tanggal": "2024-05-25T20:34:05.078Z",
      "lokasi": "Annandale"
    },
    {
      "id": "2393781",
      "jamMasuk": "Sat Aug 12 2023 06:03:49 GMT+0700 (Indochina Time)",
      "tanggal": "2023-04-01T16:42:06.022Z",
      "lokasi": "North Saul"
    },
    {
      "id": "6474521",
      "jamMasuk": "Wed Oct 23 2024 19:03:35 GMT+0700 (Indochina Time)",
      "tanggal": "2024-02-17T19:39:32.749Z",
      "lokasi": "West Rickiefort"
    },
    {
      "id": "2692891",
      "jamMasuk": "Sun Jul 02 2023 15:11:13 GMT+0700 (Indochina Time)",
      "tanggal": "2023-09-16T21:58:51.622Z",
      "lokasi": "Dickifort"
    },
    {
      "id": "8516482",
      "jamMasuk": "Wed Jan 10 2024 19:13:53 GMT+0700 (Indochina Time)",
      "tanggal": "2023-09-19T16:27:21.314Z",
      "lokasi": "Anaborough"
    },
    {
      "id": "5021509",
      "jamMasuk": "Thu May 02 2024 19:08:02 GMT+0700 (Indochina Time)",
      "tanggal": "2023-05-09T07:19:58.310Z",
      "lokasi": "Felicitystad"
    },
    {
      "id": "2662531",
      "jamMasuk": "Fri Nov 08 2024 03:57:27 GMT+0700 (Indochina Time)",
      "tanggal": "2024-05-05T08:19:40.291Z",
      "lokasi": "New Karinefield"
    }
  ]
export const exampleDataSensor: ISensor[] = [
  {
    id: '2312312',
    id_anggota: "asdasda",
    rfid: 'cincin burung',
    kode: "1231231",
    status: 'Active',
    warna: "hijau",
  },
  {
    id: '231231',
    id_anggota: "asdasda",
    rfid: 'cincin burung',
    kode: "1231231",
    status: 'Active',
    warna: "hijau",
  }
]

const exampleData = [
  {

    id: '1231231',
    name: 'febrian',
    alamat: "semarang",
    email: 'Mariya@gmail.com',
    no_hp: "0123121231",
    // hewan
    hewan: 'burung hantu',
    warna: "hijau",
    //
    // sensor: '1231231'
  },

  {
    id: '12312231',
    // nama: 'Alif',
    alamat: "Ungaran",
    email: 'Anwar@gmail.com',
    no_hp: "0123121312",
    // hewan
    hewan: 'burung jalak',
    warna: "merah",
    //
    sensor: '1412'
  }, {
    id: '123121',
    nama: 'Alif',
    alamat: "Ungaran",
    email: 'Anwar@gmail.com',
    no_hp: "0123121312",
    // hewan
    hewan: 'burung jalak',
    warna: "merah",
    //
    sensor: '1412'
  }, {
    id: '41342342',
    nama: 'Alif',
    alamat: "Ungaran",
    email: 'Anwar@gmail.com',
    no_hp: "0123121312",
    // hewan
    hewan: 'burung jalak',
    warna: "merah",
    //
    sensor: '1412'
  }, {
    id: '25432',
    nama: 'Alif',
    alamat: "Ungaran",
    email: 'Anwar@gmail.com',
    no_hp: "0123121312",
    // hewan
    hewan: 'burung jalak',
    warna: "merah",
    //
    sensor: '1412'
  }, {
    id: '5234523',
    nama: 'Alif',
    alamat: "Ungaran",
    email: 'Anwar@gmail.com',
    no_hp: "0123121312",
    // hewan
    hewan: 'burung jalak',
    warna: "merah",
    //
    sensor: '1412'
  }, {
    id: '234524',
    nama: 'Alif',
    alamat: "Ungaran",
    email: 'Anwar@gmail.com',
    no_hp: "0123121312",
    // hewan
    hewan: 'burung jalak',
    warna: "merah",
    //
    sensor: '1412'
  }, {
    id: '24523',
    nama: 'Alif',
    alamat: "Ungaran",
    email: 'Anwar@gmail.com',
    no_hp: "0123121312",
    // hewan
    hewan: 'burung jalak',
    warna: "merah",
    //
    sensor: '1412'
  }, {
    id: '23452',
    nama: 'Alif',
    alamat: "Ungaran",
    email: 'Anwar@gmail.com',
    no_hp: "0123121312",
    // hewan
    hewan: 'burung jalak',
    warna: "merah",
    //
    sensor: '1412'
  }, {
    id: '3423',
    nama: 'Alif',
    alamat: "Ungaran",
    email: 'Anwar@gmail.com',
    no_hp: "0123121312",
    // hewan
    hewan: 'burung jalak',
    warna: "merah",
    //
    sensor: '1412'
  }, {
    id: 'asdasdasdafasdf',
    nama: 'Alif',
    alamat: "Ungaran",
    email: 'Anwar@gmail.com',
    no_hp: "0123121312",
    // hewan
    hewan: 'burung jalak',
    warna: "merah",
    //
    sensor: '1412'
  }, {
    id: 'asdasd',
    nama: 'Alif',
    alamat: "Ungaran",
    email: 'Anwar@gmail.com',
    no_hp: "0123121312",
    // hewan
    hewan: 'burung jalak',
    warna: "merah",
    //
    sensor: '1412'
  },
]
