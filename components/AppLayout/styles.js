import {colors, fonts, breakpoints} from '../../styles/theme'
import { addOpacityToColor } from '../../styles/utils'

import css from 'styled-jsx/css'

const backgroundColor = addOpacityToColor(colors.primary, 0.3)

export const globalStyles = css.global`
        html,
          body {
            radial-gradient(${backgroundColor} 1px, transparent 1px);
            height: 100vh;
            padding: 0;
            margin: 0;
            font-family: ${fonts.base}
            overflow: hidden;
          }
  
          * {
            box-sizing: border-box;
          }

`

export default css`
    div {
      display: grid;
    height: 100vh;
    place-items: center;
    }

    

    main {
        background: ${colors.white};
        box-shadow:0 10px 25px rgba(0,0,0,.1);
        display:flex;
        flex-direction: column;
        width:100%;
        height:100%;
        position: relative;
    overflow-y: auto;
    flex-direction: column;
    overflow-y:auto;
    }
    textarea,input{
      font-family: ${fonts.base}

    }

    @media (min-width: ${breakpoints.mobile}){
        main {
            height:90vh;
            width:${breakpoints.mobile};
        }
    }`;
