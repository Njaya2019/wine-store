import Wines from './wines/wines';


 const WinesLists = (props) =>{
        
        return(
            <div>
                <Wines
                    handleAddToCart={props.handleAddToCart}
                    wines={props.wines} 
                />
            </div>
        )


}


export default WinesLists;