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

  .App .home-btn {
    position: absolute;
    top: 20px;
    left: 0;
  }
  .App .home-btn button {
    background: none;
    border: 2px solid #fff;
    border-radius: 5px;
    border-left: none;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    padding: 3px 3px 1px 1px;
    outline: none;
    cursor: pointer;
  }
  .App .home-btn button i {
    color: #fff;
  }

  .home {
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: baseline;
    align-items: center;
    color: #fff;
  }
  .home .card {
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
  .home .card .players {
    font-family: 'Montserrat', sans-serif;
    max-height: calc(100% - 200px);
    width: 70%;
    margin: 0 auto;
    margin-top: 20px;
    overflow: auto;
    padding: 0 10px;
  }
  .home .card .players::-webkit-scrollbar {
    width: 6px;
    background-color: transparent;
  }
  .home .card .players::-webkit-scrollbar-thumb {
    border-radius: 10px;
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #555;
  }
  .home .card .players .player {
    border-bottom: 1px solid rgba(255, 255, 255, 0.7);
    padding: 20px 5px 8px 5px;
    text-align: left;
    display: flex;
    align-items: center;
    font-size: 16px;
    font-weight: 900;
  }
  .home .card .players .player button {
    font-size: 11px;
    margin-left: auto;
    margin-right: 0;
    cursor: pointer;
    background: none;
    border: none;
    color: white;
  }
  .home .card .players .no-players span {
    margin: 0 auto;
  }
  .home .card .add-player {
    position: absolute;
    bottom: 120px;
    width: 70%;
    left: 50%;
    transform: translateX(-50%);
  }
  .home .card .add-player .player-form {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  .home
    .card
    .add-player
    .player-form
    .switch
    input#male:checked
    ~ .switch__indicator {
    background: #006e73;
    transform: translateX(8px);
  }
  .home
    .card
    .add-player
    .player-form
    .switch
    input#female:checked
    ~ .switch__indicator {
    background: #006e73;
    transform: translateX(37px);
  }
  .home
    .card
    .add-player
    .player-form
    .switch
    input[type='radio']:not(:checked),
  .home .card .add-player .player-form .switch input[type='radio']:checked {
    display: none;
  }
  .home .card .add-player input#user-input {
    min-width: 0;
    width: calc(100% - 103px);
    border: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.9);
    background: none;
    color: #fff;
    padding: 0 5px;
    text-align: center;
    outline: none;
  }
  .home .card .add-player input#user-input::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
  .home .card .add-player button {
    border: none;
    background: none;
    color: rgba(255, 255, 255, 0.9);
    cursor: pointer;
    outline: none;
  }
  .home .card .add-player button i {
    font-size: 15px;
    margin-top: 10px;
  }
  .home .card .start-btn {
    width: 70%;
    height: 70px;
    color: #fff;
    background-color: #212125;
    border: 0;
    border-radius: 10px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 0;
    margin: 30px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    font-weight: 900;
    letter-spacing: 1px;
    font-family: 'Montserrat', sans-serif;
    z-index: -1;
    outline: none;
  }

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

  .truth-dare-card {
    height: 100vh;
    width: 100vw;
  }
  .truth-dare-card .card {
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
  .truth-dare-card .card .shot {
    position: absolute;
    bottom: 120px;
    left: 50%;
    padding: 10px;
    width: 69px;
    transform: translateX(-50%);
    border: 2px solid #fff;
    border-radius: 50px;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-shadow: 0 0 25px 1px #212125;
    z-index: -1;
    cursor: pointer;
  }
  .truth-dare-card .card .shot img {
    margin-left: 50%;
    transform: translateX(-50%);
    width: 35px;
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
    font-family: 'Montserrat', sans-serif;
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
  .truth-dare-card .card .next-round-btn {
    width: 70%;
    height: 70px;
    color: #fff;
    background-color: #212125;
    border: 0;
    border-radius: 10px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 0;
    margin: 30px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    font-weight: 900;
    letter-spacing: 1px;
    font-family: 'Montserrat', sans-serif;
    z-index: -1;
    outline: none;
  }

  /*# sourceMappingURL=App.css.map */
`}`;

export default GlobalStyle;
