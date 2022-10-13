import InfoContent from "../InfoContent/InfoContent";
import {AiFillGithub, AiFillLinkedin} from 'react-icons/ai';

const Info = () => {
    return (
        <div className="info ">
            <InfoContent header={'Prefer Email?'} subContent={'achablov@gmail.com'}/>
            <InfoContent header={'Or to Call?'} subContent={'+123 4444 1212'}/>
            <InfoContent header={'Address'} subContent={'66 Ceres St San Francisco,California, 94124'}/>
            
            <div className="info__socials">
                <p>Find me Online</p>
                <div className="info__links">
                    <a className="info__icon" target={'_blank'} href="https://github.com/AnthonyChablov"><AiFillGithub size={33}/></a>
                    <a className="info__icon" target={'_blank'} href="https://www.linkedin.com/in/anthony-chablov-7a7a2921a/"><AiFillLinkedin size={33}/></a>
                    
                </div>
                
            </div>
            
        </div>
    )
}

export default Info