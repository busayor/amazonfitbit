import React from 'react';
import classes from './ProductReview.module.css'

const ProductReview = (props) => {
  const currentHour = new Date().getHours() > 9 ? new Date().getHours() : '0' + new Date().getHours()
  const currentMinute = new Date().getMinutes() > 9 ? new Date().getMinutes() : '0' + new Date().getMinutes()

    return (
        <div className={classes.ProductReview}>
            <img src={props.currentReviewImage} alt="Product Review" />

            {
                props.currentSelectedFeature === 1 ?
                <div className={classes.HeartRateFeature}>
                    {/* <i className="fas fa-heartbeat"></i> */}
                    <p>78</p>
                </div>
                :
                <div className={classes.TimeFeature}>
                    <p>{`${currentHour}:${currentMinute}`}</p>
                </div>
            }
        </div>
    );
}

export default ProductReview