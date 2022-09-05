// @ts-nocheck
import {v1} from "uuid";
import artWork1 from '../assets/images/artWork1.png';
import artWork2 from '../assets/images/artWork2.png';
import artWork3 from '../assets/images/artWork3.png';
import artWork4 from '../assets/images/artWork4.png';
import artist1 from '../assets/images/artist1.png';
import artist2 from '../assets/images/artist2.png';
import artist3 from '../assets/images/artist3.png';
import artist4 from '../assets/images/artist4.png';

const initialState: WorkType[] = [
  {id: v1(), author: 'George Dillan', name: 'Forest silence', image: artWork1, artist: artist1},
  {id: v1(), author: 'Peggy Wood', name: 'Still life V', image: artWork2, artist: artist2},
  {id: v1(), author: 'Alice Gordan', name: 'Surrounded', image: artWork3, artist: artist3},
  {id: v1(), author: 'Timothy Taylor', name: 'Mountain landscape', image: artWork4, artist: artist4},
];

export const worksReducer = (state: WorkType[] = initialState, action: ActionsType): WorkType[] => {
  switch (action.type) {
    case "DELETE-ART-WORK":
      return state.filter(w => w.id !== action.id)
    default:
      return state;
  }
};

export const deleteArtWorkAC = (id: string) => {
  return {type: 'DELETE-ART-WORK', id} as const;
};

type ActionsType = ReturnType<typeof deleteArtWorkAC>

export type WorkType = {
  id: string
  author: string
  name: string
  image: any
  artist: any
}