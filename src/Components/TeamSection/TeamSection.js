import React from 'react';
import './TeamSection.css';
import TeamSectionInfo from '../TeamSectionInfo/TeamSectionInfo';


const teamData = [
    {
        name:'jasika Tws',
        occupation: 'Senior Director',
        img:'https://i.ibb.co/4WT2ynw/1.webp'
    },
    {
        name:'jasika Tws',
        occupation: 'Senior Director',
        img:'https://i.ibb.co/1mVB15v/2.webp'
    },
    {
        name:'jasika Tws',
        occupation: 'Senior Director',
        img:'https://i.ibb.co/jz4dpfY/3.webp'
    }
]

const TeamSection = () => {
    return (
        <section style = {{marginTop:'180px'}}>
            <div className="container ">
            <h1 style={{fontWeight:'bold'}} className="text-center ">OUR TEAM</h1>
            <p className="text-center text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, unde.</p>
            <div className="row d-flex justify-content-center">
                {
                    teamData.map(team => <TeamSectionInfo team={team}  />)
                }
            </div>
        </div>
        </section>
    );
};

export default TeamSection;