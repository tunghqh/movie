import { AiOutlinePlayCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import apiConfig from "../../api/apiConfig";
import { category } from "../../api/tmdbApi";

import "./MovieCart.scss";

function MovieCart(props) {
  const item = props.item;
  const link = "/" + category[props.category] + "/" + item.id;
  const bg = apiConfig.w500Image(item.poster_path || item.backdrop_path);
  return (
    <Link to={link}>
      <div className="movie-card" style={{ backgroundImage: `url(${bg})` }}>
    
          <AiOutlinePlayCircle className="btn-play" />
      
      </div>
      <h3>{item.title || item.name}</h3>
    </Link>
  );
}

export default MovieCart;
