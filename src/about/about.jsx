import './about.css';
import about1 from '../assets/about-one.jpg'
import about2 from '../assets/about-two.jpg'

function About(){



  return(
    <section className="about-container">
      <div className="about-wrapper">
        <h3 className='about-name'>About Me</h3>
        <div className="about-content">
         
          <div className="about-ctn">
            <div className='ctn'>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, corporis nesciunt asperiores a obcaecati et sapiente, magni odit amet. Deleniti animi deserunt, veritatis velit reiciendis magnam vero esse? Eos repudiandae quia excepturi tempore sit quis odit aut molestiae perferendis est, exercitationem quo. Tempore eum repudiandae totam vero asperiores, debitis, praesentium harum repellat unde autem minus minima eveniet quibusdam perferendis distinctio quas !</p>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.  ratione labore modi officia, consequatur explicabo iusto voluptatum nobis dolorum dignissimos amet error deserunt! Aliquam labore iure, voluptatum voluptatibus unde sit explicabo corporis veritatis vel. Dolores id quaerat reprehenderit omnis </p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, ipsam, consequatur ducimus voluptate velit cum illum, quidem delectus dolorem quibusdam omnis quos rem similique sapiente totam molestias? Ducimus dicta omnis iusto voluptatum voluptates tempore architecto fugit </p>
            </div>
            <div className="about-image-container">
              <img src={about1} alt="" />
            </div>
          </div>
          <div className="about-ctn">
            <div className="about-image-container">
              <img src={about2} alt="" />
            </div>
            <div className='ctn'>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, corporis nesciunt asperiores a obcaecati et sapiente, magni odit amet. Deleniti animi deserunt, veritatis velit reiciendis magnam vero esse? Eos repudiandae quia excepturi tempore sit quis odit aut molestiae perferendis est, exercitationem quo. Tempore eum repudiandae totam vero asperiores, debitis, praesentium harum repellat unde autem minus minima eveniet quibusdam perferendis distinctio quas !</p>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.  ratione labore modi officia, consequatur explicabo iusto voluptatum nobis dolorum dignissimos amet error deserunt! Aliquam labore iure, voluptatum voluptatibus unde sit explicabo corporis veritatis vel. Dolores id quaerat reprehenderit omnis </p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, ipsam, consequatur ducimus voluptate velit cum illum, quidem delectus dolorem quibusdam omnis quos rem similique sapiente totam molestias? Ducimus dicta omnis iusto voluptatum voluptates tempore architecto fugit </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About