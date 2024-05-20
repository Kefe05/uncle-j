import './comment.css'
import comment from '../assets/comment.jpg'


function Comment(){
  return(
    <section className="comment-wrapper">
      <div className="comment-container">
        <h2>Comments</h2>
        <div className="comments">
          <div className="row" id='one'>
            <div className="comment">
            <div className="comment-person">
              <div className="comment-image">
              <img src={comment} alt="" />
              </div>
              <div className="comment-person-details">
              <h3>John Doe </h3>
              <h4>Ceo of Doe foundations</h4>
              </div>
            </div>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste quia laudantium ut repudiandae. Esse, incidunt sunt officia accusamus reprehenderit natus vel veritatis, reiciendis, delectus exercitationem eaque aliquam facere! Sed, est.
              </p>
            </div>
            <div className="comment">
            <div className="comment-person">
              <div className="comment-image">
              <img src={comment} alt="" />
              </div>
              <div className="comment-person-details">
              <h3>John Doe </h3>
              <h4>Ceo of Doe foundations</h4>
              </div>
            </div>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste quia laudantium ut repudiandae. Esse, incidunt sunt officia accusamus reprehenderit natus vel veritatis, reiciendis, delectus exercitationem eaque aliquam facere! Sed, est.
              </p>
            </div>
            <div className="comment">
            <div className="comment-person">
              <div className="comment-image">
              <img src={comment} alt="" />
              </div>
              <div className="comment-person-details">
              <h3>John Doe </h3>
              <h4>Ceo of Doe foundations</h4>
              </div>
            </div>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste quia laudantium ut repudiandae. Esse, incidunt sunt officia accusamus reprehenderit natus vel veritatis, reiciendis, delectus exercitationem eaque aliquam facere! Sed, est.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="comment">
            <div className="comment-person">
              <div className="comment-image">
              <img src={comment} alt="" />
              </div>
              <div className="comment-person-details">
              <h3>John Doe </h3>
              <h4>Ceo of Doe foundations</h4>
              </div>
            </div>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste quia laudantium ut repudiandae. Esse, incidunt sunt officia accusamus reprehenderit natus vel veritatis, reiciendis, delectus exercitationem eaque aliquam facere! Sed, est.
              </p>
            </div>
            <div className="comment">
            <div className="comment-person">
              <div className="comment-image">
              <img src={comment} alt="" />
              </div>
              <div className="comment-person-details">
              <h3>John Doe </h3>
              <h4>Ceo of Doe foundations</h4>
              </div>
            </div>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste quia laudantium ut repudiandae. Esse, incidunt sunt officia accusamus reprehenderit natus vel veritatis, reiciendis, delectus exercitationem eaque aliquam facere! Sed, est.
              </p>
            </div>
            <div className="comment">
            <div className="comment-person">
              <div className="comment-image">
              <img src={comment} alt="" />
              </div>
              <div className="comment-person-details">
              <h3>John Doe </h3>
              <h4>Ceo of Doe foundations</h4>
              </div>
            </div>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste quia laudantium ut repudiandae. Esse, incidunt sunt officia accusamus reprehenderit natus vel veritatis, reiciendis, delectus exercitationem eaque aliquam facere! Sed, est.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Comment