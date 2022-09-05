import React, {ChangeEvent, useCallback, useState} from 'react';
import './Main.scss';
import {ArtWorks} from "../artWorks/ArtWorks";
import {SvgSelector} from "../../assets/icons/SvgSelector";
import {useAppSelector} from "../../store/store";
import {CategoryList} from "../categoryList/CategoryList";
import {Pagination} from "../pagination/Pagination";

export const Main = React.memo(() => {

  const works = useAppSelector(state => state.works)

  const [currentPage, setCurrentPage] = useState<number>(1)
  const [openNameFilter, setOpenNameFilter] = useState<boolean>(false)
  const [openCategoryFilter, setOpenCategoryFilter] = useState<boolean>(false)
  const [name, setName] = useState<string>('')

  const changeCurrentPage = useCallback((page: number) => setCurrentPage(page), [])

  const openNameFilterHandler = useCallback(() => {
    setOpenCategoryFilter(false)
    setOpenNameFilter(true)
  }, [])
  const closeNameFilterHandler = useCallback(() => setOpenNameFilter(false), [])

  const openCategoryFilterHandler = useCallback(() => {
    setOpenNameFilter(false)
    setOpenCategoryFilter(true)
  }, [])
  const closeCategoryFilterHandler = useCallback(() => setOpenCategoryFilter(false), [])

  const changeNameHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => setName(e.currentTarget.value), [])

  let filteredWorks = works
  if (name) {
    filteredWorks = works.filter(w => w.name.toLowerCase().includes(name.toLowerCase()))
  }

  return (
    <div className={'main'}>
      <div className={'main__title'}>
        <div>Artworks</div>
        <div>588</div>
      </div>
      <div className={'main__filters'}>
        <div className={'main__filter category'}
             onClick={openNameFilter ? closeNameFilterHandler : openNameFilterHandler}>
          <span className={'main__category'}>Category</span>
          <SvgSelector id={'ARROW'} color={'#000000'}/>
          {openNameFilter && <CategoryList/>}
        </div>
        <div className={'main__filter name'}
             onClick={openCategoryFilter ? closeCategoryFilterHandler : openCategoryFilterHandler}>
          <span className={'main__name'}>Name</span>
          <SvgSelector id={'ARROW'} color={'#000000'}/>
          {
            openCategoryFilter && <div className={'nameFilter'} onClick={(e) => e.stopPropagation()}>
              <input type="text" placeholder={'Start type a name'} value={name} onChange={changeNameHandler}/>
            </div>
          }
        </div>
      </div>
      <ArtWorks works={filteredWorks}/>
      <Pagination currentPage={currentPage} changeCurrentPage={changeCurrentPage} totalValues={16} valuesPerPage={4}/>
    </div>
  );
})
