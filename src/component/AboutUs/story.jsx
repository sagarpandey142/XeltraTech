import React from "react";
import "./story.css";
import story_pic from "../images/story_pic.png";

function story() {
  return (
    <div className="story-body">
      <div className="story-header">
        <div className="story-header-top">
          <span>Our </span> Story
        </div>
        <div className="story-header-bottom">
          Xeltratech delivers innovative web and mobile app development, SEO,
          digital marketing, and app maintenance.
        </div>
      </div>

      <div className="story-content-box">
        <div className="story-content-photo">
          <img src={story_pic} />
        </div>
        <div className="story-content-text">
          Xeltratech is a top-tier software services company, dedicated to
          providing innovative digital solutions tailored to meet the evolving
          needs of businesses. Our expertise spans web and mobile app
          development, where we create seamless, high-performing, and scalable
          applications for various industries. Whether you're a startup looking
          for your first digital product or an enterprise seeking advanced
          solutions, we craft customized experiences that drive success. We
          specialize in WordPress development, offering custom themes, plugins,
          and optimization services to enhance website functionality and
          performance. Additionally, our SEO and digital marketing services
          ensure strong online visibility, helping businesses rank higher on
          search engines, attract more traffic, and increase conversions. Beyond
          development, we provide app maintenance services, ensuring that
          applications remain updated, secure, and optimized for peak
          performance. Our UI/UX design team focuses on creating visually
          appealing and user-friendly interfaces, enhancing customer engagement
          and satisfaction. At Xeltratech, we don’t just build apps; we create
          future-ready solutions that align with business goals, improve
          efficiency, and foster growth. With a customer-centric approach, we
          transform ideas into reality, empowering businesses worldwide with
          robust, efficient, and cutting-edge software solutions.
        </div>
      </div>
    </div>
  );
}

export default story;
