import Head from 'next/head'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Happy Birthday Bill!</title>
      </Head>

      <main>
        {/* <h1 className="title">
          Test Site
        </h1> */}
        <div className="prompt">
          Hello Bill!  Would you like to help me with some research?
        </div>

        <div className="img-container">
          {/* <img src="images/pokeball.png" />

          <img src="images/prof-oak.png" /> */}

          {/* <img src="images/family.jpg" /> */}
          <img src="images/prof-oak-3.png" />
        </div>
        <footer>
          <button>Back</button>
          <button>Next</button>
        </footer>
      </main>



      <style jsx>{`
        main {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
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






        .container {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background-color: rgb(247,247,247);
        }

        h1 {
          margin-top: 0;
        }

        img {
          max-width: 100%;
        }

        .img-container {
          position: fixed;
          bottom: -5px
        }


        .prompt {
          border: 2px solid #B3A125;
          border-radius: 5px;
          width: 90%;
          padding: 1em;
          margin: 12px;
          background: white;
          min-height: 150px;
          position: relative;
          z-index: 10000;
          display: flex;
          align-items: center;
          font-size: 24px;
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
          background: rgb(247, 247, 247);
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