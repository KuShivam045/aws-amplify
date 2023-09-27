import React from 'react'

const RequestACallback = () => {
    return (
        <section id="need-assistance" className="relative overflow-hidden bg-white py-32">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
                <div className="mx-auto max-w-lg text-center">
                    <h2 className="font-display font-bold text-3xl tracking-wider text-neutral-900 sm:text-4xl">Need Assistance</h2>
                    <p className="mt-4 text-lg tracking-tight text-neutral-900">Our friendly folks will help you.</p>
                    <a className="group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 transition-colors border border-neutral-900 bg-white text-slate-900 hover:bg-sky-50 active:bg-blue-200 active:text-slate-600 focus-visible:outline-white mt-10" 
                    href="/customer-support">Request a Call back</a>
                </div>
            </div>
        </section>
    )
}

export default RequestACallback