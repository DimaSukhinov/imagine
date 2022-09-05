import React from 'react';
import './Header.scss';
// @ts-ignore
import user from '../../assets/images/userpic.png';
import {SvgSelector} from "../../assets/icons/SvgSelector";

export const Header = () => {
  return (
    <header className={'header'}>
      <div className={'container'}>
        <div className={'header__logo'}>
          <SvgSelector id={'LOGO'} color={'#000000'}/>
        </div>
        <div className={'header__menu'}>
          <div className={'header__item'}>
            <SvgSelector id={'HOME'}/>
          </div>
          <div className={'header__item header__chat'}>
            <SvgSelector id={'CHAT'}/>
            <div className={'header__notification'}>
              <SvgSelector id={'NOTIFICATION'}/>
            </div>
          </div>
          <div className={'header__item'}>
            <SvgSelector id={'SETTINGS'}/>
          </div>
          <img src={user} alt="user"/>
          <div className={'header__language'}>
            <span>ENG</span>
            <SvgSelector id={'ARROW'} color={'#B8B8B8'}/>
          </div>
        </div>
      </div>
    </header>
  );
}
