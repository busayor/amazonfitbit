import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import classes from './App.module.css';
import ProductData from './Utils/ProductData'
import ProductReview from './ProductReview/ProductReview';
import ProductDetails from './ProductDetails/ProductDetails';
import TopBar from './TopBar/TopBar';

class App extends Component {
  state = {
    productData: ProductData,
    currentPreviewPos: 0,
    currentSelectedFeature: 0
  }

  onColorOptionClick = (pos) => {
    this.setState({currentPreviewPos: pos})
  }

  onFeatureCLick = (pos) =>{
    this.setState({currentSelectedFeature: pos})
  }
  render() {
      return (
      <div className="App">
          <TopBar/>

          <div className={classes.MainContainer}>
            <div>
              <ProductReview 
                currentReviewImage = {this.state.productData.colorOptions[this.state.currentPreviewPos].imageUrl}
                currentSelectedFeature = {this.state.currentSelectedFeature}
              />
            </div>

            <ProductDetails 
              data={this.state.productData}
              onColorOptionClick = {this.onColorOptionClick}
              currentPreviewPos = {this.state.currentPreviewPos}
              onFeatureCLick = {this.onFeatureCLick}
              currentSelectedFeature = {this.state.currentSelectedFeature}
            />
          </div>
      </div>
    );
  }
  
}

export default App;
