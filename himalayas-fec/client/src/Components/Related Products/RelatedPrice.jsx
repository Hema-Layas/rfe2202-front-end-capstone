import {currentProductByID, stylesAndProducts} from '../../lib/Atoms.jsx';
import {useRecoilValue, useRecoilState} from 'recoil';
import React from 'react';
import './relatedSass.scss';

const RelatedPrice = (props) => {
  const [stylesAndProductsValue, setStylesAndProducts] = useRecoilState(stylesAndProducts);
  const currentPrice = stylesAndProductsValue[props.props1 - 2].data.default_price;
  const salePricePath = stylesAndProductsValue[props.props1 - 1].data.results[0];

  const saleChecker = () => {
    if (salePricePath.sale_price !== null){
      return (
        <div className='relatedPrice'>
          <text className='relatedPriceText' style={{textDecorationLine: 'line-through'}}>${currentPrice}</text>
          <text className='relatedPriceText' style={{color: 'red'}}>     ${salePricePath.sale_price}</text>
        </div>
      )
    } else {
      return (
        <h1 className='relatedPrice'>{currentPrice}</h1>
      )
    }
  }

  return (
    <div>
      {saleChecker()}
    </div>
  )
}

export default RelatedPrice;