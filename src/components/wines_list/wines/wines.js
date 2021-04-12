import React from 'react';
import style from './wines.css'

const Wines = (props) => {
    return (
        <div className={style.wines_container}>

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