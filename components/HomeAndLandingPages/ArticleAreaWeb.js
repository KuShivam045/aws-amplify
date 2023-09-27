import React from 'react'
import ArticleCardHome from './ArticleCardHome';

const ArticleAreaWeb = (props) => {
    return (
        <section className="px-4 md:px-8 py-12 sm:py-24 bg-gray-100 flex flex-col-reverse md:flex-row justify-between items-center w-full">
            <div className="mt-6 md:mt-0 mx-auto w-full md:w-[calc(100%-200px)] xl:w-[calc(100%-480px)]">
                <div className="">
                    <h2 className="text-4xl font-display tracking-wider text-center font-semibold text-neutral-900">
                        Trending Read on Gig Freelancer and Remote Working
                    </h2>
                    <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
                        {props.data.map((item) => {
                            return <ArticleCardHome key={item.KeyIndex} data={item} />;
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ArticleAreaWeb