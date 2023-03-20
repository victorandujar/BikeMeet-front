import styled from "styled-components";

const DetailPageStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.6875rem;
  font-family: ${(props) => props.theme.fonts.secondary};
  width: 100%;
  height: 100%;

  .detail-page {
    min-height: 100vh;
  }
`;

export default DetailPageStyled;
