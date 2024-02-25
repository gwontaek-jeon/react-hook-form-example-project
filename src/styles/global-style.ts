import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    body {
      margin: 0;
      background-color: #f2f3f3;
      font-family: 'Helvetica Neue', serif;
    }
    
    h1,h2,h3,h4,h5,h6 {
      margin: 0;
    }
    
    p {
      margin: 0
    }

    .flex-column {
      display: flex;
      flex-direction: column;
      row-gap: 20px;
    }

    .flex-row {
      display: flex;
      flex-direction: row;
      column-gap: 20px;
      justify-content: end;
    }

    label {
      font-size: 14px;
      padding-bottom: 4px;
    }
    
    .description {
      color: #545b64;
      font-size: 12px;
      padding-bottom: 4px;
    }
    
    
    
`
