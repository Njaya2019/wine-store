import Wines from './wines/wines';


 const WinesLists = (props) =>{
        
        return(
            <div>
                <Wines 
                    wines={props.wines} 
                />
            </div>
        )


}


export default WinesLists;