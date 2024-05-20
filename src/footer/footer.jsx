import './footer.css'



function Footer(){
  return(
    <footer className='footer-container'>
      <div className="footer-wrapper">
        <div className="footer-logo">
          Jerry Sami
        </div>
        <div className="footer-address">
          <h2>Address</h2>
          <address>
            Lorem ipsum dolor sit amet consecteturbr 
            <br /> adipisicing elit. Modi ex quaerat <br />doloremque nulla quis nemo.
          </address>
        </div>
        <div className="contact">
          <h2>Contacts</h2>
          <div><span>facebook</span></div>
          <div><span>instagram</span></div>
          <div><span>LinkedIn</span></div>
          <div><span>johndoe@gmail.com</span></div>
        </div>
      </div>
    </footer>
  )
}

export default Footer