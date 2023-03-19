import { useState } from "react";
import useEvents from "../../hooks/useEvents/useEvents";
import { EventCreateStructure } from "../../types/events/types";
import ButtonForm from "../ButtonForm/ButtonForm";
import CreateFormStyled from "./CreateFormStyled";
import { optionsSelect } from "./optionsSelect";

const CreateForm = (): JSX.Element => {
  const { createEvent } = useEvents();

  const [name, setName] = useState("");
  const [distance, setDistance] = useState("");
  const [type, setType] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState<File | string>("");

  const handleName = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setName(value);
  };

  const handleDistance = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setDistance(value);
  };

  const handleType = ({
    target: { value },
  }: React.ChangeEvent<HTMLSelectElement>) => {
    setType(value);
  };

  const handleDate = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setDate(value);
  };

  const handleDescription = ({
    target: { value },
  }: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(value);
  };

  const handleImage = ({
    target: { files },
  }: React.ChangeEvent<HTMLInputElement>) => {
    if (files !== null) {
      setImage(files[0]);
    }
  };

  const onSubmitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newEvent: EventCreateStructure = {
      date,
      description,
      distance,
      image,
      name,
      type,
    };

    await createEvent(newEvent);
  };

  return (
    <CreateFormStyled className="create-form" onSubmit={onSubmitHandler}>
      <div className="create-form__field field">
        <label htmlFor="name" aria-label="name" className="field__name">
          Event name
        </label>
        <input
          type="text"
          id="name"
          placeholder="Introduce an event name"
          className="field__data"
          onChange={handleName}
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
            onChange={handleDistance}
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
            onChange={handleType}
          >
            {optionsSelect.map((option) => (
              <option value={option.type} key={option.key}>
                {option.name}
              </option>
            ))}
          </select>
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
          onChange={handleDate}
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
          onChange={handleDescription}
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
          onChange={handleImage}
          placeholder="Add an image"
        />
      </div>
      <ButtonForm isDisabled={false} text={"create event"} />
    </CreateFormStyled>
  );
};

export default CreateForm;
