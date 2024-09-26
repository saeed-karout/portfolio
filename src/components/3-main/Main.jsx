import React from 'react'
import './main.css'
import { useState } from 'react';
import { myProjects } from './myproject';
import { AnimatePresence, motion } from 'framer-motion';

import { useTranslation } from 'react-i18next';





const Main = () => {

  const { t, i18n } = useTranslation();

  const [currentActive, setCurrentActive] = useState("all");
  const [arr, setArr] = useState(myProjects);
  const handleClick = (buttonCategory) => {

    setCurrentActive(buttonCategory);

    const NewArr = myProjects.filter((item) => {
      const arr2 = item.category.find(
        (myItem) => { return myItem = buttonCategory });


      return arr2 === buttonCategory;
    })
    setArr(NewArr);
  }

  return (
    <main className='flex' id='project'>
      <section className='flex left-section '>


        <button onClick={() => {
          setCurrentActive('all');
          setArr(myProjects);
        }} className={currentActive === 'all' ? 'active' : null}>{t('main.allProject')}
        </button>


        <button onClick={() => {

          handleClick('css')

        }}
          className={currentActive === 'css' ? 'active' : null}> HTML & Css
        </button>

        <button onClick={() => {

          handleClick('react')

        }}
          className={currentActive === 'react' ? 'active' : null}>  React
        </button>


        <button onClick={() => {

          handleClick('MUI')

        }}
          className={currentActive === 'MUI' ? 'active' : null}>  Matrial ui
        </button>



        <button onClick={() => {

          handleClick('bootstrap')

        }}
          className={currentActive === 'bootstrap' ? 'active' : null}> bootstrap
        </button>


        <button onClick={() => {

          handleClick('vue.js')

        }}
          className={currentActive === 'vue.js' ? 'active' : null}> vue.js  & Vuetify
        </button>



        <button onClick={() => {

          handleClick('framework')

        }}
          className={currentActive === 'vuetify' ? 'active' : null}> vuetify
        </button>

        <button onClick={() => {

          handleClick('bulma')

        }}
          className={currentActive === 'bulma' ? 'active' : null}> bulma
        </button>












      </section>

      <section className=' flex right-section'>

        <AnimatePresence>

          {arr.sort().map((item) => {
            return (
              <motion.article
                layout
                initial={{ transform: "scale(0)" }}
                animate={{ transform: "scale(1)" }}
                transition={{ type: "spring", damping: 8, stiffness: 40 }}
                key={item.id} className='card'>
                <img width={255} src={item.imPath} alt="" />
                <div style={{ width: "255px" }} className=" box">
                  <h4 className='title'>{item.projectTitle} </h4>
                  <p className='sub-title'>{item.description}</p>

                  <div className="flex icons">
                    <div style={{ gap: "11px" }} className='flex'>

                      <a className="icon-link" href={item.site} target='_blank'>

                      </a>

                      <a href={item.link} className="icon-github"></a>
                    </div>

                    <a className='link flex' href="">{t('main.more')}
                      <span style={{ alignSelf: 'center' }} className='icon-arrow-right'></span>
                    </a>
                  </div>
                </div>
              </motion.article>





            )
          })}
        </AnimatePresence>

      </section>
    </main>
  );
}

export default Main
