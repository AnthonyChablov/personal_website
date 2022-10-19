import ParagraghText from '../ParagraphText/ParagraphText'
import Box from '../Box/Box';
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
                    <Box iconName={'html'} text={'Html-5'}/>
                    <Box iconName={'css'} text={'Css'}/>
                    <Box iconName={'scss'} text={'Scss'}/>
                    <Box iconName={'tailwind'} text={'Tailwind'}/>
                  </div>

                  <div className="row">
                    <Box iconName={'javascript'} text={'javascript'}/>
                    <Box iconName={'typescript'} text={'typescript'}/>
                    <Box iconName={'react'} text={'react.js'}/>
                    <Box iconName={'nodeJS'} text={'Node.js'}/>
                  </div>

                  <div className="row">
                    <Box iconName={'npm'} text={'npm'}/>
                    <Box iconName={'database'} text={'Sql-database'}/>
                    <Box iconName={'python'} text={'python'}/>
                    <Box iconName={'firebase'} text={'firebase'}/>
                  </div>

                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default ContentSectionSkills