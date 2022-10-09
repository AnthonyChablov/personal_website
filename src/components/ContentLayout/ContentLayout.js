import ContentSection from "../ContentSection/ContentSection";
const ContentLayout = () => {
  return (
    <div className="content-layout">
        <ContentSection bgColorClass={'content-section--white'} insertClass={'content-section'}/>
        <ContentSection bgColorClass={'content-section--grey'} insertClass={'content-section'}/>
        <ContentSection bgColorClass={'content-section--grey'} insertClass={'content-section'}/>
        <ContentSection bgColorClass={'content-section--grey'} insertClass={'content-section'}/>
    </div>
  )
}
export default ContentLayout;