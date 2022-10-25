import ContentSectionText from "../ContentSectionText/ContentSectionText";
import ContentSectionProjects from "../ContentSectionProjects/ContentSectionProjects";
import ContentSectionSkills from "../ContentSectionSkills/ContentSectionSkills";
import ContentSectionContact from "../ContentSectionContact/ContentSectionContact";
const ContentLayout = () => {
  return (
    <div className="content-layout">
        <ContentSectionText contentType={'heroText'} bgColorClass={'content-section--white'} insertClass={'content-section'}/>
        <ContentSectionProjects/>
        <ContentSectionSkills/>
        <ContentSectionContact/>
    </div>
  )
}
export default ContentLayout;