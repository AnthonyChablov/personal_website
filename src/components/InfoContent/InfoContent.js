import {motion} from 'framer-motion';
const transition = { duration: 2, ease: [0.43, 0.13, 0.23, 0.96] };
const InfoContent = ({header, subContent}) => {
    return (
        <div className="info__content ">
                <h2 className="info__header">
                    {header}
                </h2>
                <motion.a className="info__subcontent" 
                    whileHover={{ color:'blue' }}
                    transition={{delay : 0.05, ...transition}}
                    href="#">
                        {subContent}
                </motion.a>
        </div>
    )
}

export default InfoContent;