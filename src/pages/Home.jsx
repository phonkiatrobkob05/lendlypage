import React, { useRef, useState } from 'react';
// import pages
import Navbar from "../components/Navbar";
import Card from "../components/Card";
// Import Swiper.js
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import '/src/styles/swiper.css';
function Home() {
    return (
        <div className="flex flex-col min-h-screen font-[Inter]">
            {/* Nav */}
            <Navbar />

            {/* Main Content with Top Padding */}
            <main className="pt-4">
                {/* Section 1 */}
                <section id="Header" className="flex flex-col items-center py-18 bg-white">
                    <div className="text-center flex flex-col items-center p-4">
                        {/* Image */}
                        <img src="/sharingpic.svg" alt="sharingpic" className="w-64 mx-auto mb-4" />

                        {/* Headings */}
                        <h1 className="text-xl font-bold text-center">
                            The future of sharing— borrow what you need, lend what you don’t.
                        </h1>
                        <h2 className="text-lg mt-4 text-center">
                            Less buying, more sharing— <br />smart lending starts here.
                        </h2>
                    </div>
                </section>
                {/* Section 2 */}

                <section id="About" className="flex flex-col items-center py-18  text-center gap-4 bg-gray-200">
                    <div className="text-center flex  items-center gap-4 font-bold">
                        <img src="/lendlylogo.svg" alt="lendylogo" />
                        <h1>Lendly คืออะไร Lendly คือ Application <br />สำหรับการขอยืมและให้ยืมสิ่งของ <br />

                            ที่ต้องการปล่อยเช่าหรือต้องการเช่า
                        </h1>
                    </div>
                    <div className='flex flex-row items-center gap-4'>
                        <div className='flex flex-col items-center gap-4 pt-4'>
                            <h1>Goes To our Website </h1>
                            <a className='alink' href="https://vercellendly.vercel.app/">Click here</a>
                            <img src="/vercellendly.png" alt="" width={150} height={150} />
                        </div>
                    </div>
                </section>


                {/* Section 3 */}
                <section id="" className="flex flex-col items-center py-16  gap-4 bg-white">
                    {/* <div className='flex flex-col items-center'>
                        <h2 className="text-xl font-semibold">Lendly Features</h2>
                        <p className="text-center mt-2">Feature การใช้งานของเรามีดังนี้</p>
                        <ul className="list-disc">
                            <li > หน้า Home สำหรับค้นหาสิ่งของที่ต้องการขอยืม</li>
                            <li > หน้า Feed สำหรับการโพสหาสิ่งของที่ต้องการขอยืม</li>
                            <li > หน้า Library สำหรับการเก็บข้อมูลสินค้าที่สนใจหรือ<br />ดูสถานะของสินค้าที่มีการปล่อยให้ยืมหรือกำลังยืมอยู่</li>
                        </ul>
                    </div> */}
                    <div className='flex flex-col items-center gap-4'>
                        <h2 className="text-xl font-bold">Unique Features</h2>
                        <p className="text-center mt-2 font-semibold text-lg">Unique Features ของเรามีดังนี้</p>
                        <ul className="list-disc text-lg">
                            <li >Feed</li>
                            <li >Borrow</li>
                            <li >Rank</li>
                        </ul>
                    </div>
                </section>

                {/* Section 4 */}
                <section id="Features" className="py-16 bg-gray-200">
                    <div className='flex flex-col items-center'>
                        <h1 className='text-xl font-bold    '>Meet Our Member</h1>

                        <Swiper
                            loop={true}
                            pagination={{
                                dynamicBullets: true,
                            }}
                            modules={[Pagination]}
                            className="mySwiper"
                            style={{ height: '350px', position: 'relative' }} // Set a fixed height and make sure it has relative positioning
                        >
                            <SwiperSlide>
                                <Card
                                    image="/nonpic.jpg"
                                    name="Phonkiat Robkob"
                                    description="66010523"
                                    caption="Arnon Phonkiat Robkob"
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Card
                                    image="/kenpic.jpg"
                                    name="Wasutorn Tasee"
                                    description="66010758"
                                    caption="Kendobueno"
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Card
                                    image="/ongsapic.jpg"
                                    name="Ongsa"
                                    description="66010781"
                                    caption="Meongmangkorn"
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Card
                                    image="/paipic.jpg"
                                    name="Sinlapachai Homhual"
                                    description="66010810"
                                    caption="Pai The President"
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Card
                                    image="/fem.webp"
                                    name="Fem"
                                    description="66011344"
                                    caption="FemFuw"
                                />
                            </SwiperSlide>
                        </Swiper>

                    </div>
                </section>

                {/* Section 5 */}
                <section id="Contact" className="flex flex-col items-center py-1 bg-white">
                    <h2 className="text-xl font-semibold">Contact</h2>
                    <p className="text-center mt-2 p-4">Get in touch with us.</p>
                    <div className='flex flex-col gap-2'>
                        <div className='flex items-center gap-4'>
                            <img src="/mailsicon.svg" alt="" />

                            <p>lendlyofficial@gmail.com</p>
                        </div>
                        <div className='flex items-center gap-4'>
                            <img src="/telephoneicon.svg" alt="" />
                            <p>062-XXXX-XXX</p>
                        </div>
                       
                    </div>
                </section>
            </main>
        </div>
    );
}

export default Home;
