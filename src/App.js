// import logo from './logo.svg';
import React, { Component } from 'react';
import classes from './App.module.css';
import ProductPreview from './ProductPreview/ProductPreview';
import ProductDetails from './ProductDetails/ProductDetails';
import TopBar from './TopBar/TopBar';
import ProductData from './TopBar/ProductData';


class App extends Component {
  state ={
    productData: ProductData,
    // currentPreviewImage:'https://imgur.com/xSIK4M8.png',
    currentPreviewImagePos:0,
    currentSelectedFeature: 0,
  }
  onColorOptionClick = (pos) => {
    // const updatedPreviewImage = this.state.productData.colorOptions[pos].imageUrl
    // console.log(updatedPreviewImage);
    this.setState({currentPreviewImagePos: pos});
  }
  // const currentHour= new Date().getHours() > 9 ? new Date().getHours() : '0' + new Date().getHours();
  // const currentMinute= new Date().getMinutes() > 9 ? new Date().getMinutes() : '0' + new Date().getMinutes();
  
  onFeatureItemClick = (pos) => {
    // let updatedState = false
    // if(pos===1){
    //   updatedState= true;
    // }
    this.setState({currentSelectedFeature: pos});
  }
  
  render(){
    return (
      <div className="App">
        {/* <header className="App-header"> */}
          <TopBar/>
          {/* <nav className={classes.Topbar}>
            <img src='https://www.logo.wine/a/logo/Amazon_(company)/Amazon_(company)-Logo.wine.svg' alt="Amazon Logo"/>
          </nav> */}
        {/* </header> */}
        <div className={classes.MainContainer}>
          <div className={classes.ProductPreview}>
            <ProductPreview currentPreviewImage={this.state.productData.colorOptions[this.state.currentPreviewImagePos].imageUrl} currentSelectedFeature={this.state.currentSelectedFeature} />
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
            <ProductDetails data={this.state.productData} onColorOptionClick={this.onColorOptionClick} currentPreviewImagePos={this.state.currentPreviewImagePos}
            onFeatureItemClick={this.onFeatureItemClick} currentSelectedFeature={this.state.currentSelectedFeature}/>
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
}

export default App;
