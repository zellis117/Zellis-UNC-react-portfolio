import React from 'react';
import Project from '../Components/Project';

function Projects(){
  return (
    <div>
        <h1>Projects</h1>
        <div className='container1'>
            <a href='https://zellis117.github.io/Team-Fabulous-P1-API-Application/' target='_blank' className='project'>
                <Project name='Hike' background='hike'/>
            </a>
            <a href='https://zellis117.github.io/Zellis-MovieDB--App/' target='_blank' className='project'>
                <Project name='Movie DB' background='movie'/>
            </a>
            <a href='https://zellis117.github.io/Tour-Level-Golf---Ball-Flight-Analysis/' target='_blank' className='project'>
                <Project name='Ball Flight Diagnosis' background='ballFlight'/>
            </a>
        </div>
        <div className='container2'>
            <a href='https://play.google.com/store/apps/details?id=com.ZacEllis.StarBattle&hl=en_US&gl=US' target='_blank' className='project'>
                <Project name='Star Battle' background='starBattle'/>
            </a>
            <a href='https://play.google.com/store/apps/details?id=com.DefaultCompany.TourLevelGolf&hl=en_US&gl=US' target='_blank' className='project'>
                <Project name='Tour Level Golf' background='TLG'/>
            </a>
            <a href='https://zellis117.github.io/Weather-Forecatser-UNC-M6---Zac-Ellis/' target='_blank' className='project'>
                <Project name='Weather Forecaster' background='weather'/>
            </a>
        </div>
        <ul id='repoLinks'>
            <li><a href='https://github.com/zellis117/Team-Fabulous-P1-API-Application' target='_blank'>Hike Planner Repository</a></li>
            <li><a href='https://github.com/zellis117/Zellis-MovieDB--App' target='_blank'>Zellis Movie App Repository</a></li>
            <li><a href='https://github.com/zellis117/Tour-Level-Golf---Ball-Flight-Analysis' target='_blank'>Ball Flight Diagnosis Repository</a></li>
            <li><a href='https://github.com/zellis117/Weather-Forecatser-UNC-M6---Zac-Ellis' target='_blank'>Weather Forecaster Repository</a></li>
            <li>Star Battle Repository (PRIVATE)</li>
            <li>TLG: Golf Games Repository (PRIVATE)</li>
        </ul>
    </div>
  );
}

export default Projects;