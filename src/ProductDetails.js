import React from 'react';
import classes from './ProductDetails.module.css';
import ProductData from './ProductData';

const ProductDetails=()=>{
    return(
        <div className={classes.ProductDetails}>
          <h1 className={classes.ProductTitle}>{ProductData.title}</h1>
          <p className={classes.ProductDescription}>{ProductData.description}</p>
          <h3 className={classes.SelectOptions}>Select Color</h3>
          <div classeName={classes.classesColoredWatches}>
            <img className={[classes.ProductImages,classes.SelectedProductImage].join(' ')} src='https://imgur.com/iOeUBV7.png'alt='Black Watch'/>
            <img className={classes.ProductImages} src='https://imgur.com/PTgQlim.png'alt='Red Watch'/>
            <img className={classes.ProductImages} src='https://imgur.com/Mplj1YR.png'alt='Blue Watch'/>
            <img className={classes.ProductImages} src='https://imgur.com/xSIK4M8.png'alt='Purple Watch'/>
          </div>
          <h3 className={classes.SelectOptions}>Feature</h3>
          <div>
            <button className={[classes.Buttons1,classes.SelectedButton1].join(' ')}>Time</button>
            <button className={classes.Buttons1}>Heart Rate</button>
          </div>
          <button className={classes.PrimaryButton}>Buy Now</button>
        </div>
    )
}
export default ProductDetails;