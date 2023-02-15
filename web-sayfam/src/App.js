import React from 'react';
import './App.css';
import Linkedin from './linkler';
import image from "./hasanppp.png";




function PersonalWebsite() {
  return (
    <body>
      <div className='mavi'>
        <yesil className="yesil"></yesil>
        <header className='ad'>Hasan Keklik</header>
        <section className='acilis'>
          <container className="acilis-sol">
            <p className='rol'>I am a Frontend Developer...</p>
            <p className='rol-aciklama'>...who likes to craft solid and scalable frontend products with great user experiences.</p>
            <buttons className="butonlar">
              <a href='https://github.com/haskek' target={"_blank"} className='github-buton'>
                <butonyazı className="github-buton-yazı">GitHub</butonyazı>
              </a>
              <a href='https://www.linkedin.com/in/hasan-keklik-88a094109/' target={"_blank"} className='linkedin-buton'>
                <butonyazı className="linkedin-buton-yazı">LinkedIn</butonyazı>
              </a>

            </buttons>

          </container>
          <container className="acilis-sag"></container>
        </section>

      </div>

      <section className='yetkinlikler-kutusu'>
        <h1 className='skills'>Skills</h1>
        <container className="skillbox1">
          <js className="js">
            <jslogo className="js-logo"> </jslogo>
            <p className='jsyazi'>JAVASCRIPT</p>
          </js>
          <js className="js">
            <jslogo className="js-logo"> </jslogo>
            <p className='jsyazi'>REACT</p>
          </js>
          <js className="js">
            <jslogo className="js-logo"> </jslogo>
            <p className='jsyazi'>REDUX</p>
          </js>

        </container>
        <container className="skillbox2">
          <js className="js">
            <jslogo className="js-logo"> </jslogo>
            <p className='jsyazi'>NODE</p>
          </js>
          <js className="js">
            <jslogo className="js-logo"> </jslogo>
            <p className='jsyazi'>VSCODE</p>
          </js>
          <js className="js">
            <jslogo className="js-logo"> </jslogo>
            <p className='jsyazi'>FIGMA</p>
          </js>

        </container>
      </section>


      <section className='profil'>
        <h1 className='profiladı'>Profile</h1>
        <container className="profilkutusu">
          <container className="profilsol">
            <p className='basic'>Basic Information</p>
            <container className="infocuk">
              <container className="ilkyari">
                Doğum tarihi
                İkamet Şehri
                Eğitim Durumu
                Tercih Ettiği Rol

              </container>
              <container className="ikinciyari">
                17.03.1999
                Istanbul
                Sabancı Ünv. Psikoloji Lisans, 2022,
                Frontend, UI
              </container>


            </container>



          </container>
          <container className="profilorta">

          </container>
          <container className="profilsag">
            <p className='aboutme'>About Me</p>
            <p className='aboutme2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia.

              Mnima accusamus ratione soluta aperiam sit voluptate? Dicta quod deserunt quam temporibus cumque magnam!</p>

          </container>

        </container>
      </section>
      <section className='projeler'>
        <h1 className='projectsadi'>Projects</h1>
        <container className="ilkproje">
          <container className="ikinciprojefoto">

          </container>
          <container className="ikinciprojesag">
            <proje1ad className='proje1ad'>Journey</proje1ad>
            <p className='proje1yazi'> A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible. </p>
            <techstack className="techstack">
              <pill className="pill">
                <text className='text'> React </text>
              </pill>
              <pill className="pill">
                <text className='text'> Redux </text>
              </pill>
              <pill className="pill">
                <text className='text'> Vercel </text>
              </pill>
            </techstack>
            <wiew className='wiew'>
              View Site
            </wiew>
            <wiew className='wiew2'>
              Github
            </wiew>
          </container>



        </container>
        <container className="ikinciproje">
          <container className="ikinciprojefoto">

          </container>
          <container className="ikinciprojesag">
            <proje1ad className='proje1ad'>Workintech</proje1ad>
            <p className='proje1yazi'> A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible. </p>
            <techstack className="techstack">
              <pill className="pill">
                <text className='text'> React </text>
              </pill>
              <pill className="pill">
                <text className='text'> Redux </text>
              </pill>
              <pill className="pill">
                <text className='text'> Vercel </text>
              </pill>
            </techstack>
            <wiew className='wiew'>
              View Site
            </wiew>
            <wiew className='wiew2'>
              Github
            </wiew>
          </container>



        </container>

      </section>

      <footer className='footer'>
        <footercontent className="footercontent">
          <message className="message">Send me a mesage!</message>
          <question className="question">Got a question or proposal, or just want
          to say hello? Go ahead.</question>
          <mail className="mail"> hasan_keklik1@hotmail.com </mail>


        </footercontent>
      </footer>

    </body>



  );
}

export default PersonalWebsite;