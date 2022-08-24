import React from "react"
import ContentLoader from "react-content-loader"

const Sceleton = () => (
  <ContentLoader 
    className="pizza-block"
    speed={2}
    width={280}
    height={460}
    viewBox="0 0 280 460"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <circle cx="138" cy="135" r="125" /> 
    <rect x="0" y="288" rx="4" ry="4" width="280" height="24" /> 
    <rect x="4" y="427" rx="0" ry="0" width="85" height="69" /> 
    <rect x="111" y="428" rx="15" ry="15" width="165" height="31" /> 
    <rect x="0" y="327" rx="12" ry="12" width="277" height="88" />
  </ContentLoader>
)

export default Sceleton