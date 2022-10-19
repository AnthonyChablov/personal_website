import ParagraghText from '../ParagraphText/ParagraphText'
import {AiFillHtml5, } from 'react-icons/ai';
import {DiCss3, DiSass, DiReact, DiNodejs, DiNpm, DiPython} from 'react-icons/di';
import {HiDatabase} from "react-icons/hi";
import {IoLogoJavascript} from 'react-icons/io';
import {SiTypescript, SiJavascript, SiTailwindcss, SiFirebase} from 'react-icons/si';
const ContentSectionSkills = () => {
  return (
    <div className='content-section-skills'>
        <div className="content-section-skills__wrapper">
            <div className="container">
              <div className="content-section-skill__content">
                <div className="content-section-skill__text">
                  <h3 className="content-section-skills__title">My Skills.</h3>
                  <div className="content-section-skills__paragraph">
                    <ParagraghText text={'Developing highly interactive Front-End / User Interfaces for web and mobile applications'}/>
                    <ParagraghText text={'Working as a team to solve problems'}/>
                    <ParagraghText text={'Integration of third party services such as Firebase/ AWS / Digital Ocean'}/>
                  </div>
                </div>
                <div className="content-section-skills__card">
                  <div className="row">
                    <div className='card__skill'>
                      <AiFillHtml5 size={60}/>
                      <p className='card__skill__subtitle'>Html-5</p>
                    </div>
                    <div className='card__skill'>
                      <DiCss3 size={60}/>
                      <p className='card__skill__subtitle'>Css</p>
                    </div>
                    <div className='card__skill'>
                      <DiSass size={60}/>
                      <p className='card__skill__subtitle'>Scss</p>
                    </div>
                    <div className='card__skill'>
                      <SiTailwindcss size={60}/>
                      <p className='card__skill__subtitle'>Tailwind</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className='card__skill'>
                      <SiJavascript size={55}/>
                      <p className='card__skill__subtitle'>Javascript</p>
                    </div>
                    <div className='card__skill'>
                      <SiTypescript size={55}/>
                      <p className='card__skill__subtitle'>Typescript</p>
                    </div>
                    <div className='card__skill'>
                      <DiReact size={60}/>
                      <p className='card__skill__subtitle'>React.js</p>
                    </div>
                    <div className='card__skill'>
                      <DiNodejs size={60}/>
                      <p className='card__skill__subtitle'>Node.js</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className='card__skill'>
                      <DiNpm size={60}/>
                      <p className='card__skill__subtitle'>Npm</p>
                    </div>
                    <div className='card__skill'>
                      <HiDatabase size={60}/>
                      <p className='card__skill__subtitle'>Sql-database</p>
                    </div>
                    <div className='card__skill'>
                      <DiPython size={60}/>
                      <p className='card__skill__subtitle'>Python</p>
                    </div>
                    <div className='card__skill'>
                      <SiFirebase size={60}/>
                      <p className='card__skill__subtitle'>Firebase</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default ContentSectionSkills