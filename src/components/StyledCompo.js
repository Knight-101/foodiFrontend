import { Link } from "react-router-dom";
import styled from "styled-components";

const styledHeader = styled.div`
  position: absolute;
  top: 2vw;
  width: 100%;
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  background-color: #0d8f8f;
  padding: 0.3rem 0.8rem;
  margin-top: 1.5rem;
  height: 2.7rem;
  border-radius: 5px;
  color: White;
  :hover {
    background-color: #0d8f8f;
    transition: 0.5s;
    color: White;
  }
`;

export default styledHeader;
export { StyledLink };
