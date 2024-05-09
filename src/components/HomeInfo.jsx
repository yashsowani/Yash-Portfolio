import React from 'react'
import {Link} from 'react-router-dom'
import {arrow} from '../assets/icons'

// curly braces for instant return instead of having fragments with return statement.
const InfoBox = ({text, link, btnText}) => (
    <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>{text}</p>
        <Link to = {link} className='neo-brutalism-white neo-btn'>
            {btnText}
            <img src={arrow} className='w-4 h-4 object-contain'/>
        </Link>
    </div>
)

const renderContent = {
    1 : (
        <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
        Hi, I'm
        <span className='font-semibold mx-2 text-white'>Yash</span>
        👋
        <br />
        A Software Engineer from India currently in Ireland.
      </h1>
    ),
    2 : (
        <InfoBox text="Working as an Associate Consultant with Version 1 having Full stack development experience."
        link = '/about'
        btnText='Learn More'
         />
    ),
    3 : (
        <InfoBox text="Involved in many projects over the years. Wanna see the Impact?"
        link = '/projects'
        btnText='Visit my portfolio'
         />
    ),
    4 : (
        <InfoBox text="Need a project done or looking for a dev to hire?"
        link = '/contact'
        btnText='Contact'
         />
    )
}

const HomeInfo = ({currentStage}) => {
  return renderContent[currentStage] || null;
}

export default HomeInfo