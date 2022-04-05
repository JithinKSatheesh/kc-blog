import React from 'react';
import Photo from 'assets/photo/photo.png'
import { Link } from 'react-router-dom';

export function ChapterLayout(props) {

    const { data = [], heading, description, BodyCard, img } = props;

    return (
        <>
            <div className="">
                    <HeaderLayout img={img}  />
            </div>
            <BodyLayout>
                {[...data].map(item => (
                    <BodyCard
                        item={item} />))}
            </BodyLayout>

        </>
    );
}

export const HeaderLayout = (props) => {

    return (
        <div 
            style={{
                background : `url(${props?.img})`,
                backgroundSize : 'cover'
            }}
            className='h-56'>
                <div className="backdrop-blur-sm bg-black/30 h-full  flex items-end pl-8 pb-4">
                    <Link to="/novels">
                    <img src={props?.img} className="w-32 h-32" />
                    </Link>
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
