import benefitOneImg from "@/public/img/pigeon1.png";
import benefitTwoImg from "@/public/img/pigeon2.png";
import {Icon} from "@iconify/react/dist/iconify.js";

const keunggulan = {
  "keunggulan": [
    {
      "fitur": "Pengalaman Mendebarkan",
      "deskripsi": "Setiap balapan memberikan pengalaman mendebarkan dengan kecepatan tinggi dan ketegangan yang memacu adrenalin."
    },
    {
      "fitur": "Komunitas yang Solid",
      "deskripsi": "Bergabunglah dengan komunitas yang solid dan bersemangat, di mana Anda dapat berbagi minat, pengetahuan, dan pengalaman dengan sesama pecinta balap burung merpati."
    },
    {
      "fitur": "Prestasi dan Penghargaan",
      "deskripsi": "Tantang diri Anda sendiri dan raih prestasi tertinggi dalam balap burung merpati. Dapatkan pengakuan atas keahlian dan dedikasi Anda."
    },
    {
      "fitur": "Keterampilan dan Strategi",
      "deskripsi": "Kembangkan keterampilan terbang dan strategi balap yang cerdas. Rasakan sensasi merencanakan dan melaksanakan strategi untuk mencapai kemenangan."
    },
    {
      "fitur": "Koneksi dengan Alam",
      "deskripsi": "Nikmati koneksi yang mendalam dengan alam saat Anda menyaksikan burung merpati melintasi langit biru dalam lomba yang menakjubkan."
    }
  ]
}

const benefitOne = {
  title: "Manfaat yang Didapatkan dalam Balap Burung Merpati",
  desc: "Dengan bergabung dalam dunia balap burung merpati, Anda tidak hanya akan merasakan sensasi luar biasa dalam setiap penerbangan, tetapi juga akan mendapatkan manfaat yang beragam.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Pengalaman Mendebarkan",
      desc: "Setiap balapan memberikan pengalaman mendebarkan dengan kecepatan tinggi dan ketegangan yang memacu adrenalin.",
      icon: <Icon icon="bxs:smile"/>,
    },
    {
      title:"Keterampilan dan Strategi",
      desc:"Kembangkan keterampilan terbang dan strategi balap yang cerdas. Rasakan sensasi merencanakan dan melaksanakan strategi untuk mencapai kemenangan.",
      icon: <Icon icon="mdi:arrow"/>,
    },
    {
      title: "Prestasi dan Penghargaan",
      desc:  "Tantang diri Anda sendiri dan raih prestasi tertinggi dalam balap burung merpati. Dapatkan pengakuan atas keahlian dan dedikasi Anda.",
      icon: <Icon icon="mdi:arrow"/>,
    },
  ],
};

const benefitTwo = {
  title: "Manfaat Lain dari Balap Burung Merpati",
  desc: "Bergabung dalam komunitas ini tidak hanya akan memberikan Anda pengalaman yang memuaskan, tetapi juga memperluas jaringan sosial Anda. Temukan kesempatan untuk bertemu dengan sesama pecinta burung merpati, berbagi pengetahuan, dan merasakan kehangatan persaudaraan yang erat. Dengan memasuki arena balap ini.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Komunitas yang Solid",
      desc: "Bergabunglah dengan komunitas yang solid dan bersemangat, di mana Anda dapat berbagi minat, pengetahuan, dan pengalaman dengan sesama pecinta balap burung merpati.",
      icon: <Icon icon="mdi:arrow"/>,
    },

    {
      title: "Koneksi dengan Alam",
      desc:  "Nikmati koneksi yang mendalam dengan alam saat Anda menyaksikan burung merpati melintasi langit biru dalam lomba yang menakjubkan.",
      icon: <Icon icon="mdi:arrow"/>,
    },
    {
      title:"Kemitraan dengan Pihak Berwenang",
      desc:"Dukungan dan kemitraan yang solid dengan pihak berwenang untuk memastikan bahwa balapan burung merpati berlangsung dengan aman dan bertanggung jawab.",
      icon: <Icon icon="meteocons:horizon-fill"/>,
    },
  ],
};


export {benefitOne, benefitTwo};
