import React from 'react'
import Marquee from 'react-fast-marquee'

export default function Ticker() {

    const suburbList = shuffleArray(suburbs);

    const listItems = suburbList.map((name) => <li>{name}  -  </li>);
    

    return (
        <div className='ticker'>
            <Marquee gradient={false}>
                <ul>{listItems}</ul>
            </Marquee>
        </div>
    )
}

function shuffleArray(array) {
    let i = array.length - 1;
    for (; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

const suburbs = [
    'Bayswater',
    'Boronia',
    'Ringwood',
    'Heathmont',
    'Wantirna',
    'The Basin',
    'Nunawadding',
    'Mitcham',
    'Ferntree Gully',
    'Rowville',
    'Kilsyth',
    'Scoresby',
    'Vermont',
    'Knoxfield',
    'Doncaster',
    'Burwood',
    'Croydon',
];

