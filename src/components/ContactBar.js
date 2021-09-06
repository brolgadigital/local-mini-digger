import React from 'react'
import * as Icon from 'react-feather'
import LMD from './seo/LMD'

export default function ContactBar() {
    return (
        <>
        <LMD />

        <div className='top-contact'>
            <Icon.PhoneCall />
            <p>0410 307 705</p>
            <Icon.Mail />
            <p>info@localminidigger.com.au</p>
        </div>
        </>
    )
}
