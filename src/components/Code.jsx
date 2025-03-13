import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { code1 } from '../codes/header_component_html.js';
import { code2 } from '../codes/styles_scss.js';
import { code3 } from '../codes/_header_scss.js';
import { code4 } from '../codes/home_component._html.js';
import { codeJava } from '../codes/excelJava.js';
import { codeJs } from '../codes/excelJs.js';
import { codePy } from '../codes/excelPy.js';

export const Code = () => {
  const location = useLocation();
  const [endpoint, setEndpoint] = useState('');
  const [type, setType] = useState('');
  const [code, setCode] = useState('');
  const [title, setTitle] = useState('');

  const codeArr = [
    { 'excelJava': codeJava, 'type': "java", title: "Generador Excel, código Java" },
    { 'excelJavascript': codeJs, 'type': "javascript", title: "Generador Excel, código Javascript" },
    { 'excelPython': codePy, 'type': "python", title: "Generador Excel, código Python" },
    { 'header.component.html': code1, 'type': "html", title: null },
    { 'styles.scss': code2, 'type': "css", title: null },
    { '_header.scss': code3, 'type': "css", title: null },
    { 'home.component.html': code4, 'type': "html", title: null },
    {
      '_home.scss': `/* Hero */
.hero {
  padding: 0 0 15em;
  width: 100%;
  height: 80vh;
  background-color: black;
  position: absolute;
  top: 107px;
  left: 0;
  overflow: hidden;

  @keyframes heroAnimation {
    0% {
      opacity: 0;
      animation-timing-function: ease-in;
    }

    12% {
      opacity: 1;
    }

    25% {
      transform: scale(1.2);
    }

    75% {
      opacity: 0;
      transform: scale(1.1);
    }

    100% {
      opacity: 0;
    }
  }

  div {
    width: 100%;
    height: 45vh;
    position: absolute;
    top: 0;
    left: 0;
    background-size: cover;
    background-position: center;
    background-repeat: none;
    opacity: 0;
    animation: heroAnimation 18s infinite;

    @include m1366 {
      height: 100vh;
    }

    &:nth-child(1) {
      background-image: url('#{$home1}');
    }

    &:nth-child(2) {
      background-image: url('#{$home2}');
      animation-delay: 6s;
    }

    &:nth-child(3) {
      background-image: url('#{$home3}');
      animation-delay: 12s;
    }

  }

  .hero-logo {
    position: absolute;
    top: 25%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation: none;
    opacity: 1;
    width: 50%;
    height: auto;
    @include m1366 {
      top: 40%;
    }
  }
}
`, 'type': 'css'
    },
    {
      'footer.component.html': `<footer>
  <div class="group">
    <p>My Pets</p><br>
    <p>
      <img src="../../../assets/icons/map.svg" alt="Icono de mapa">
      &nbsp; Carrera 30, Bogotá D.C
    </p>
    <p>
      <img src="../../../assets/icons/whatsapp.svg" alt="Icono de teléfono">
      &nbsp; +573142015171
    </p>
    <p>
      <img src="../../../assets/icons/mailF.svg" alt="Icono de email">
      &nbsp; natsoftx&#64;gmail.com
    </p>
  </div>
  <div class="group">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13376.225001089715!2d-74.07299294633886!3d4.634100454540533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sco!4v1693320076553!5m2!1ses-419!2sco"
      width="100%" height="100%" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false"
      tabindex="0"></iframe>
  </div>
  <div class="group">
    <div class="flex-center">
      <a href="https://www.facebook.com/natsoftx">
        <img class="rrss" src="../../../assets/icons/facebook.svg" alt="Icono de Facebook">
      </a>
      <a href="https://twitter.com/natsoftx">
        <img class="rrss" src="../../../assets/icons/twitter.svg" alt="Icono de Twitter">
      </a>
      <a href="https://www.youtube.com/@natsoftx">
        <img class="rrss" src="../../../assets/icons/youtube.svg" alt="Icono de Whatsapp">
      </a>
      <a href="https://www.instagram.com/natsoft/">
        <img class="rrss" src="../../../assets/icons/instagram.svg" alt="Icono de Instagram">
      </a>
    </div><br>
    <span class="flex-center">&copy; 2023, Natsoft - rights reserved</span>
  </div>
</footer>`, 'type': "html"
    },
    {
      '_footer.scss': `footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  background-color: $black;
  color: $colG;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @include m1366{
    padding: 0 6em;
    flex-direction: row;
    align-items: flex-start;
  }

  .group {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1em;
    p {
      &:first-child {
        color: $brown;
        font-weight: bold;
      }
    }

    img.rrss {
      height: 48px;
      border-radius: 0.5em;
      margin: 0.1em 1em;
    }
  }

  .flex-center {
    display: flex;
    justify-content: center;
  }
}`, 'type': 'css', title: null
    },
    {
      'galeria.component.html': `<app-spinner *ngIf="spinner"/>
<div class="gallery-container" infiniteScroll (scrolled)="onScrollDown()" >
  <div class="gallery">
    <div *ngFor="let i of catalog; let j=index">
      <div class="gallery-img">
        <span>
          <p *ngIf="!likes.includes(i.id)" class="unlike" (click)="like(i.id)">{{i.likes}}</p>
          <p *ngIf="likes.includes(i.id)">{{i.likes}}</p>
          <p class="visits">{{i.visits}}</p>
        </span>
        <img src="../../../assets/img/{{i.id}}.jpg" alt="" (click)="onLightbox(j, i.id)">
      </div>
    </div>
  </div>
</div>
<div *ngIf="lightbox" class="lightbox">
  <span class="count">{{currentIndex+1}}/{{totalImages}}</span>
  <button class="close-btn" (click)="offLightbox()">
    <i class="far fa-times"></i>
  </button>
  <button class="btn-lightbox-carousel btn-prev" (click)="prev()">
    <i class="fas fa-arrow-circle-left icon-lightbox-carousel icon-prev"></i>
  </button>
  <button class="btn-lightbox-carousel btn-next" (click)="next()">
    <i class="fas fa-arrow-circle-right icon-lightbox-carousel icon-next"></i>
  </button>
  <div class="lightbox-img">
    <img src="../../../assets/img/{{catalog[currentIndex].id}}.jpg" alt="">
  </div>
</div>`, 'type': "html", title: null
    },
    {
      '_gallery.scss': `.gallery-container {
  padding: 1.5em 5em;
  display: flex;
  justify-content: center;


  .gallery {
    display: flex;
    flex-wrap: wrap;
    position: relative;
    justify-content: center;

    .gallery-img {
      width: calc(20% - 20px);
      margin: 10px;
      width: 230px;
      height: 350px;
      border-radius: 20px;
      background-color: lightgray;
      position: relative;
      @include m720{
        width: 200px;
        height: 310px;
      }


      img {
        width: 100%;
        height: 100%;
        border-radius: 20px;
        object-fit: cover;
        cursor: zoom-in;
      }

      span {
        @extend .span;

        p {
          @extend .p;
        }
      }

      &:hover {
        filter: opacity(0.9);
      }
    }
  }

  .masonry {
    .masonry-item {
      margin-bottom: 20px;


      img {
        width: 230px;
        border-radius: 20px;
        cursor: zoom-in;
        display: block;

      }

      span {
        @extend .span;

        p {
          @extend .p;
        }
      }

      &:hover {
        filter: opacity(0.9);
      }
    }
  }
}

.span {
  position: absolute;
  bottom: 0;
  width: 160px;
  height: 35px;
  background-color: rgba(128, 128, 128, 0.6);
  border-radius: 0 20px;
  opacity: 1;
  transition: opacity 0.3s ease-in-out;
  pointer-events: all;
  cursor: default;
  display: flex;
  justify-content: left;
  align-items: center;

}

.p {
  display: inline;
  background-image: url('#{$like}');
  background-position: 10px center;
  background-size: 1.5em;
  background-repeat: no-repeat;
  padding: 2em 0.4em 2em 2.5em;
  color: $colW;
  cursor: default;
  ;

  &.unlike {
    background-image: url('#{$unlike}');
    cursor: pointer;
    ;
  }

  &.visits {
    background-image: url('#{$visits}');
    background-size: 1.4em;
    ;
  }
}`, 'type': 'css', title: null
    },
    {
      '_lightbox.scss': `.display{
  display: flex;
  align-items: center;
  justify-content: center;
}

.lightbox {
  @extend .display;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: $colBT;
  color: $colW;
  overflow: auto;
  z-index: 100;

  .close-btn {
    position: absolute;
    top: 0;
    right: 0;
    padding: 0;
    color: $colW;
    background: 0;
    border: 0;
    cursor: pointer;
    width: 7%;
    height: 10%;
    z-index: 2;
  }

  .count {
    @extend .display;
    position: absolute;
    top: 0;
    left: 0;
    width: 7%;
    height: 10%;
    opacity: 0.7;
    font-size: 18px;
    margin-left: 5px;
  }

  .fa-times {
    font-size: 25px;
  }

  .btn-lightbox-carousel {
    @extend .display;
    position: absolute;
    z-index: 1;
    width: 8%;
    height: 8%;
    padding: 0;
    color: $colW;
    text-align: center;
    background: 0 0;
    border: 0;
    cursor: pointer;
  }

  .btn-prev {
    left: 0;
  }

  .btn-next {
    right: 0;
  }

  .icon-lightbox-carousel {
    opacity: 0.5;
    transition: all 0.15s ease;
  }

  .icon-lightbox-carousel:hover {
    opacity: 0.9;
  }

  .icon-lightbox-carousel:active {
    opacity: 0.5;
  }

  .icon-prev,
  .icon-next {
    font-size: 30px;
  }

  .lightbox-img img {
    width: 100vh;
    height: 100vh;
    object-fit: contain;
    border-radius: .35rem;
    cursor: default;
    padding: 50px;
  }
}`, 'type': 'css', title: null
    },
    {
      'spinner.component.html': `<div class="overlay">
  <div class="lds-ripple"><div></div><div></div></div>
</div>`, 'type': 'html', title: null
    },
    {
      '_spinner.scss': `/// SPINNER ///
.lds-ripple {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-ripple div {
  position: absolute;
  border: 4px solid $brown;
  border-radius: 50%;
  animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
}
.lds-ripple div:nth-child(2) {
  animation-delay: -0.5s;
}
@keyframes lds-ripple {
  0% {
    top: 36px;
    left: 36px;
    width: 0;
    height: 0;
    opacity: 0;
  }
  4.9% {
    top: 36px;
    left: 36px;
    width: 0;
    height: 0;
    opacity: 0;
  }
  5% {
    top: 36px;
    left: 36px;
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    top: 0px;
    left: 0px;
    width: 72px;
    height: 72px;
    opacity: 0;
  }
}

.overlay {
  display: flex;
  align-items:start;
  justify-content: center;
  position: fixed;
  padding-top: 100px;
  top: 109px;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0);
  overflow: auto;
  z-index: 99;
  animation: overlayAnimation 5s linear forwards;
}
@keyframes overlayAnimation {
  80% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
}`, 'type': 'css', title: null
    },
    {
      'login.component.html': `<section class="home">
  <div class="modal" *ngIf="showLogin">
    <div class="form_container">
      <img class="form_close" src="../../../assets/icons/xmark.svg" width="20px" (click)="closeLogin()">
      <div class="login_form">
          <h2>Login</h2>
          <div class="input_box">
            <input class="correo" type="email" [(ngModel)]="correo" placeholder="Ingrese correo" />
          </div>
          <div class="input_box">
            <input class="password" type="password" [(ngModel)]="password" placeholder="Password" />
            <i class=" password"></i>
          </div>
          <button type="submit" class="button" (click)="login()">Ingresar</button>
          <div class="login_signup">¿No tienes cuenta? <a href="#" routerLink="/register"> Registrarse</a></div>
      </div>
    </div>
  </div>
</section>`, 'type': 'html', title: null
    },
    {
      '_login.scss': `.modal {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
}

.home {
  position: absolute;
  height: 90vh;
  width: 100%;
  background-image: url("../assets/pet.jpg");
  background-size: cover;
  background-position: center;
  pointer-events:all;
  z-index: 99;
  cursor:pointer;
}

.form_container {
  position: fixed;
  max-width: 320px;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(1.2);
  background: #fff;
  padding: 25px;
  border-radius: 12px;

  &.active .login_form {
    display: block;
  }

  .form_close {
    position: absolute;
    top: 10px;
    right: 20px;
    color: $black;
    opacity: 0.8;
    cursor: pointer;
  }

  h2 {
    font-size: 22px;
    color: $brown;
    text-align: center;
  }

  .input_box {
    position: relative;
    margin-top: 30px;
    width: 100%;
    height: 40px;

    input {
      height: 100%;
      width: 100%;
      border: none;
      outline: none;
      padding: 0 30px;
      color: #333;
      transition: all 0.2s ease;
      border-bottom: 1.5px solid #aaaaaa;

      &.correo {
        background-image: url('#{$mailL}');
        background-size: 20px;
        background-repeat: no-repeat;
        background-position: 0 11px;
        padding-left: 3em;
      }
      &.password {
        background-image: url('#{$keyL}');
        background-size: 20px;
        background-repeat: no-repeat;
        background-position: 0 11px;
        padding-left: 3em;
      }

      &:focus {
        border-color: $brown;
      }
    }
  }

  .button {
    background: $brown;
    margin-top: 30px;
    width: 100%;
    padding: 10px 0;
    border-radius: 10px;
    color: white;
    border: 0;

    &:hover {
      background: $brownH
    }
  }

  .login_signup {
    font-size: 12px;
    text-align: center;
    margin-top: 15px;
  }
}`, 'type': 'css', title: null
    }
  ];

  useEffect(() => {
    init();
  },);

  function init() {
    setEndpoint(location.pathname.split('/')[2]);
    setCode(findFile(codeArr, endpoint));
    setType(findType(codeArr, endpoint));
    setTitle(findTitle(codeArr, endpoint));
  }

  function findFile(code, endpoint) {
    for (var i = 0; i < code.length; i++) {
      if (endpoint in code[i]) {
        return code[i][endpoint];
      }
    }
    return null;
  }

  function findType(code, endpoint) {
    for (var i = 0; i < code.length; i++) {
      if (endpoint in code[i]) {
        return code[i]['type'];
      }
    }
    return null;
  }

  function findTitle(code, endpoint) {
    for (var i = 0; i < code.length; i++) {
      if (endpoint in code[i]) {
        return code[i]['title'];
      }
    }
    return null;
  }

  return (
    <>

      <div className="code-container">
        <h2>{title === null ? endpoint : title}</h2>
        <br />
        <SyntaxHighlighter className="code" language={type} style={atomOneDark}
          showLineNumbers={true}
          lineNumberStyle={{ fontSize: "0.7em" }}>
          {code}
        </SyntaxHighlighter>
      </div>

    </>
  );
};