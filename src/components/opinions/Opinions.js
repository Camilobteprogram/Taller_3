import './Opinions.css';
import persona1 from "./user1.png";
import persona2 from "./user2.png";
import persona3 from "./user3.png";
function Opinions(){
    return(
      // Falta aplicar las estrellas con react

      
        <section className="starred" id="opiniones">
        <h1 className="title-starred">Nuestros usuarios dicen...</h1>
        <div className="container-votes">
          <div className="vote">
            <div className="info-profile-vote">
              <img
                src={persona1}
                alt=""
                className="img-vote"
              />
              <div>
                <h6 className="name-vote">Diego Rodriguez</h6>
                <p className="stars">
                  <span><i className="fa-solid fa-star"></i></span
                  ><span><i className="fa-solid fa-star"></i></span
                  ><span><i className="fa-solid fa-star"></i></span
                  ><span><i className="fa-solid fa-star"></i></span
                  ><span><i className="fa-solid fa-star" id="icon-star"></i></span>
                </p>
              </div>
            </div>
            <p className="description-vote">
              Lore ipsum dolor sit amet, consectet adipiscing elit. Elit quis enim ultrices ullamcorper. Nuc aenean auctor vel diam dictum.
            </p>
          </div>
          <div className="vote">
            <div className="info-profile-vote">
              <img
                src={persona2}
                alt=""
                className="img-vote"
              />
              <div>
                <h6 className="name-vote">Diana García</h6>
                <p className="stars">
                  <span><i className="fa-solid fa-star"></i></span>
                  <span><i className="fa-solid fa-star"></i></span>
                  <span><i className="fa-solid fa-star"></i></span>
                  <span><i className="fa-solid fa-star"></i></span>
                  <span><i className="fa-solid fa-star"></i></span>
                </p>
              </div>
            </div>
            <p className="description-vote">
              Lore ipsum dolor sit amet, consectet adipiscing elit. Elit quis enim ultrices ullamcorper. Nuc aenean auctor vel diam dictum.
            </p>
          </div>
          <div className="vote">
            <div className="info-profile-vote">
              <img
                src={persona3}
                alt=""
                className="img-vote"
              />
              <div>
                <h6 className="name-vote">Oscar Balderrama</h6>
                <p className="stars">
                  <span><i className="fa-solid fa-star"></i></span
                  ><span><i className="fa-solid fa-star"></i></span
                  ><span><i className="fa-solid fa-star"></i></span
                  ><span><i className="fa-solid fa-star"></i></span
                  ><span><i className="fa-solid fa-star" id="icon-star"></i></span>
                </p>
              </div>
            </div>
            <p className="description-vote">
              Lore ipsum dolor sit amet, consectet adipiscing elit. Elit quis enim ultrices ullamcorper. Nuc aenean auctor vel diam dictum.
            </p>
          </div>
        </div>
      </section>
    )
}
export default Opinions;