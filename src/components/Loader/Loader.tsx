import LoadingStyled from "./LoaderStyled";

const Loader = (): JSX.Element => {
  return (
    <LoadingStyled className="loader">
      <div className="pulsar" aria-label="The page is loading"></div>
    </LoadingStyled>
  );
};

export default Loader;
