import ContentSectionText from "../ContentSectionText/ContentSectionText";
import ContentSectionProjects from "../ContentSectionProjects/ContentSectionProjects";
import ContentSectionSkills from "../ContentSectionSkills/ContentSectionSkills";
const ContentLayout = () => {
  return (
    <div className="content-layout">
        <ContentSectionText bgColorClass={'content-section--white'} insertClass={'content-section'}/>
        <ContentSectionProjects/>
        <ContentSectionSkills/>
    </div>
  )
}
export default ContentLayout;