import * as React from "react"

const SvgComponent = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" {...props}>
    <defs>
      <style>{".cls-1{fill:#231f20}"}</style>
    </defs>
    <g id="pencil">
      <path
        className="cls-1"
        d="m21.84 5-4.31-3.62a1.17 1.17 0 0 0-.87-.27 1.15 1.15 0 0 0-.8.42L3.1 16.65a.54.54 0 0 0-.11.26l-.84 6.44a.5.5 0 0 0 .49.56h.15L9 22a.47.47 0 0 0 .24-.15L22 6.69A1.19 1.19 0 0 0 21.84 5zm-.62 1L8.56 21l-5.32 1.7.76-5.51 12.66-15a.21.21 0 0 1 .27 0l4.27 3.59a.19.19 0 0 1 .02.27z"
      />
      <path
        className="cls-1"
        d="M15 5.75a.51.51 0 0 0-.71.06.49.49 0 0 0 .06.7l3.05 2.61a.49.49 0 0 0 .32.12.52.52 0 0 0 .38-.17.51.51 0 0 0-.1-.71z"
      />
    </g>
  </svg>
)

export default SvgComponent
