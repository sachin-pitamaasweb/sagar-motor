import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./EventGallery.css";

import { Jalandhar } from "./helpers/Jalandhar";
import { Ludhiana } from "./helpers/Ludhiana";

function EventSection({ title, events }) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }
  return (
    <div className="event-section">
      <h3 className="section-title">{title}</h3>
      <Slider {...settings}>
        {events.map((event) => (
          <div key={event.id} className="gallery-card">
            <div className="image-container">
              <img src={event.src || "/placeholder.svg"} alt={event.alt} className="gallery-image" />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}

function EventGallery() {
  const events = {
    Jalandhar,
    Ludhiana,
  }

  return (
    <div className="gallery-container">
      <div className="gallery-wrapper">
        <h2 className="gallery-title">Latest Events</h2>
        <EventSection title="Jalandhar" events={events.Jalandhar } />
        <EventSection title="Ludhiana" events={events.Ludhiana} />
        {/* <EventSection title="Patiala" events={events.mp} />
        <EventSection title="Ludhiana" events={events.up} /> */}
      </div>
    </div>
  )
}

export default EventGallery

