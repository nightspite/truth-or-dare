import { createGlobalStyle, css } from 'styled-components';

const GlobalStyle = createGlobalStyle`${css`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html {
    font-size: 62.5%;
  }

  body {
    padding: 0;
    font-size: 1.6rem;
    font-family: 'Montserrat', sans-serif;
    margin: 0;
  }

  /* APP */

  .truth-or-dare {
    height: 100vh;
    width: 100vw;
  }
  .truth-or-dare .card {
    width: 80%;
    height: 80%;
    border: 3px solid #fff;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    border-radius: 15px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  .truth-or-dare .card .truth-link {
    text-decoration: none;
  }
  .truth-or-dare .card .truth-link .truth {
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    height: 50%;
    border-bottom: 1.5px solid #fff;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    font-weight: 900;
    font-size: 8vw;
    letter-spacing: 10px;
    color: #fff;
  }
  .truth-or-dare .card .dare-link {
    text-decoration: none;
  }
  .truth-or-dare .card .dare-link .dare {
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    height: 50%;
    border-top: 1.5px solid #fff;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    font-weight: 900;
    font-size: 8vw;
    letter-spacing: 10px;
    color: #fff;
  }
  .truth-or-dare .card .player {
    display: flex;
    justify-content: center;
    flex-direction: column;
    position: absolute;
    left: 50%;
    height: 50px;
    padding: 0 20px;
    transform: translate(-50%, -50%);
    background: #fff;
    border: 3px solid #fff;
    border-radius: 25px;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    color: #444;
    text-align: center;
    font-size: 20px;
    font-weight: 900;
  }

  .truth-dare-card .card .label {
    position: absolute;
    left: 50%;
    padding: 0 20px;
    transform: translate(-50%, -50%);
    text-align: center;
    font-size: 20px;
    font-weight: 900;
    color: #444;
    background: #fff;
    border: 3px solid #fff;
    border-radius: 25px;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    z-index: 2;
  }
  .truth-dare-card .card .content {
    height: 50%;
    font-weight: 500;
    letter-spacing: 1.5px;
    text-align: center;
    padding: 0 10%;
  }
  .truth-dare-card .card .content p {
    position: relative;
    top: 50%;
    transform: translateY(-50%);
  }

  .truth-dare-card .card .modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    border-radius: 15px;
  }
  .truth-dare-card .card .modal .modal-main {
    position: fixed;
    background: white;
    width: 80%;
    height: auto;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #444;
    padding: 15px;
    border-radius: 15px;
    text-align: center;
  }
  .truth-dare-card .card .modal .modal-main p:nth-child(2) {
    font-size: 24px;
    margin: 10px 0;
    font-weight: 900;
  }
  .truth-dare-card .card .modal .modal-main button {
    background: transparent;
    margin: 10px 0 5px 0;
    padding: 5px 10px;
    border: 2px solid #444;
    border-radius: 10px;
    letter-spacing: 1px;
  }

  .truth-dare-card .card .modal.display-block {
    display: block;
  }
  .truth-dare-card .card .modal.display-none {
    display: none;
  }
`}`;

export default GlobalStyle;
