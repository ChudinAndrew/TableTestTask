import styled from "styled-components";

export const HeaderWrapper = styled.div`
  /* display: flex; */
  /* margin-top: 50%; */
  /* width:800px; */
  /* align-items:center; */
  /* justify-content:space-evenly; */
  display: flex;
  justify-content: space-around;
  margin-left:30px;
  margin-bottom: 10px;
  .lbl {
    /* margin: 5px 18px; */
    font-weight: bold;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  /* justify-content:center; */
  /* flex-direction:column; */
  width: 482px;
  /* text-align:center; */
  /* width:800px; */
  flex-wrap: wrap;
  /* > input {
    width: 100px;
    height:30px;
    text-align: center;
    border: 1px solid #555555;
    font-size:24px;
  } */
`;
export const TableInput = styled.input`
  text-align: center;
  outline: none;
  height: 30px;
  font-weight: bold;
  /* :focus{ */
  /* outline:1px solid grey; */
  /* outline-radius:5px; */
  /* } */
`;
export const TableWrapperTest = styled.div`
  width: 750px;
  margin: 0 auto;
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
  margin-top: 20%;
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
export const RowWrap = styled.div`
display:flex;
align-items:center;
.numb{
  font-size:25px;
  margin-right:5px;
}
`