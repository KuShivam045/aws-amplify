import React from 'react'
import { Disclosure } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'

const Faq = (props) => {
  return (
    <div className="bg-white">
      <h2 className="text-xl lg:text-4xl font-semibold text-center">
        Frequently asked questions
      </h2>
      <p className="text-center mt-6 text-gray-700">
        Everything you need to know on posting requirement and hiring,
        signup, selecting the right freelancer, and releasing your
        payments.
      </p>
      <div className='py-6 lg:my-2 rounded-md'>
        <dl className="space-y-6 divide-y divide-gray-900/10 ">
          {props?.faqs?.slice(0, props.show ? props.show.length : 5).map((faq) => (
            <Disclosure as="div" key={faq.Question} className="pt-6">
              {({ open }) => (
                <>
                  <dt>
                    <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                      <span className="text-base font-semibold leading-7" dangerouslySetInnerHTML={{ __html: faq.Question }}></span>
                      <span className="ml-6 flex h-7 items-center">
                        {open ? (
                          <MinusSmallIcon className="h-6 w-6" aria-hidden="true" />
                        ) : (
                          <PlusSmallIcon className="h-6 w-6" aria-hidden="true" />
                        )}
                      </span>
                    </Disclosure.Button>
                  </dt>
                  <Disclosure.Panel as="dd" className="mt-2">
                    <p className="text-base leading-7 text-gray-600" dangerouslySetInnerHTML={{ __html: faq.Answer }}></p>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          ))}
        </dl>
      </div>
      <div className="mt-4 mb-2 flex justify-center" onClick={props.onClick}>
        <button
          className="w-[150px] flex justify-center bg-blue-500 text-white py-2 rounded-md tracking-wide
                                font-semibold focus:outline-none focus:shadow-outline hover:bg-blue-600 shadow-lg cursor-pointer transition ease-in duration-300"
        >
          {
            props.show ? <span>View Less</span> : <span>View More</span>
          }
        </button>
      </div>
    </div>
  )
}

export default Faq