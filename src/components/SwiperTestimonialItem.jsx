import React from "react";

import { getFirstLetterName } from "../utils/index";
import { Icon } from "./Icon";

import "../styles/components/_swiperTestimonialItem.scss";

const iconId = "quote";

export const SwiperTestimonialItem = ({ avatar, name, description, rates }) => {
  return (
    <div className="swiper-testimonial-item">
      <div className="avatar" style={{ backgroundColor: avatar }} title={name}>
        <p className="avatar-name">{getFirstLetterName(name)}</p>
      </div>
      <p className="description">{description}</p>
      <div className="icon-field">
        <Icon id={iconId} className={"icon"} />
      </div>
    </div>
  );
};
