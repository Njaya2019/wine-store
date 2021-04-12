import React from 'react';
import style from './wines_header.css'

const Wines_Header = (props) =>{
    return (
        <div className={style.wines_header_container}>
            <div className={style.category_container}>

            </div>
            <div className={style.delivery_info_container}>
                <div className={style.note_container}>

                </div>
                <div className={style.num_bottle_container}>

                </div>
                <div class={style.cartinfo_checkout_price_container}>
                    <div className={style.price_container}>

                    </div>
                    <div className={style.checkout_container}>

                    </div>
                    <div className={style.cart_info_container}>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default Wines_Header;