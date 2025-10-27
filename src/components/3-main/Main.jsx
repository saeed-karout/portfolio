import React from 'react';
import './main.css';
import { useState } from 'react';
import { myProjects } from './myproject';
import { AnimatePresence, motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Main = () => {
  const { t } = useTranslation();
  const [currentActive, setCurrentActive] = useState("all");
  const [arr, setArr] = useState(myProjects);

  const handleClick = (buttonCategory) => {
    setCurrentActive(buttonCategory);
    const newArr = buttonCategory === 'all' 
      ? myProjects 
      : myProjects.filter((item) => item.category.includes(buttonCategory));
    setArr(newArr);
  };

  return (
    <main className='flex' id='project'>
      <section className='flex left-section'>
        <button
          onClick={() => {
            setCurrentActive('all');
            setArr(myProjects);
          }}
          className={currentActive === 'all' ? 'active' : null}
        >
          {t('main.allProject')}
        </button>
        <button
          onClick={() => handleClick('css')}
          className={currentActive === 'css' ? 'active' : null}
        >
          HTML & CSS
        </button>
        <button
          onClick={() => handleClick('mern')}
          className={currentActive === 'mern' ? 'active' : null}
        >
          MERN Stack
        </button>
        <button
          onClick={() => handleClick('react')}
          className={currentActive === 'react' ? 'active' : null}
        >
          React
        </button>
        <button
          onClick={() => handleClick('MUI')}
          className={currentActive === 'MUI' ? 'active' : null}
        >
          Material UI
        </button>
        <button
          onClick={() => handleClick('bootstrap')}
          className={currentActive === 'bootstrap' ? 'active' : null}
        >
          Bootstrap
        </button>
        <button
          onClick={() => handleClick('vue.js')}
          className={currentActive === 'vue.js' ? 'active' : null}
        >
          Vue.js & Vuetify
        </button>
        <button
          onClick={() => handleClick('vuetify')}
          className={currentActive === 'vuetify' ? 'active' : null}
        >
          Vuetify
        </button>
        <button
          onClick={() => handleClick('bulma')}
          className={currentActive === 'bulma' ? 'active' : null}
        >
          Bulma
        </button>
      </section>

      <section className='flex right-section'>
        <AnimatePresence>
          {arr.slice().reverse().map((item) => (
            <motion.article
              layout
              initial={{ transform: "scale(0)" }}
              animate={{ transform: "scale(1)" }}
              transition={{ type: "spring", damping: 8, stiffness: 40 }}
              key={item.id}
              className='card'
            >
              <img width={255} src={item.imPath} alt={item.projectTitle} />
              <div style={{ width: "255px" }} className="box">
                <h4 className='title'>{item.projectTitle}</h4>
                <p className='sub-title'>{item.description}</p>
                <div className="flex icons">
                  <div style={{ gap: "11px" }} className='flex'>
                    <a className="icon-link" href={item.site} target='_blank' aria-label="Visit project site"></a>
                    <a href={item.link} className="icon-github" aria-label="Visit GitHub repository"></a>
                  </div>
                  <a className='link flex' href={item.site} target='_blank'>
                    {t('main.more')}
                    <span style={{ alignSelf: 'center' }} className='icon-arrow-right'></span>
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </section>
    </main>
  );
};

export default Main;
