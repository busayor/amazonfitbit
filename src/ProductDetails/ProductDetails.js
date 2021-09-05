import React from 'react';
import classes from './ProductDetails.module.css'

const ProductDetails = (props) => {
    const colorOptions = props.data.colorOptions.map((item, pos) => {
        const classArr = [classes.ProductImage]
        if (pos === props.currentPreviewPos) {
            classArr.push(classes.SelectedProductImage)
        }
        return (
            <img 
                key = {pos}
                className={classArr.join(' ')} 
                src={item.imageUrl} 
                alt={item.StyleName}
                onClick = {() => props.onColorOptionClick(pos)}
            />
        )
    })

    const buttonOptions = props.data.featureList.map((btnItem, pos) => {
        const classArr = [classes.FeatureItem]
        if (pos === props.currentSelectedFeature){
            classArr.push(classes.SelectedFeatureItem)
        }
        return (
            <button 
                key={pos} 
                className={classArr.join(' ')}
                onClick = {()=> props.onFeatureCLick(pos)}
            >
                {btnItem}
            </button> 
        )
    })

    return(
        <div className={classes.ProductData}>
          <h1 className={classes.ProductTitle}>{props.data.title}</h1>
          <p className={classes.ProductDescription}>{props.data.description}</p>
        
          <h3 className={classes.SectionHeading}>Select Color</h3>
            <div>
                {colorOptions}
            </div>
            <h3 className={classes.SectionHeading}>Features</h3>
            <div>
                {buttonOptions}
            </div>
            <button className={classes.PrimaryButton}>Buy Now</button>
        </div>
    )
}

export default ProductDetails