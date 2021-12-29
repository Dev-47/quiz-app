import "../../assets/scss/style.scss";

const { useEffect } = React;

const loader = document.querySelector(".loader");

// if you want to show the loader when React loads data again
const showLoader = () => loader.classList.remove("loader--hide");

const hideLoader = () => loader.classList.add("loader--hide");

const App = ({ hideLoader }) => {
  useEffect(hideLoader, []);

  return <div></div>;
};

// the setTimeout simulates the time it takes react to load, and is not part of the solution
setTimeout(
  () =>
    // the show/hide functions are passed as props
    ReactDOM.render(
      <App hideLoader={hideLoader} showLoader={showLoader} />,
      document.getElementById("app")
    ),
  7000
);
