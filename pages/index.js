import Head from 'next/head';
import React, { useEffect, useState } from 'react';

export default function Home() {
  const [screens, setScreens] = useState([
    {
      text: 'Hello Bill!  I hear its your birthday!  Would you like to help me with some research?',
      img: 'images/prof-oak-2.png',
      backButton: '<<',
      nextButton: 'Yes!'
    },
    {
      text: 'Lets go!',
      img: 'images/prof-oak.png',
      backButton: '<<',
      nextButton: 'Okay!'
    },
    {
      text: 'This is the world of pokemon.  There are many different types of pokemon all with strengths and weaknesses.',
      img: 'images/world-map.png',
      backButton: '<<',
      nextButton: 'Next'
    },
    {
      text: 'Fire type pokemon are strong against grass type pokemon, but they are weak against water type pokemon',
      img: 'images/fire-type-pokemon.jpg',
      backButton: '<<',
      nextButton: 'Next'
    },
    {
      text: 'Water type pokemon are strong against fire type pokemon, but are weak against grass type pokemon',
      img: 'images/water-type-pokemon.jpg',
      backButton: '<<',
      nextButton: 'Next'
    },
    {
      text: 'Grass type pokemon are strong against water type pokemon, but are weak against fire type pokemon',
      img: 'images/grass-type-pokemon.jpg',
      backButton: '<<',
      nextButton: 'Next'
    },
    {
      text: 'I want to study a few pokemon of different types.  This will help us become better pokemon trainers.  Will you help me?',
      img: 'images/prof-oak-2.png',
      backButton: '<<',
      nextButton: 'Yes!'
    },
    {
      text: 'Great!',
      img: 'images/prof-oak.png',
      backButton: '<<',
      nextButton: 'Okay!'
    },
    {
      text: 'First I want to start with a grass type pokemon called Bulbasaur',
      img: 'images/bulbasaur.png',
      backButton: '<<',
      nextButton: 'Okay!'
    },
    {
      text: 'Grass type pokemon love...grass!  They also love plants.',
      img: 'images/grass.png',
      backButton: '<<',
      nextButton: 'Okay!'
    },
    {
      text: 'Another trainer sent me this picture and said she saw some bulbasaur near by.  Can you check out this location?',
      img: 'images/grass.png',
      backButton: '<<',
      nextButton: 'Okay!'
    },
    {
      text: 'You caught a Bulbasaur?',
      img: 'images/prof-oak-2.png',
      backButton: '<<',
      nextButton: 'Yes!'
    },
    {
      text: 'Great!',
      img: 'images/prof-oak.png',
      backButton: '<<',
      nextButton: 'Next'
    },
    {
      text: 'Next up is Squirtle!',
      img: 'images/squirtle.png',
      backButton: '<<',
      nextButton: 'Okay!'
    },
    {
      text: 'Squirtle is a water type pokemon, so he loves being by water.',
      img: 'images/water-landscape.png',
      backButton: '<<',
      nextButton: 'Next'
    },
    {
      text: 'My student Ash found some Squirtle near this location.  Can you check it out?',
      img: 'images/water-landscape.png',
      backButton: '<<',
      nextButton: 'Yes!'
    },
    {
      text: 'You caught a Squirtle?',
      img: 'images/prof-oak-2.png',
      backButton: '<<',
      nextButton: 'Yes!'
    },
    {
      text: 'Great!',
      img: 'images/prof-oak.png',
      backButton: '<<',
      nextButton: 'Next'
    },
    {
      text: 'Next up is Charmander!',
      img: 'images/charmander.png',
      backButton: '<<',
      nextButton: 'Okay!'
    }
  ]);

  const [currentScreen, setCurrentScreen] = useState(0);
  const [showNext, setShowNext] = useState(true);
  const [onFirstScreen, setOnFirstScreen] = useState(true);

  function handleNextClick() {
    setShowNext(false);

    setTimeout(() => {
      setShowNext(true);
    }, 1000);

    if (currentScreen < screens.length - 1) {
      setCurrentScreen(currentScreen + 1);
    }
  }

  function handlePreviousClick() {
    if (currentScreen > 0) {
      setCurrentScreen(currentScreen - 1);
    }
  }

  function getConatinerClass() {
    if (onFirstScreen) {
      return 'container-splash';
    }

    return 'container';
  }

  function handleSplashClick() {
    setOnFirstScreen(false);
  }

  return (
    <div className={getConatinerClass()}>
      <Head>
        <title>Happy Birthday Bill!</title>
      </Head>

      {onFirstScreen && <main className="huge" onClick={handleSplashClick}>
        <div className="splash-text">Happy Birthday Bill!</div>
        <img className="center" src="images/happy-birthday-splash.png" />
      </main>}

      {!onFirstScreen && <main>
        {/* <h1 className="title">
          Test Site
        </h1> */}
        <div className="prompt">
          {screens[currentScreen].text}
        </div>

        {/* <div className="prompt" dangerouslySetInnerHTML={{ __html: screens[currentScreen].text.replace(/ /g, '&nbsp;') }}>

        </div> */}

        <div className="img-container">
          <img src={screens[currentScreen].img} />
        </div>
        <footer>
          {<button onClick={handlePreviousClick}>{screens[currentScreen].backButton}</button>}
          {screens[currentScreen].nextButton && showNext && <button onClick={handleNextClick}>{screens[currentScreen].nextButton}</button>}
        </footer>
      </main>}



      <style jsx>{`


        body {
          overflow: hidden;
        }

        .center {
          position: fixed;
          top: 50%;
          left: 50%;
          translate: (-50%, -50%);
          transform: translate(-50%, -50%);
        }

        .huge {
          min-height: 20000px;
        }

        .splash-text {
          position: absolute;
          z-index: 10000;
        }


        main {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 100%;
          height: 100%;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
          padding-bottom: 16px;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }





        .container-splash {
          background-color: white;
        }


        .container {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          
        }

        h1 {
          margin-top: 0;
        }

        img {
          max-width: 100%;
        }

        .img-container {
          position: fixed;
          bottom: -30px;
          z-index: 0;
        }

        .img-container {
          position: relative;
          bottom: 0;
          z-index: 0;
        }


        .prompt {
          border: 2px solid #B3A125;
          border-radius: 5px;
          width: 90%;
          padding: .5em;
          margin: 12px;
          background: white;
          min-height: 140px;
          position: relative;
          z-index: 10000;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 22px;
        }

        footer {
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          background: #3B4CCA;
          color: white;
          border-top: 2px solid black;

          width: 100%;
          height: 100px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 20px;
        }

        button {
          padding: 12px 30px;
          background: #CC0000;
          color: #fff;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
          font-size: 20px;
          border: 0;
          width: 30%;
          border: 1px solid #000;
          border-radius: 5px;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;

          min-height: 10000px;
          background: white;
          overflow: hidden;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}

/*
Pokemon Red - #FF0000
Pokemon Uni Red - #CC0000
Pokemon Cerulean Blue - #3B4CCA
Pokemon Yellow - #FFDE00
Pokemon Gold Foil - #B3A125
*/