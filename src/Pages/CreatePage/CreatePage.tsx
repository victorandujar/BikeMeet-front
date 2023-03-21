import React, { Suspense } from "react";
const CreateForm = React.lazy(
  () => import("../../components/CreateForm/CreateForm")
);
const CreatePageStyled = React.lazy(() => import("./CreatePageStyled"));

const CreatePage = (): JSX.Element => {
  return (
    <Suspense>
      <CreatePageStyled className="create-page">
        <header className="crate-page__title title">
          <h2 className="title__text">Create your event</h2>
        </header>
        <CreateForm />
      </CreatePageStyled>
    </Suspense>
  );
};

export default CreatePage;
