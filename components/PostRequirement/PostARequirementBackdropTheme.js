import React from 'react'
import { MdOutlineArrowBack } from "react-icons/md";
import RiProgreesBar from './RiProgressBar';
import { useRouter } from 'next/router';

const PostARequirementBackdropTheme = (props) => {
    const router = useRouter();

    return (
        <div className="block lg:flex w-full mx-auto bg-white">
            <div className="hidden w-full lg:flex flex-col bg-[#1678f2] h-auto p-8 pt-8">
                <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">{props.headingsMain}</h1>
                <p className="mt-4 text-white lg:text-xl">{props.subHeadingMain}</p>
            </div>
            <div className="block w-full">
                <RiProgreesBar step={props.step} />
                <div>
                    <button className="cursor-pointer text-black ml-4 mb-4"
                        onClick={() => router.back()}
                    >
                        <MdOutlineArrowBack size="30"/>
                    </button>
                    <div className="p-5 pt-0">
                        <h1 className="lg:hidden text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">{props.headingsMain}</h1>
                        <p className="lg:hidden my-4 text-neutral-900 text-xl">{props.subHeadingMain}</p>
                        <div>{props.children} </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostARequirementBackdropTheme