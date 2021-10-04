import React from 'react'
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="footer">
            <div className="container text-center">
                {/* <Link className="cc-facebook btn btn-link" to="#"><i className="fa fa-facebook fa-2x "
                    aria-hidden="true"></i>
                </Link> */}
                <Link className="cc-twitter btn btn-link " to="#"><i className="fa fa-twitter fa-2x "
                    aria-hidden="true"></i>
                </Link>
                <Link className="cc-google-plus btn btn-link" to="#"><i className="fa fa-google-plus fa-2x"
                    aria-hidden="true"></i>
                </Link>
                <Link className="cc-instagram btn btn-link" to="#"><i className="fa fa-instagram fa-2x "
                    aria-hidden="true"></i>
                </Link>
            </div>
            <div className="h4 title text-center" style={{color:"#378c3f"}}>MEGANDAR kHAN S</div>
            {/* <div className="text-center text-muted">
                <p>&copy; Creative CV. All rights reserved.<br />Design - <Link className="credit" to="https://templateflip.com"
                    target="_blank">TemplateFlip</Link></p>
            </div> */}
        </footer>
    )
}

export default Footer
