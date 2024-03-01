import { useEffect, useState } from 'react';
import './header.css'
import i18n from '../../i18n';

import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
const Header = () => {
    const [theme, setTheme] = useState(localStorage.getItem('currentMode') ?? 'dark');
    const [showModel, setShowModel] = useState(false);
    const { t, i18n } = useTranslation();

    const [currentLanguage, setCurrentLanguage] = useState(() => {

        return localStorage.getItem('language') || 'en';
    });



    const toggleLanguage = () => {

        const newLanguage = currentLanguage === "en" ? "ar" : "en";
        setCurrentLanguage(newLanguage);


        localStorage.setItem('language', newLanguage);


    };




    useEffect(() => {
        if (currentLanguage === 'ar') {
            document.body.dir = 'rtl';
        } else {
            document.body.dir = 'ltr';
        }
        i18n.changeLanguage(currentLanguage);
    }, [currentLanguage]);





    useEffect(() => {

        if (theme === "light") {
            document.body.classList.remove("dark")
            document.body.classList.add("light")
        } else {
            document.body.classList.remove("light")
            document.body.classList.add("dark")
        }
        // document.body.classList.toggle(!theme.value)
    }, [theme])

    return (



        <header className='flex'>

            <Helmet>
                <title>MHD Saeed Karout Portfolio</title>
                <meta name='description' content='This is a gallery of works by Muhammad Saeed Karout, which was built using React.js The project contains projects that I made and used, and added some additions such as lettele, i18n, dark/light mode, Library moon to icon, formSpre to email, Local Storage. and Helmet to SEO' />
                <meta name="keywords" content="portfolio mohammad saeed karout, saeed karout , karout , محمد سعيد قاروط ,معرض اعمال محمد سعيد قاروط , سعيد قاروط" />
                <meta name="author" content="mohammad saeed karout, محمد سعيد قاروط"></meta>
            </Helmet>

            <button onClick={() => {
                setShowModel(true)
            }} className='menu icon-menu iconButton '>

            </button>

            <div></div>


            <nav>
                <ul className='flex'>
                    <li><a href="#AboutMe">{t('header.aboutme')}</a></li>
                    <li><a href="#project">{t('header.project')}</a></li>
                    <li><a href="#contact">{t('header.contact')}</a></li>
                    <li><a href="https://saeed-karout.github.io/my_cv/page2.html" target='_blank'>{t("header.cv")}</a></li>
                </ul>
            </nav>

            {/* toggle Light Dark Mood */}
            <div className='flex'>

                <button onClick={() => {
                    // Sens Value To Local Storage
                    localStorage.setItem("currentMode", theme == "dark" ? "light" : "dark")
                    // get Value from Local Storage
                    setTheme(localStorage.getItem("currentMode"))
                }} className='iconButton flex'>

                    {theme === "dark" ? (<span className='icon-moon-o '></span>) : (<span className='icon-wb_sunny '></span>)}

                </button >


                {/* toggle Language */}
                <div>
                    <button className='iconButton icon-translate' onClick={toggleLanguage}>

                    </button>




                </div>





            </div>


            <div>

            </div>
            {/*   */}
            {showModel && (
                <div className='fixed'>

                    <ul className="model ">
                        <li>
                            <button className='icon-close' onClick={() => { setShowModel(false) }}></button>

                        </li>


                        <li><a href="https://saeed-karout.github.io/my_cv/page2.html" target='_blank'>{t("header.cv")}</a></li>


                        <li><a href="#project">{t('header.project')}</a></li>

                        <li><a href="">About Me</a></li>
                        <li><a href="#contact">{t('header.contact')}</a></li>

                    </ul>

                </div>
            )}

        </header>
    );
}

export default Header;
