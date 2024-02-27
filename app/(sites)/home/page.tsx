'use client'
import Head from "next/head";
import Hero from "@/app/(sites)/home/components/hero";
import SectionTitle from "@/app/(sites)/home/components/sectionTitle";
import Benefits from "@/app/(sites)/home/components/benefits";
import Video from "@/app/(sites)/home/components/video";
import Testimonials from "@/app/(sites)/home/components/testimonials";
import Cta from "@/app/(sites)/home/components/cta";
import Footer from "@/app/(sites)/dashboard/components/Footer";
import {benefitOne, benefitTwo} from "@/app/(sites)/home/components/data";

const Home = () => {
  return (
    <div className={'px-5'}>
      <Head>
        <title>Nextly - Free Nextjs & TailwindCSS Landing Page Template</title>
        <meta
          name="description"
          content="Nextly is a free landing page template built with next.js & Tailwind CSS"
        />
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      {/*<Navbar/>*/}
      <Hero/>

      <SectionTitle
        align={''}
        preTitle="Nextly Benefits"
        title="Bergabunglah Bersama Kami dan Rasakan Sensasi Adrenalin di Setiap Penerbangan."
        text={'Jelajahi Komunitas Kami yang Penuh Semangat dan Jadilah Bagian dari Sejarah Balap yang Tak Tergantikan. Siapkan Sayapmu, Segera Bergabung, dan Raihlah Prestasi Terbaik di Arena Balap Burung Merpati!'}
      />


      <Benefits data={benefitOne}/>

      <Benefits imgPos="right" data={benefitTwo}/>

      <SectionTitle
        align={''}
        preTitle="Watch a video"
        title="Learn how to fullfil your needs"
        text={'This section is to highlight a promo or demo video of your product. Analysts says a landing page with video has 3% more conversion rate. So, don&apos;t forget to add one. Just like this.'}
      />

      <Video/>

      <SectionTitle
        align={''}
        preTitle="Testimonials"
        title="Here's what our customers said"
        text={' Testimonails is a great way to increase the brand trust and awareness. Use this section to highlight your popular customers.'}
      />


      <Testimonials/>

      <SectionTitle
        align={''}
        preTitle="FAQ"
        title="Frequently Asked Questions"
        text={'Answer your customers possible questions here, it will increase the conversion rate as well as support or chat requests.'}
      />


      <Cta/>
      <Footer/>
    </div>
  )
}

export default Home;
