import ContentSectionText from "../ContentSectionText/ContentSectionText";
import ContentSectionProjects from "../ContentSectionProjects/ContentSectionProjects";
import ContentSectionSkills from "../ContentSectionSkills/ContentSectionSkills";
import ContentSectionContact from "../ContentSectionContact/ContentSectionContact";
import ContentSectionSocial from "../ContentSectionSocial/ContentSectionSocial";
const ContentLayout = () => {
  return (
    <div className="content-layout">
        <ContentSectionText contentType={'heroText'} bgColorClass={'content-section--white'} insertClass={'content-section'}/>
        <ContentSectionProjects/>
        <ContentSectionSkills/>
        <ContentSectionContact/>
        <ContentSectionSocial/>
    </div>
  )
}
export default ContentLayout;