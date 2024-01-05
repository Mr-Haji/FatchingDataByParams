import "./Card.css"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import reviewPic from "../../pics/reviewPic.png"


const Card = ({ image, title, category, description, price, rating, lastButton, id, clickOnCartBtn, seeMoreBtn }) => {
    return (

        <div className="card" key={id}>
            <div className="cardImage">
                <img src={image}>
                </img>
            </div>
            <div className="cardTitle">
                <div>

                    {title = title.slice(0, 15)}<span onClick={seeMoreBtn} >...</span>

                </div>
                <div>
                    <span onClick={clickOnCartBtn}>                     <FavoriteBorderIcon />
                    </span>
                    <span onClick={clickOnCartBtn}>                     <ShoppingCartIcon />
                    </span>
                </div>
            </div>
            <div className="cardCategory">
                <span className="cardCategoryBtn" onClick={seeMoreBtn}>
                    {category}
                </span>
            </div>
            <div className="cardDescription">
                {description = description.slice(0, 50)}.....<span onClick={seeMoreBtn} >See more</span>
            </div>
            {/* <div className="cardPrice">
                <button className="cardPriceBtn">
                {price} $
                </button>
            </div> */}
            <div className="rating">
                <img src={reviewPic} width={"100px"} alt="Pic" />

            </div>

            <div className="cardAddToCartParent">
                <button className="cardAddToCartBtn1">
                    {lastButton}
                </button>
                <button className="cardAddToCartBtn2">
                    {price}/-
                </button>

            </div>
        </div >

    )
}

export default Card;