import React from 'react'
import TeamMemberImage from './TeamMemberImage'

export default function TeamMemberCard(props) {
    return (
        <div className='team-card'>
            <TeamMemberImage image={props.image}/>
            <h4>{props.name} {'//'} {props.position}</h4>
            <p>{props.about}</p>
        </div>
    )
}
