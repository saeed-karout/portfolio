import React from 'react'
import './contact.css'
import { useForm, ValidationError } from '@formspree/react';
import Lottie from "lottie-react";
import DoneMAil from '../../animation/done.json';
import EmailRightConract from '../../animation/email2.json'
import { useRef } from 'react';

import { useTranslation } from 'react-i18next';

const Contact = () => {

    const { t, i18n } = useTranslation();


    const [state, handleSubmit] = useForm("mqkrbblk");

    const lottieRef = useRef();


    return (
        <section className='contact-us' id='contact'>
            <h1 className='title'>

                <span className='icon-attach_email'></span>
                {t('contact.contactMe')}
            </h1>
            <p className='subtitle'>{t('contact.subContact')}</p>

            <div className="flex form" style={{ justifyContent: "space-between" }}>
                <form onSubmit={handleSubmit}>
                    <div className='flex'>
                        <label htmlFor="email">{t('contact.email')} </label>
                        <input autoComplete='off' required type="email" name="email" id="email" />
                        <ValidationError
                            prefix="Email"
                            field="email"
                            errors={state.errors}
                        />

                    </div>

                    <div className='flex' style={{ marginTop: "24px" }}>

                        <label htmlFor="message">{t('contact.msg')} </label>
                        <textarea required name="message" id="message"></textarea>
                        <ValidationError
                            prefix="Message"
                            field="message"
                            errors={state.errors}
                        />
                    </div>

                    <button type="submit" disabled={state.submitting} className='submit'>
                        {state.submitting ? "Submitting ..." : ` ${t('contact.send')}`}
                    </button>
                    {/* <button type="submit" disabled={state.submitting} className='submit'>
                        {state.submitting ? "Submitting ..." : "Submit"} {t('contact.send')}
                    </button> */}
                    {state.succeeded && (<h1 className='flex'>
                        <Lottie
                            loop={false}
                            style={{ height: 55 }}
                            animationData={DoneMAil}
                        />
                        Your Message has been Successfully 👌</h1>)}
                </form>

                <div className="animation">
                    <Lottie className='contact-animation'
                        lottieRef={lottieRef}
                        loop={true}
                        style={{ height: 400 }}
                        onLoadedImages={() => {
                            // @ts-ignore
                            lottieRef.current.setSpeed(0.4);
                        }}
                        animationData={EmailRightConract}
                    />
                </div>
            </div>
           
        </section>
    );
}

export default Contact
