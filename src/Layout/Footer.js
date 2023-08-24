import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import '../style/Footer.css'

const Footer = () => {
    const handleClick = () => {
        window.scrollTo(0, 0);
    };
    return (
        <>
            <div className="Footer">
                <a onClick={handleClick}>
                  <div className="FooterBottomToTop">
                     <ExpandLessIcon className='FooterBottomToTopText'/>
                  </div>
                </a>
                <div className='FooterVerRow'>
                    <div className='FooterVerCol'>
                        <div className='FooterVerColHead'>
                            Get to know us
                        </div>
                        <ul>
                            <li>About</li>
                            <li>Career</li>
                            <li>Services</li>
                            <li>Amazon Cares</li>
                            <li>Gift Products</li>
                        </ul>
                    </div>
                
                
                    <div className='FooterVerCol'>
                        <div className='FooterVerColHead'>
                            Contact Us
                        </div>
                        <ul>
                            <li>Facebook</li>
                            <li>Instagram</li>
                            <li>Twitter</li>
                            <li>GitHub</li>
                        </ul>
                    </div>
                
                
                    <div className='FooterVerCol'>
                        <div className='FooterVerColHead'>
                            Make Money
                        </div>
                        <ul>
                            <li>Amazon Pay</li>
                            <li>Become An Affiliate</li>
                            <li>Sell On Amazon</li>
                            <li>Fullfilment By Amazon</li>
                        </ul>
                    </div>
                </div>
                  <hr/>
                  <div className='FooterLast'>
                    <span className='FooterMess'>
                        Amazone Clone
                    </span>
                  </div>             
            </div>
        </>
    );
}

export default Footer