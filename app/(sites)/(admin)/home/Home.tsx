'use client'
// import Hero from "@/app/(sites)/home/components/hero";
// import SectionTitle from "@/app/(sites)/home/components/sectionTitle";
// import Benefits from "@/app/(sites)/home/components/benefits";
// import Video from "@/app/(sites)/home/components/video";
// import Testimonials from "@/app/(sites)/home/components/testimonials";
// import Cta from "@/app/(sites)/home/components/cta";
// import Footer from "@/app/(sites)/dashboard/components/Footer";
import {benefitOne, benefitTwo} from "@/app/(sites)/(admin)/home/components/data";
import dynamic from "next/dynamic";
import React from "react";


const Hero = dynamic(
  () => import("@/app/(sites)/(admin)/home/components/hero")
  , {loading: () => <p>Loading...</p>,})

const SectionTitle = dynamic(
  () => import("@/app/(sites)/(admin)/home/components/sectionTitle")
  , {loading: () => <p>Loading...</p>,})

const Benefits = dynamic(
  () => import("@/app/(sites)/(admin)/home/components/benefits")
  , {loading: () => <p>Loading...</p>,})


const Video = dynamic(
  () => import("@/app/(sites)/(admin)/home/components/video")
  , {loading: () => <p>Loading...</p>,})

const Testimonials = dynamic(
  () => import("@/app/(sites)/(admin)/home/components/testimonials")
  , {loading: () => <p>Loading...</p>,})

const Cta = dynamic(
  () => import("@/app/(sites)/(admin)/home/components/cta")
  , {loading: () => <p>Loading...</p>,})

const Footer = dynamic(
  () => import("@/app/(sites)/(admin)/dashboard/components/Footer")
  , {loading: () => <p>Loading...</p>,})


export const Home = () => {
  return (
    <div className={'  bg-white/30  '}>

      <div id={'Benefits'}></div>
      <Hero/>
      <SectionTitle

        align={''}
        preTitle="Nextly Benefits"
        title="Bergabunglah Bersama Kami dan Rasakan Sensasi Adrenalin di Setiap Penerbangan."
        text={'Jelajahi Komunitas Kami yang Penuh Semangat dan Jadilah Bagian dari Sejarah Balap yang Tak Tergantikan. Siapkan Sayapmu, Segera Bergabung, dan Raihlah Prestasi Terbaik di Arena Balap Burung Merpati!'}
      />


      <Benefits data={benefitOne}/>

      <Benefits imgPos="right" data={benefitTwo}/>
      <div id={'Vidio'}></div>
      <SectionTitle
        align={''}
        preTitle="Watch a video"
        title="Learn how to fullfil your needs"
        text={'This section is to highlight a promo or demo video of your product. Analysts says a landing page with video has 3% more conversion rate. So, don&apos;t forget to add one. Just like this.'}
      />

      <Video/>


      <div id={'Testimonials'}></div>
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
