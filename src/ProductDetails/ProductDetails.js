import React from 'react';
import classes from './ProductDetails.module.css';
import ProductData from '../TopBar/ProductData';

const ProductDetails = (props) =>{
  const colorOptions= props.data.colorOptions.map((item,pos) => {
    const classArr= [classes.ProductImages]
    if (pos===0){
      classArr.push(classes.SelectedProductImages);
    }
    return(
      <img key={pos} className={classArr.join(' ')} src={item.imageUrl} alt={item.styleName} onClick={() => props.onColorOptionClick(pos)}/>
    );
  })

  const featureList= props.data.featureList.map((item, pos)=>{
    const classArr=[classes.Buttons1];
    if(pos === 0){
      classArr.push(classes.SelectedButton1);
    }
    return(
      <button key={pos} className={classArr.join(' ')}>{item}</button>
    )
  })

    return(
        <div className={classes.ProductData}>
          <h1 className={classes.ProductTitle}>{props.data.title}</h1>
          <p className={classes.ProductDescription}>{props.data.description}</p>
          <h3 className={classes.SelectOptions}>Select Color</h3>
          <div className={classes.classesColoredWatches}>
            {colorOptions}
            {/* <img className={[classes.ProductImages,classes.SelectedProductImage].join(' ')} src='https://imgur.com/iOeUBV7.png'alt='Black Watch'/>
            <img className={classes.ProductImages} src='https://imgur.com/PTgQlim.png'alt='Red Watch'/>
            <img className={classes.ProductImages} src='https://imgur.com/Mplj1YR.png'alt='Blue Watch'/>
            <img className={classes.ProductImages} src='https://imgur.com/xSIK4M8.png'alt='Purple Watch'/> */}
          </div>
          <h3 className={classes.SelectOptions}>Feature</h3>
          <div>
            {featureList}
            {/* <button className={[classes.Buttons1,classes.SelectedButton1].join(' ')}>Time</button> */}
            {/* <button className={classes.Buttons1}>Heart Rate</button> */}
          </div>
          <button className={classes.PrimaryButton}>Buy Now</button>
        </div>
    )
}
export default ProductDetails;