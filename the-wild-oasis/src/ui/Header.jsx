import styled from "styled-components";

const StyledHeader = styled.header`
  background-color: var(--color-grey-0);
  padding: 1.2rem 4.8rem;
  border-bottom: 10px solid var(--color-100);
`;

export default function Header() {
  return <StyledHeader>Header</StyledHeader>;
}
