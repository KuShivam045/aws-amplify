import Image from 'next/image'
import React, { useState } from 'react'
import RedirectFreelancer from '../ModalComponents/RedirectFreelancer';

const JoinAsFreelancer = () => {
    const [modalOpen, setModalOpen] = useState(false);
    return (
        <section id="get-started-today" className="relative overflow-hidden bg-blue-600 py-32">
            <RedirectFreelancer modalOpen ={modalOpen} setModalOpen={setModalOpen} href="https://freelancer.rozgaarindia.com/signup"/>
            <Image alt="Client_Web_banner"
                loading="lazy"
                width="2347"
                height="1244"
                unoptimized
                className="absolute left-1/2 top-1/2 max-w-none -translate-x-1/2 -translate-y-1/2"
                src="/assets/banners/Client_Web_banner%20_Rozgaar.webp"
            />
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
                <div className="mx-auto max-w-auto text-center">
                    <h2 className="font-display text-3xl tracking-wider text-white sm:text-4xl">Becoming a freelancer takes only a few clicks</h2>
                    <p className="mt-4 text-lg sm:text-2xl tracking-tight text-yellow-400">Work as a Freelancer.</p>
                    <div onClick={()=> setModalOpen(true)}
                    className="group cursor-pointer inline-flex items-center justify-center rounded-lg py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-white text-slate-900 hover:bg-blue-50 active:bg-blue-200 active:text-slate-600 focus-visible:outline-white mt-10" >Join Now</div>
                </div>
            </div>
        </section>
    )
}

export default JoinAsFreelancer