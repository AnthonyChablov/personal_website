import ContentSectionText from "../ContentSectionText/ContentSectionText";
import ContentSectionProjects from "../ContentSectionProjects/ContentSectionProjects";
const ContentLayout = () => {
  return (
    <div className="content-layout">
        <ContentSectionText bgColorClass={'content-section--white'} insertClass={'content-section'}/>
        <ContentSectionProjects/>

    </div>
  )
}
export default ContentLayout;