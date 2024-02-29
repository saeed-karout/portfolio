import React from 'react'
import  './footer.css'
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t, i18n } = useTranslation();

  return (
    <footer className='flex'>
      <ul className='flex'>
        <li><a href="#AboutMe">{t('header.aboutme')}</a></li>
        <li><a href="#project">{t('header.project')}</a></li>

        <li><a href="#contact">{t('header.contact')}</a></li>
        <li><a href="https://saeed-karout.github.io/my_cv/page2.html">{t('header.cv')}</a></li>
      </ul>



      <p>&copy; 2024 {t('hero.name')} . {t('footer.CopyRight')} </p>
    </footer>






  );
}

export default Footer
