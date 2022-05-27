import React from 'react';

import {ThreeCircles} from 'react-loader-spinner'
import Loader from 'assets/loader.gif'

export function CollectionLayout(props) {

    const { data = [], heading, description, BodyCard, loading } = props;

    return (
        <>
            <div className="bg-black-2">

                <div className="py-24">
                    <HeaderLayout
                        heading={heading}
                        description={description} />
                </div>
            </div>
            <BodyLayout>
                {
                    loading && <div className='py-3 text-center flex justify-center'>
                        {/* <ThreeCircles color='#D8C879' /> */}
                        <img src={Loader} alt=""  className='h-32 2-32'/>
                    </div>
                }
                {[...data].map(item => (
                    <BodyCard
                        item={item} />))}
            </BodyLayout>

        </>
    );
}

export const HeaderLayout = (props) => {

    return (
        <div className='bg-black-2 text-yellow px-4'>
            <div className="text-3xl heading">
                {props.heading}
            </div>
            <div className='max-w-sm'>
                {props.description}
            </div>
        </div>
    );
};

export const BodyLayout = (props) => {

    return (
        <div className="bg-white py-8 px-4">
            {props.children}
        </div>
    );
};
