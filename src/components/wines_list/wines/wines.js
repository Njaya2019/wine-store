import React from 'react';
import style from './wines.css'

const Wines = (props) => {

    const handleDetailsCliked = (e)=>{
        
        e.target.children[0].style.display = 'grid'
        e.stopPropagation()
        
    }
    const handleCloseDetailsContainer = (e) =>{
       
        e.target.parentNode.parentNode.style.display = 'none'
        e.stopPropagation()

    }
    return (
        <div className={style.wines_container}>
            {props.wines && props.wines.length > 0?
            props.wines.map((wineItem)=>(

                <div key={wineItem.no} className={style.wine_container}>
                    {/* Left container */}
                    <div className={style.image_container}
                        style={{
                            background: `url(https://storage.googleapis.com/wineshop-assets/wine-bottles/${wineItem.image})`
                        }}
                    >
                    </div>
                    {/* Right container */}
                    <div className={style.right_wine_container}>
                        {/* Wine name container */}
                        <div className={style.name_container}>
                            <h1>{wineItem.name}</h1>
                        </div>
                        {/* Bottle or case container*/}
                        <div className={style.bottle_case_container}>
                            {/* Bottle  container*/}
                            <div className={style.bottle_container}>
                                {/* bottle price container */}
                                <div className={style.bottle_and_price}>
                                    <div className={style.bottle}>Bottle</div>
                                    <div className={style.bottle_price}>
                                        ${wineItem.cost.bottle}
                                    </div>
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
                                    <div className={style.case_price}>
                                        ${wineItem.cost.case}
                                    </div>
                                </div>
                                {/* case quantity container */}
                                <div className={style.case_quantity}>
                                    <input type="number"/>
                                    <span>QTY</span>
                                </div>
                            </div>
                        </div>

                        <div 
                         className={style.cart_details_container}
                        >
                            <div 
                                className={style.details_container}
                                onClick={handleDetailsCliked}
                            >
                                Details
                                <div className={style.details}>
                                    <div className={style.close_button}>
                                        <span
                                          onClick={handleCloseDetailsContainer}
                                        >&#10005;</span>
                                    </div>
                                    <div>{wineItem.details}</div>
                                </div>
                            </div>
                            <div className={style.cart_container}>
                                Add to cart
                            </div>

                        </div>

                    </div>
                    
                </div>
            ))
            :
            null
            }

            
    
        </div>
    )
}

export default Wines;