import { render } from "solid-js/web";

function App() {
  return (
    <>
      <style>{`
        *,
        *::after,
        *::before {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
          font-family: sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
            'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue';
        }

        a {
          -webkit-tap-highlight-color: transparent;
        }

        html {
          scroll-behavior: smooth;
          scrollbar-width: thin;
          scrollbar-color: transparent transparent;
        }

        body {
          height: 100vh;
          width: 100%;
          display: flex;
          flex-wrap: wrap;
          place-content: center;
        }

        @font-face {
          font-family: 'Thats Font Folks!';
          src: url('https://manzdev.github.io/cursos-assets/thats-font-folks.woff2')
              format('woff2'),
            url('https://manzdev.github.io/cursos-assets/thats-font-folks.woff')
              format('woff');
        }

        body {
          margin: 0;
          width: 100%;
          height: 100vh;
          background-color: red;
          background-image: radial-gradient(
              circle 600px,
              #003 24%,
              #fff9 22% 25%,
              transparent 30% 100%
            ),
            repeating-radial-gradient(circle 100px, #fff9 0% 3%, red 45%, #af0b0b);
          background-repeat: no-repeat;
          overflow-x: hidden;
        }

        .title {
          filter: invert(1);
          transform: scale(2.3);
        }

        @media (width <= 1111px) {
          .title {
            transform: scale(1);
          }
        }
      `}</style>
      <img class="title" src="assets/end.png" alt="end" />
    </>
  );
}

const root = document.createElement("div");
document.body.appendChild(root);
render(() => <App />, root);
