import React from 'react'
import './hero.css'
import Lottie from 'lottie-react';
import developerAnimation from '../../animation/developer.json';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Hero = () => {
    const { t, i18n } = useTranslation();
    const handleDownload = () => {

        // قم بتحديد الملف PDF الذي ترغب في تنزيله
        const pdfUrl = './cv/mycv.pdf';
    
        // قم بإنشاء عنصر a للتنزيل
        const link = document.createElement('a');
        link.href = pdfUrl;
        link.download = 'Mohamad_Saeed_Karout_cv.pdf'; // اسم الملف الذي سيتم تنزيله
    
        // قم بإضافة عنصر الرابط إلى DOM وقم بتنشيط النقر عليه
        document.body.appendChild(link);
        link.click();
    
        // قم بإزالة الرابط من DOM بعد النقر عليه
        document.body.removeChild(link);
      };


return (
<section className='hero flex' id='AboutMe'>

        
        
    <div className="left-section ">

        <div className="perant-avatar flex">
            <motion.img 
            initial={{scale:0}}
            animate={{scale:1}}
            transition={{duration:1, type:"spring",stiffness:100}}
            src="./myimage.jpg" className='avatar' alt="" />
            <div className='icon-verified'></div>


        </div>

        <motion.h1
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{duration:2}}
         className='title'>{t('hero.name')} </motion.h1>
           <h2 className='title'>{t('hero.work')}</h2> 
        <p className='sub-title'>
            {t('hero.about-Me')}
        </p>
        <div className="all-icons flex ">
            <div>
            <a href="https://www.instagram.com/saeed_karout/"  target="_blank" className="icon icon-instagram"></a>
            <a href='https://github.com/saeed-karout' target="_blank" className="icon icon-github " ></a>
            <a href="https://www.linkedin.com/in/saeed-karout/" className="icon icon-linkedin"></a>

            <a href='https://t.me/Saeed_karout'  target="_blank" className="icon icon-telegram"></a>
            </div>
           

           <div>
           <a href="https://wa.me/+963957608833" target="_blank" className="icon icon-whatsapp"></a>
            
            
            <a href='#' className="icon icon-file-pdf-o" onClick={handleDownload}></a>

            <a href='https://youtube.com/@M_Saeedkarout' target="_blank" className="icon icon-youtube-play"></a>
            <a href='https://twitter.com/Saeed_karout' className="icon icon-x"></a>

           </div>
            

        </div>
    </div>

    <div className="right-section  ">
                         <Lottie
                         loop={true}
                          style={{ height: 350 ,width:350}}
                           animationData={developerAnimation}
                            />
    </div>

</section>
);
}

export default Hero
