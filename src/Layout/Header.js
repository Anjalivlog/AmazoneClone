import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from "react-router-dom";
import '../style/Header.css'

const Header = () => {
    return (
        <>
           <nav className='header'>
              <div className='headerTop'>
                <div className='headerLeftNav'>
                     <MenuIcon/>
                </div>
                {/* Logo */}
                <Link to="/">
                        <img 
                         src='http://pngimg.com/uploads/amazon/amazon_PNG11.png' 
                         alt='' 
                         className='logo'
                        />
                </Link>
                {/* Logo */}

                {/* Search box */}
                <div className='headerSearch'>
                    <input type='text'
                    className='headerSearchInput' />
                    <SearchIcon className='headerSearchIcom' />
                </div>
                {/* Search box */}
                
                {/* Links */}
                <div className='headerNavBar'>
                   {/* Signout/Signout */}
                   <Link to="/Login" className='headerLink'>
                      <div className='headerOptions'>
                         <span className='headerOption_One'>Hello</span>
                         <span className='headerOption_Two'>Guest</span>
                      </div>
                   </Link>

                    {/* Return Order */}
                    <Link to="/Orders" className='headerLink'>
                      <div className='headerOptions'>
                         <span className='headerOption_One'>Return</span>
                         <span className='headerOption_Two'>Order</span>
                      </div>
                   </Link>
                    {/* Prime */}
                    <Link to="/" className='headerLink'>
                      <div className='headerOptions'>
                         <span className='headerOption_One'>Try</span>
                         <span className='headerOption_Two'>Prime</span>
                      </div>
                   </Link>
                    {/* Profile */}
                    <Link to="/Profile" className='headerLink'>
                      <div className='headerOptions'>
                         <span className='headerOption_One'>Your</span>
                         <span className='headerOption_Two'>Profile</span>
                      </div>
                   </Link>
                    {/* Basket */}
                    <Link to="/Cart" className='headerLink'>
                      <div className='headerOptions_Basket'>
                         <ShoppingBasketIcon/>
                         <span className='headerOption_Two basketCount'>4</span>
                      </div>
                   </Link>

                </div>
                {/* Links */}
              </div>

              {/* NavBar Bottom */}
              <div className='headerBottom'>
              {/* Address */}
              <div className='headerAddress'>
                <div className='headerAddress_Icon'>
                   <LocationOnIcon/>
                </div>
                <div className='headerOptions'>
                    <span className='headerOption_One'>Deliver To</span>
                    <span className='headerOption_Two'>Easy Coding</span>
                </div>
              </div>
              {/* Header bottom Nav */}
               <div className='headerbottom_Navbar'> 
                  <span>
                    <Link to='/ListProducts' className='headerLink'>All Products
                    </Link>
                  </span>
                  <span>Books</span>
                  <span>New Release</span>
                  <span>Gift Ideas</span>
                  <span>Easy Coding</span>
                  <span>Amazon Pay</span>
               </div>
             </div>
              {/* NavBar Bottom */}
           </nav>
        </>
    );
}

export default Header;