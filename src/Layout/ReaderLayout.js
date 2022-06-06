import React from 'react'
import { Link } from 'react-router-dom';

import MarkdownView from 'react-showdown';

import { ReactComponent as Textsize } from 'assets/icon_text_size.svg'
import { ReactComponent as BtnLeft } from 'assets/btn_left.svg'
import { ReactComponent as BtnRight } from 'assets/btn_right.svg'
import { ReactComponent as BtnIo } from 'assets/icon_io_red.svg'

const Backarrow = () => <svg width="24" height="24" viewBox="0 0 24 24"><path fill='currentColor' d="M0 12l9-8v6h15v4h-15v6z" /></svg>

export default function Readerlayout(props) {

    const {nextClick, prevClick, showNav = false} = props


    return (
        <>
            <div className="py-14 fixed w-full">

                <div className="flex justify-between bg-yellow-light py-4">
                    <div className='text-yellow px-3'> 
                    <Link to={`/${props?.back ? props?.back : ''}`}>
                        <Backarrow /> 
                    </Link>
                    </div>
                    <div className='text-xs'> {props?.heading} </div>
                    <div><Textsize height="20px" /></div>
                </div>
            </div>
            <div className="xl:text-lg px-3 py-40">
                <MarkdownView
                    markdown={props?.body}
                    options={{ tables: false, emoji: true }}
                />
                
            </div>
            <div className="fixed bottom-0 w-full bg-yellow flex justify-between py-3 px-3">
                    <div>
                        <BtnIo height={"40px"} width="40px" />
                    </div>
                    <div>
                        {showNav &&
                        <div className='flex'>
                            <BtnLeft onClick={prevClick} height={"40px"} width="40px" className='mr-4 cursor-pointer' />
                            <BtnRight onClick={nextClick} height={"40px"} width="40px" className='cursor-pointer' />
                        </div>
                        }
                    </div>
            </div>


        </>
    )
}
