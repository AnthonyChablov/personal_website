import {motion} from 'framer-motion';
const transition = { duration: 0.05, ease: [0.43, 0.13, 0.23, 0.96] };
const InfoContent = ({header, subContent, linkTo}) => {
    return (
        <div className="info__content ">
                <h2 className="info__header">
                    {header}
                </h2>
                <motion.a className="info__subcontent" 
                    whileHover={{ color: '#747baf' }}
                    transition={{ delay : 0.05, ...transition}}
                    href={linkTo}
                    target="_blank"
                >
                    {subContent}
                </motion.a>
        </div>
    )
}

export default InfoContent;