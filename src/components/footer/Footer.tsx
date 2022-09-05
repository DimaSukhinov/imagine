import React from 'react';
import './Footer.scss';
import {SvgSelector} from "../../assets/icons/SvgSelector";

export const Footer = () => {
  return (
    <footer className={'footer'}>
      <div className={'container'}>
        <div className={'footer__firstBlock'}>
          <div className={'footer__logo'}><SvgSelector id={'LOGO'} color={'#ffffff'}/></div>
          <span className={'footer__item'}>Contract offer</span>
          <span className={'footer__item'}>Card payment rules</span>
        </div>
        <div className={'footer__secondBlock'}>
          <div className={'footer__sites'}>
            <span className={'footer__item'}>imagine.com</span>
            <span className={'footer__item'}>info@imagine.com</span>
            <span className={'footer__license'}>© IMAGINE 2021. All rights Reserved</span>
          </div>
          <div className={'footer__links'}>
            <div className={'item'}><SvgSelector id={'FACEBOOK'}/></div>
            <div className={'item'}><SvgSelector id={'INSTAGRAM'}/></div>
            <div className={'item'}><SvgSelector id={'WHATSAPP'}/></div>
          </div>
        </div>
      </div>
    </footer>
  );
}
