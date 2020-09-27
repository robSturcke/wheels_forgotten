import React from "react"
import Layout from "../components/layout"
import AboutWF from "../components/about/about_wf"
import AboutVehicles from "../components/about/about_vehicles"
import SEO from "../components/seo"
import InnerContainers from "../components/inner_containers"
import Insta from "../components/insta"
import KawasakiGSXR from "../images/about/kawawsaki_gsxr"
import FordCrownCarousel from "../components/about/ford_crown_carousel"
import Chevy4400Carousel from "../components/about/chevy_4400_carousel"
import DetomasoCarousel from "../components/about/detomaso_carousel"
import VoyagerCarousel from "../components/about/voyager_carousel"

const About = () => (
  <div>
    <Layout>
      <SEO title="About Wheels Forgotten and Phil Jones" />
      <div className="wrap">
        <InnerContainers>
          <div className="col-md-4">
            <div className="pt-3">
              <KawasakiGSXR />
            </div>
            <figure className="figure">
              <figcaption className="figure-caption">
                2009 Kawasaki Versys and 1996 GSXR-100W: Full Restorations
              </figcaption>
            </figure>
          </div>
          <div className="col-md-8">
            <AboutWF />
          </div>
          <div className="col-md-6">
            <div className="pt-3">
              <Chevy4400Carousel />
              <figure className="figure">
                <figcaption className="figure-caption">
                  1957 Chevrolet 4400: Found rotting in a farm field. Shortened,
                  6lug, flatbed, 4spd sm420, custom wiring harness and dash, 350
                  swap in progress, 12 bolt swap in progress
                </figcaption>
              </figure>
            </div>
          </div>
          <div className="col-md-6">
            <div className="pt-3">
              <FordCrownCarousel />
              <figure className="figure">
                <figcaption className="figure-caption">
                  1999 Ford Crown Victoria LX: PI heads and cam swap, 3.73 trac
                  lock, 1 piece aluminum driveshaft, hand ported manifold,
                  shaved body work and marauder spoiler...
                </figcaption>
              </figure>
            </div>
          </div>
          <div className="col-md-6">
            <div className="py-3">
              <DetomasoCarousel />
              <figure className="figure">
                <figcaption className="figure-caption">
                  1981 Dodge Omni DeTomaso. 1 of 600 made. Possibly the nicest
                  most complete one left in existence. Found seriously
                  neglected. Fixed the rust, restored the original paint,{" "}
                  <strong>sold</strong> to a L body enthusiast.
                </figcaption>
              </figure>
            </div>
          </div>
          <div className="col-md-6">
            <div className="py-3">
              <VoyagerCarousel />
              <figure className="figure">
                <figcaption className="figure-caption">
                  1988 Plymouth Voyager LE. Garage find. Found preserved after
                  sitting over 4 years. Lowered 3”, 1991 6G72 swap, 10:1
                  Diamante Pistons, head work, custom exhaust
                </figcaption>
              </figure>
            </div>
          </div>
          <div className="col-md-12">
            <AboutVehicles />
            <Insta />
          </div>
        </InnerContainers>
      </div>
    </Layout>
  </div>
)

export default About
