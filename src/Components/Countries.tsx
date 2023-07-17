import React, { MouseEventHandler, useReducer } from 'react';
import listCountries from '../Components/ListsOfCountries.json';

interface ExActionType {
  id:number
  country:string,
  flag_src:string
}
interface ActionType extends ExActionType {
  type:string
}

const country = listCountries.countries[6];
const initialState:ExActionType = {
  id: country.id,
  country: country.country,
  flag_src: country.flag_src
}
const reducer = (state:ExActionType, action:ActionType) => {
  switch (action.type) {
    case "__ACTIVE":
      return {
        id: action.id,
        country: action.country,
        flag_src: action.flag_src
      }
    default:
      return state;
  }
}

type propsType = {
  value:boolean
  setValueVal:(e:boolean)=>void
}

// the component
const Countries = ({value, setValueVal}:propsType) => {
  
  const [state, dispatch] = useReducer(reducer, initialState);
  
  const displayCountriesIcon = (item:ExActionType) => {
    const {id, country, flag_src} = item
    dispatch({type: "__ACTIVE", id: id, country: country, flag_src: flag_src});
  }
    
  const classicFunc:MouseEventHandler = (e) => {
    e.stopPropagation()
    setValueVal(!value)
  }

  // smtin
  return (
    <React.Fragment>
      {value && (
        <div className="show__countries">
          <ul>
            {listCountries.countries.map((item) =>
              <li key={item.id} onClick={() => {displayCountriesIcon(item)}}>
                {(item.id === state.id) ? 
                <div className="cont __Active">
                  <div className='country__image'></div>
                  <span>{item.country}</span> 
                </div> :
                <div className="cont">
                  <div className='country__image'></div>
                  <span>{item.country}</span> 
                </div>}
              </li>
            )}
          </ul>
        </div>
      )}
      <div className='displayed__country' onClick={classicFunc}>
        <div className="country__flag"></div>
        <span className="country__name">{state.country}</span>
        <div className="dropdown-icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" style={{width:'2rem', height:'auto', fill:'#938d8d'}} className='dropdown_icon__SVG'>
            <path d="M 6.087 10.998 C 5.507 10.458 5.507 9.541 6.085 9 L 6.135 8.954 C 6.71 8.416 7.603 8.415 8.18 8.951 L 11.66 12.184 C 11.852 12.362 12.148 12.363 12.34 12.185 L 15.856 8.932 C 16.413 8.416 17.283 8.446 17.803 9 L 17.803 9 C 18.324 9.554 18.302 10.424 17.755 10.952 L 12.682 15.843 C 12.299 16.211 11.696 16.217 11.307 15.855 Z"></path>
          </svg>
        </div>
      </div>
    </React.Fragment>
  )
}

export default React.memo(Countries)