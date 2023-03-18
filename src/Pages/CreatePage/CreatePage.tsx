import CreateForm from "../../components/CreateForm/CreateForm";
import CreatePageStyled from "./CreatePageStyled";

const CreatePage = (): JSX.Element => {
  return (
    <CreatePageStyled className="create-page">
      <header className="crate-page__title title">
        <h2 className="title__text">Create your event</h2>
      </header>
      <CreateForm />
    </CreatePageStyled>
  );
};

export default CreatePage;
