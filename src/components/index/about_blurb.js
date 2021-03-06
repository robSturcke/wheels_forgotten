import { Link } from "gatsby"
import React from "react"
import Fairlane from "../../images/index/fairlane"

const AboutBlurb = () => (
  <>
    <div className="py-1">
      <div className="border-bottom" />
    </div>
    <h3 className="hero_sub_header">
      Focusing on the un-loved, weird, or just plain old-fashioned. If it has
      wheels and an engine we're probably interested.
    </h3>
    <div className="py-3">
      <Fairlane />
      <figure className="figure">
        <figcaption className="figure-caption">
          1966 Ford Fairlane. Full frame off restoration in progress. 1982 Honda
          FT500 Ascot.
        </figcaption>
      </figure>
    </div>
    <div className="pb-1">
      <h4 className="hero_sub_header">
        While motorcycles are our true passion; cars, trucks, tractors, go karts
        and everything in between come along with the territory.
      </h4>
    </div>
    <Link className="float-right" to="about">
      Read More...
    </Link>
  </>
)

export default AboutBlurb
