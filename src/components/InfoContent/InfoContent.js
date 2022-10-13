
const InfoContent = ({header, subContent}) => {
    return (
        <div className="info__content ">
                <h2 className="info__header">{header}</h2>
                <a className="info__subcontent" href="#">{subContent}</a>
        </div>
    )
}

export default InfoContent;