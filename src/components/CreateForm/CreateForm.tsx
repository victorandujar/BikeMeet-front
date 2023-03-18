import ButtonForm from "../ButtonForm/ButtonForm";
import CreateFormStyled from "./CreateFormStyled";

const CreateForm = (): JSX.Element => {
  return (
    <CreateFormStyled className="create-form">
      <div className="create-form__field field">
        <label htmlFor="name" aria-label="name" className="field__name">
          Event name
        </label>
        <input
          type="text"
          id="name"
          placeholder="Introduce an event name"
          className="field__data"
        />
      </div>
      <div className="create-form__col2 col2">
        <div className="create-form__field field">
          <label
            htmlFor="distance"
            aria-label="distance"
            className="col2__name"
          >
            Distance
          </label>
          <input
            type="number"
            id="distance"
            placeholder="Km"
            className="col2__data"
          />
        </div>
        <div className="create-form__field field">
          <label htmlFor="surface" aria-label="surface" className="col2__name">
            Type of surface
          </label>
          <select
            id="surface"
            placeholder="Surface"
            className="col2__data"
          ></select>
        </div>
      </div>
      <div className="create-form__field field">
        <label htmlFor="date" aria-label="date" className="field__name">
          Date of event
        </label>
        <input
          type="date"
          placeholder="Enter a valid date"
          id="date"
          className="field__data date"
        />
      </div>
      <div className="create-form__field field">
        <label
          htmlFor="description"
          aria-label="description"
          className="field__name"
        >
          Description
        </label>
        <textarea
          id="description"
          placeholder="Add a description"
          className="field__data description"
        />
      </div>
      <div className="create-form__field field">
        <label htmlFor="image" aria-label="image" className="field__name">
          Add an image
        </label>
        <input
          type="file"
          aria-label="image"
          id="image"
          className="field__data file"
        />
      </div>
      <ButtonForm isDisabled={false} text={"create event"} />
    </CreateFormStyled>
  );
};

export default CreateForm;
