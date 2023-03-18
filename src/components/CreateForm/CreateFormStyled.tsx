import styled from "styled-components";

const CreateFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: 19px;
  width: 100%;

  .field {
    display: flex;
    flex-direction: column;
    gap: 6px;

    &__data {
      width: 100%;
      height: 3.0625rem;
      border: 1px solid #000;
      border-radius: 12px;
      padding: 10px;
    }
  }

  .col2 {
    display: flex;
    justify-content: space-between;
    width: auto;

    &__data {
      width: 7.8rem;
      height: 3.0625rem;
      border: 1px solid #000;
      border-radius: 12px;
      padding: 10px;
      font-family: inherit;
    }
  }

  textarea {
    resize: none;
    font-family: inherit;
  }

  .description {
    height: 100px;
  }

  .date,
  .file {
    font-family: inherit;
  }
`;

export default CreateFormStyled;
