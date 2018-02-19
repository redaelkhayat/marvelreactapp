import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Hero = ({ id, name, thumbnail, urls }) => {
  return <div className="thumbnail">
      <div className="embed-responsive embed-responsive-4by3" style={{
          backgroundImage: `url(${thumbnail.path}.${thumbnail.extension})`,
          backgroundSize: "cover",
          backgroundPosition: "bottom center"
      }} />
      <div className="caption">
        <Link to={`/${id}`}>
          <h5>{name}</h5>
        </Link>
        {urls && <ul className="list-inline">
            {urls.map(({ type, url }, index) => {
              return <li key={`${id}-url-${index}`}>
                  <a className="btn btn-xs btn-default" href={url} target="_blank">
                    {type}
                  </a>
                </li>;
            })}
          </ul>}
      </div>
    </div>;
};

Hero.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  thumbnail: PropTypes.shape({
    path: PropTypes.string.isRequired,
    extension: PropTypes.string.isRequired
  }),
  urls: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired
    })
  )
};

export default Hero;
