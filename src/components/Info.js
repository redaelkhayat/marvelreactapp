import React from "react";
import PropTypes from "prop-types";

import Loader from "./Loader";

const Info = ({
  fetching,
  id,
  name,
  description,
  thumbnail,
  comics,
  series
}) => {
  if (fetching) {
    return <Loader />;
  }
  return (
    <div className="row">
      <div className="col-md-4 col-sm-5">
        <div className="thumbnail">
          <img src={`${thumbnail.path}.${thumbnail.extension}`} />
        </div>
      </div>
      <div className="col-md-8 col-sm-7">
        <h2>{name}</h2>
        {description && <p>{description}</p>}
        <div className="row">
          {comics &&
            comics.items.length > 0 && (
              <div className="col-md-6">
                <h4>Comics</h4>
                <ul className="list-group small">
                  {comics.items.map(({ name, resourceURI }, index) => {
                    return (
                      <li key={`comic-${index}`} className="list-group-item">
                        {name}
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
          {series &&
            series.items.length > 0 && (
              <div className="col-md-6">
                <h4>Series</h4>
                <ul className="list-group small">
                  {series.items.map(({ name, resourceURI }, index) => {
                    return (
                      <li key={`serie-${index}`} className="list-group-item">
                        {name}
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
        </div>
      </div>
    </div>
  );
};

const itemsPropTypes = PropTypes.shape({
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      resourceURI: PropTypes.string
    })
  )
});

Info.propTypes = {
  fetching: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  thumbnail: PropTypes.shape({
    path: PropTypes.string.isRequired,
    extension: PropTypes.string.isRequired
  }),
  comics: itemsPropTypes,
  series: itemsPropTypes
};

export default Info;
