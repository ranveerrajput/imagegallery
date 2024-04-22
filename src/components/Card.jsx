import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Card = ({ cardData }) => {
  return (
    <div className="card">
      <div className="card_info">
        <div className="card_header">
          <span>
            <LazyLoadImage
              src={cardData.user.profile_image.medium}
              alt={cardData.user.username}
              className="profile_photo"
            />
          </span>

          <h5>{cardData.user.username}</h5>
        </div>

        <LazyLoadImage
          src={cardData.urls.small}
          alt={cardData.alt_description}
          className="photo"
          width="200px"
          height="150px"
          effect="blur"
        />
        <div className="hover-block">
          <div>
            {" "}
            <span className="likes">
              ❤️{cardData.user.total_likes} {cardData.user.name}{" "}
            </span>
          </div>

          <p>Total Photos : {cardData.user.total_photos}</p>
          <p></p>
        </div>

        <p>Bio : {cardData.user.bio || cardData.alt_description}</p>
      </div>
    </div>
  );
};

export default Card;
