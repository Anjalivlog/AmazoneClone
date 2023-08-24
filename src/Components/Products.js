import StarRateIcon from '@mui/icons-material/StarRate';
// import StarHalfIcon from '@mui/icons-material/StarHalf';
// import StarOutlineIcon from '@mui/icons-material/StarOutline';
import '../style/Products.css'

const Products = ({title,image,price}) => {
    // let halfRating = (rating - Math.floor(rating)) * 10;
    // let outline = 0;
    // halfRating > 0 
    // ? (outline = 5 - Math.ceil(rating)) 
    // : (outline = 5 - Math.floor(rating));

    return (
        <>
            <div className='Products'>
                <img 
                    src={image}
                    alt=''
                />
                <div className='ProductInformation'>
                    <p>{title}</p>
                    <div className='ProductsGroup'>
                            <p className='ProductPrice'>
                              <small>$</small>
                              <strong>{price}</strong>
                            </p>
                            {/* For The Rating */}
                            <div className='ProductRating'>
                                {/* {Array(Math.floor(rating)).fill().map((_,index) =>
                                (
                                    <StarRateIcon key={index}/>
                                ))} */}
                                {/* For Half Rating*/}
                                {/* {halfRating > 0 ? <StarHalfIcon/> : <></>}
                                {outline > 0 ? Array(outline).fill().map((_,
                                index) => 
                                <StarOutlineIcon key={index} />)
                                : ""}  */}
                                <StarRateIcon />
                            </div>  
                    </div>
                </div>
                <button>Add To Cart</button>
            </div>
        </>
    );
}

export default Products