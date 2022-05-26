import {colors, fonts, breakpoints} from '../../styles/theme'
import { addOpacityToColor } from '../../styles/utils'

import css from 'styled-jsx/css'

const backgroundColor = addOpacityToColor(colors.primary, 0.3)

export const globalStyles = css.global`
        html,
          body {
            background-image:
            radial-gradient(${backgroundColor} 1px, transparent 1px);
            radial-gradient(${backgroundColor} 1px, transparent 1px);
            background-position: 0 0 25px 25px;
            background-size: 50px 50px;
            padding: 0;
            margin: 0;
            font-family: ${fonts.base}
          }
  
          * {
            box-sizing: border-box;
          }

`

export default css`
    div {
        display: grid;
        place-items:center;
        height: 100vh;
    }

    main {
        background: ${colors.primary};
        border-radius:10px;
        box-shadow:0 10px 25px rgba(0,0,0,.1);
        width:100%;
        height:110%;
        background-image:url("beer.png");
    }

    @media (min-width: ${breakpoints.mobile}){
        main {
            height:100vh;
            width:${breakpoints.mobile};
        }
    }`
