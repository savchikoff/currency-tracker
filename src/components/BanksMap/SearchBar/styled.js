import styled from "styled-components";

export const SearchContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 48px;
`;

export const SearchWrapper = styled.div`
    width: 250px;
`

export const SearchInput = styled.input`
    font-family: inherit;
    font-weight: 300;
    width: 100%;
    border: none;
    border-bottom: 2px solid #474747;
    outline: 0;
    font-size: 17px;
    color: #FFFFFF;
    padding: 7px 0;
    background: transparent;
    transition: border-color 0.2s;
    &:focus{
        font-weight: 400;
        border-image: linear-gradient(90deg, #00CE2C 0.18%, #AEDF23 49.3%, #A3DC00 99.88%);
        border-image-slice: 1;
    }
    position: relative;
    z-index: 2;

    @media (max-width: 500px){
        font-size: 12px;
    }
`;

export const ResultListContainer = styled.div`
    position: absolute;
    z-index: 1;
    width: 250px;
`

export const ResultList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const ResultItem = styled.li`
  font-size: 14px;
  padding: 16px 32px;
  border: 1px solid #474747;
  background-color: #202025;

  @media (max-width: 500px){
    font-size: 12px;
    padding: 8px 16px;
}
`;
