
function Footer() {

    return (
        <>
          <div className="footer-div">
            <div className="footer-div1">
                <h2>Pokegames.GG</h2>
                <p className="footer-p">where the fun never stops!</p>
            </div>
            <div className="footer-div2">
                <div className="footer-div2-div1">
                  <i className="fa-brands fa-instagram fa-3x"></i>
                  <i className="fa-brands fa-github fa-3x"></i>
                  <i className="fa-brands fa-linkedin fa-3x"></i>
                </div>
                <div className="footer-div2-div2">
                  <p className="copyright">Copyright &copy; {new Date().getFullYear()} <u>Akshansh Vaishnav</u> All rights reserved</p>
                </div>
            </div>
          </div>
        </>
    )
  }
  
  export default Footer