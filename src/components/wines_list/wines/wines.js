import React from 'react';
import style from './wines.css'

const Wines = (props) => {
    return (
        <div className={style.wines_container}>
            {/* Wine container */}
            <div className={style.wine_container}>
                {/* Left container */}
                <div className={style.image_container}
                    style={{
                        background: `url(../wines/2.jpg)`
                    }}
                >
                </div>
                {/* Right container */}
                <div className={style.right_wine_container}>
                    {/* Wine name container */}
                    <div className={style.name_container}>
                        <h1>13 Breidecker</h1>
                    </div>
                    {/* Bottle or case container*/}
                    <div class={style.bottle_case_container}>
                        {/* Bottle  container*/}
                        <div className={style.bottle_container}>
                            {/* bottle price container */}
                            <div className={style.bottle_and_price}>
                                <div className={style.bottle}>Bottle</div>
                                <div className={style.bottle_price}>$17.90</div>
                            </div>
                            {/* bottle quantity container */}
                            <div className={style.bottle_quantity}>
                                <input type="number"/>
                                <span>QTY</span>
                            </div>

                        </div>
                        {/* Case container */}
                        <div className={style.case_container}>
                            {/* case price container */}
                           <div className={style.case_and_price}>
                                <div className={style.case}>Case</div>
                                <div className={style.case_price}>$204.06</div>
                            </div>
                            {/* case quantity container */}
                            <div className={style.case_quantity}>
                                <input type="number"/>
                                <span>QTY</span>
                            </div>
                        </div>
                    </div>

                    <div className={style.cart_details_container}>
                        <div className={style.details_container}>
                            Details
                        </div>
                        <div class={style.cart_container}>
                            Add to cart
                        </div>

                    </div>

                </div>
                
            </div>

            <div className={style.wine_container}>
                <div className={style.image_container}
                    style={{
                        background: `url(../wines/1.jpeg)`
                    }}
                >

                </div>
                <div className={style.right_wine_container}>
                    <div className={style.name_container}>
                        <h1>13 Breidecker</h1>
                    </div>
                    <div class={style.bottle_case_container}>
                        <div className={style.bottle_container}>

                        </div>
                        <div className={style.case_container}>

                        </div>
                    </div>
                    <div className={style.cart_details_container}>
                        <div className={style.details_container}>

                        </div>
                        <div class={style.cart_container}>

                        </div>

                    </div>
                </div>
            </div>

            <div className={style.wine_container}>
                <div className={style.image_container}
                    style={{
                        background: `url(../wines/2.jpg)`
                    }}
                >

                </div>
                <div className={style.right_wine_container}>
                    <div className={style.name_container}>
                        <h1>13 Breidecker</h1>
                    </div>
                    <div class={style.bottle_case_container}>
                        <div className={style.bottle_container}>

                        </div>
                        <div className={style.case_container}>

                        </div>
                    </div>
                    <div className={style.cart_details_container}>
                        <div className={style.details_container}>

                        </div>
                        <div class={style.cart_container}>

                        </div>

                    </div>
                </div>
            </div>
            <div className={style.wine_container}>
                <div className={style.image_container}
                    style={{
                        background: `url(../wines/4.jpg)`
                    }}
                >

                </div>
                <div className={style.right_wine_container}>
                    <div className={style.name_container}>
                        <h1>13 Breidecker</h1>
                    </div>
                    <div class={style.bottle_case_container}>
                        <div className={style.bottle_container}>

                        </div>
                        <div className={style.case_container}>

                        </div>
                    </div>
                    <div className={style.cart_details_container}>
                        <div className={style.details_container}>

                        </div>
                        <div class={style.cart_container}>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Wines;