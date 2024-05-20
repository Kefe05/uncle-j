import './company.css'
import company1 from '../assets/company-one.jpg'
import company2 from '../assets/company-two.jpg'
import company3 from '../assets/company-three.jpg'



function Company(){


  return(
    <section className="company-wrapper">
      <div className="company-container">
        <h2>Companies worked with</h2>
        <div className="company">
          <div className="company-image">
            <img src={company3} alt="" />
          </div>
          <div className="company-details">
            <h2>Jerry Ventures</h2>
            <h4>2019  - 2022</h4>
            <h4>Product Manager</h4>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam dolore quia eius voluptatem exercitationem! Dolorem, non. Ipsum officiis hic, asperiores nulla dolores laudantium dignissimos consequatur ducimus modi obcaecati veritatis earum illum, consectetur reprehenderit ipsa aperiam, temporibus rem! Aspernatur excepturi assumenda suscipit ad adipisci! Rerum sunt ut maiores provident dignissimos iure.
            </p>
          </div>
        </div>
        <div className="company">
          <div className="company-image" id='image-one'>
            <img src={company1} alt=""  />
          </div>
          <div className="company-details">
            <h2>Jerry Ventures</h2>
            <h4>2019  - 2022</h4>
            <h4>Product Manager</h4>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam dolore quia eius voluptatem exercitationem! Dolorem, non. Ipsum officiis hic, asperiores nulla dolores laudantium dignissimos consequatur ducimus modi obcaecati veritatis earum illum, consectetur reprehenderit ipsa aperiam, temporibus rem! Aspernatur excepturi assumenda suscipit ad adipisci! Rerum sunt ut maiores provident dignissimos iure.
            </p>
          </div>
        </div>
        <div className="company">
          <div className="company-image">
          <img src={company2} alt="" />
          </div>
          <div className="company-details">
            <h2>Jerry Ventures</h2>
            <h4>2019  - 2022</h4>
            <h4>Product Manager</h4>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam dolore quia eius voluptatem exercitationem! Dolorem, non. Ipsum officiis hic, asperiores nulla dolores laudantium dignissimos consequatur ducimus modi obcaecati veritatis earum illum, consectetur reprehenderit ipsa aperiam, temporibus rem! Aspernatur excepturi assumenda suscipit ad adipisci! Rerum sunt ut maiores provident dignissimos iure.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Company