// import logo from './logo.svg';
import React from 'react';
import classes from './App.module.css';
// import ProductData from './ProductData';
import ProductPreview from './ProductPreview';
import ProductDetails from './ProductDetails';
import TopBar from './TopBar';

function App() {
  // const currentHour= new Date().getHours() > 9 ? new Date().getHours() : '0' + new Date().getHours();
  // const currentMinute= new Date().getMinutes() > 9 ? new Date().getMinutes() : '0' + new Date().getMinutes();

  return (
    <div className="App">
      <header className="App-header">
        <TopBar/>
        {/* <nav className={classes.Topbar}>
          <img src='https://www.logo.wine/a/logo/Amazon_(company)/Amazon_(company)-Logo.wine.svg' alt="Amazon Logo"/>
        </nav> */}
      </header>
      <div className={classes.MainContainer}>
        <div className={classes.ProductPreview}>
          <ProductPreview/>
          {/* <img src='https://imgur.com/iOeUBV7.png' alt='Watch Image'/> */}
          
          {/* <div className={classes.TimeSection}>
            <p>{`${currentHour}:${currentMinute}`}</p>
          </div> */}
          {/* <div className={classes.HeartBeat}>
            <i class="fa fa-heartbeat"></i>
            <p>78</p>
          </div> */}

        </div>
        <div className={classes.ProductData}>
          <ProductDetails/>
          {/* <h1 className={classes.ProductTitle}>{ProductData.title}</h1>
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
          <button className={classes.PrimaryButton}>Buy Now</button> */}
        </div>
      </div>
    </div>
  );
}

export default App;
