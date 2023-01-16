import styled from "styled-components";

export const HeaderWrapper = styled.div`
  display: flex;
  margin-top: 50%;
  /* width:800px; */
  /* align-items:center; */
  /* justify-content:space-around; */
  .lbl {
    margin: 5px 18px;
  }
`;

export const InputWrapper = styled.div`
  /* display:flex; */
  /* justify-content:center; */
  width: 432px;
  /* text-align:center; */
  /* width:800px; */
  flex-wrap: wrap;
  > input {
    width: 100px;
    text-align: center;
    border: 1px solid #555555;
  }
`;
export const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
export const TableWrapper = styled.div`
  .btn {
    margin: 10px;
    background-color: #555555;
    border: none;
    color: white;
    padding: 5px 11px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
  }
  /* display:flex; */
`;
export const Error = styled.div`
  display: flex;
  /* width:432px; */
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  color: red;
  margin: 10px 3px;
  .err {
    margin: 2px 0;
  }
`;
