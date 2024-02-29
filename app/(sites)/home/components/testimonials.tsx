import React from "react";
import Container from "./container";


const testimonialAsset = [
  {
    "name": "Ricky",
    "role": "Pecinta Balap Burung Merpati",
    "comment": "Saya sudah menjadi bagian dari komunitas balap burung merpati ini selama lebih dari lima tahun, dan saya harus katakan, pengalaman ini sungguh luar biasa! Tidak hanya merasakan kegembiraan saat menonton balapan yang mendebarkan, tetapi juga menjadi bagian dari persaudaraan yang erat di antara para pecinta burung merpati. Terima kasih kepada tim yang telah menciptakan platform ini, yang telah memberikan kami tempat untuk berkumpul dan berbagi semangat kami!"
    , 'img': 'http://localhost:3000/img/user1.jpg'
  },
  {
    "name": "Linda",
    "role": "Peserta Baru dalam Balap Burung Merpati",
    "comment": "Saya baru saja memulai petualangan saya dalam dunia balap burung merpati, dan saya tidak bisa lebih bahagia dengan keputusan saya untuk bergabung! Dukungan dan bimbingan dari para sesama anggota sangat luar biasa. Saya merasa seperti telah menemukan keluarga baru di sini. Saya sangat bersemangat untuk terus mengembangkan keterampilan saya dan mencapai prestasi bersama komunitas ini!"

    , 'img': 'http://localhost:3000/img/user2.jpg'
  }
  ,
  {
    "name": "Andi",
    "role": "Juara Balap Burung Merpati",
    "comment": "Sebagai juara dalam beberapa kompetisi balap burung merpati, saya bisa mengatakan bahwa platform ini adalah tempat yang luar biasa untuk mengasah keterampilan dan mengukur kemampuan kita. Saya telah menemukan persaingan yang sehat dan inspiratif di sini, yang telah mendorong saya untuk terus meningkatkan performa saya. Ini bukan hanya tentang menang atau kalah, tetapi tentang semangat bersama untuk mencapai yang terbaik. Saya sangat berterima kasih atas kesempatan ini!"
    , 'img': 'http://localhost:3000/img/user3.jpg'
  }
]
const Testimonials = ({id=''}: { id?: string }) => {
  return (
    <Container id={id}>
      <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
        {testimonialAsset.map(d => <div
            key={d.name}
            className="flex flex-col justify-between w-full h-full   p-5  shadow rounded-xl bg-base-100">
            <div className="lg:col-span-2 xl:col-auto">
              <p className="  leading-normal ">
                {d.comment}
              </p>

              <Avatar
                img={d.img}
                name={d.name}
                title={d.role}
              />
            </div>
          </div>
        )}

      </div>
    </Container>
  );
}

function Avatar({img, title, name}: { name: string, title: string, img: string }) {
  return (
    <div className="flex items-center mt-8 space-x-3">
      <div className="avatar">
        <div className="w-24 rounded-full">
          <img
            src={img}
            alt="Avatar"
          />
        </div>
      </div>
      <div>
        <div className="text-lg font-medium">{name}</div>
        <div className=" ">{title}</div>
      </div>
    </div>
  );
}

function Mark(props: any) {
  return (
    <>
      {" "}
      <mark className="  bg-indigo-100 rounded-md ring-indigo-100 ring-4  ">
        {props.children}
      </mark>
      {" "}
    </>
  );
}

export default Testimonials;
