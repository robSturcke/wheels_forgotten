import React from "react"
import Lug from "../../images/lug.svg"

const lug = <img src={Lug} className="list_icon" alt="lug" />

const AboutVehicles = () => (
  <>
    <h2>Some of Our Other Vehicles</h2>
    <p>{lug} 1966 Ford Fairlane. Full frame off restoration in progress. </p>
    <p>
      {lug} 1971 Honda CL175. Dug out of the mud. 4 year restoration in
      progress.
    </p>
    <p>
      {lug} 1997 Harley Davidson Softail Custom. 1 year only paint color, 1 of
      120 made worldwide
    </p>
    <p>
      {lug} 1979 Ford Thunderbird: Bought at auction, road tripped it 400 miles
      home roadkill style. Fixed it up, daily drove it, <strong>sold</strong> to
      collector.
    </p>
    <p>
      {lug} 1971 AMC Matador Sedan. 9000 original miles. Bought at auction. Road
      tripped it home. Cleaned dup and fixed. <strong>Sold</strong> to collector
    </p>
  </>
)

export default AboutVehicles
