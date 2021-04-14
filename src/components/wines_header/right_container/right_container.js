import React from 'react';
import style from './right_container.css'

const RightHeader = (props) => {
    return (
        // Right header
        <div className={style.right_header_container}>
            {/* bottles or cases added to cart */}
            <div className={style.num_case_or_bottle_container}>
                36 Bottles
            </div>
            {
                /* displays the number of items 
                added to cart and their total price */
            }
            <div className={style.cartinfo_checkoutprice_container}>
                {/* number of cart items */}
                <div className={style.cart_info_container}>
                    <div className={style.empty_cart}
                    >
                        Empyt cart
                    </div>

                </div>
                {/* total price and checkout button  */}
                <div className={style.price_checkout_container}>
                    {/* total price */}
                    <div className={style.price_container}>
                        Ksh 432.65
                    </div>
                    {/* checkout button*/}
                    <div className={style.checkout_container}>
                        checkout
                    </div>

                </div>
            </div>

        </div>
    )
}

export default RightHeader;