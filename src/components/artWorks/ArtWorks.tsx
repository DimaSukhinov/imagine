import React, {useCallback} from 'react';
import './ArtWorks.scss';
import {SvgSelector} from "../../assets/icons/SvgSelector";
import {useDispatch} from "react-redux";
import {deleteArtWorkAC, WorkType} from "../../store/artWorks-reducer";

type ArtWorksPropsType = {
  works: WorkType[]
}

export const ArtWorks = React.memo(({works}: ArtWorksPropsType) => {

  const dispatch = useDispatch()

  const deleteArkWork = useCallback((id: string) => () => dispatch(deleteArtWorkAC(id)), [])

  return <div className={'artWorks'}>
    {works.map(w => <div className={'artWork'}>
      <div className={'artWork__delete'} onClick={deleteArkWork(w.id)}>
        <SvgSelector id={'DELETE'}/>
      </div>
      <img src={w.image} alt="image"/>
      <div className={'artWork__author'}>
        <img src={w.artist} alt="artist"/>
        <div className={'author'}>
          <span className={'artWorks__author'}>{w.author}</span>
          <span className={'artWorks__name'}>{w.name}</span>
        </div>
      </div>
    </div>)}
  </div>
})
