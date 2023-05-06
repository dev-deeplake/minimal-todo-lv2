import React from 'react'
import * as style from "../ui/styles"

// const ModalWrapper = styled.div`
//   /* display: ${(props) => (props.show ? 'block' : 'none')}; */
//   position: fixed;
//   z-index: 1;
//   left: 0;
//   top: 0;
//   width: 100%;
//   height: 100%;
//   overflow: auto;
//   background-color: rgba(0, 0, 0, 0.4);
// `;

// const ModalContent = styled.div`
//   background-color: #fefefe;
//   margin: 15% auto;
//   padding: 20px;
//   border: 1px solid #888;
//   width: 80%;
// `;

// const CloseButton = styled.span`
//   color: #aaaaaa;
//   float: right;
//   font-size: 28px;
//   font-weight: bold;
//   cursor: pointer;

//   &:hover,
//   &:focus {
//     color: #000;
//     text-decoration: none;
//     cursor: pointer;
//   }
// `;

function Details() {
  const onClose = () => {}
  return (
    <style.DetailContainer>
      <div>
        <style.DetailTitleWrap>
          <style.DetailTitle>title</style.DetailTitle>
          <style.DetailID>id:: id</style.DetailID>
        </style.DetailTitleWrap>
        <style.DetailBody>test</style.DetailBody>
        <style.DetailCloseBtn>close</style.DetailCloseBtn>
      </div>
    </style.DetailContainer>
    // <ModalWrapper>
    //   <ModalContent>
    //     <CloseButton onClick={onClose}>&times;</CloseButton>
    //     <h2>test</h2>
    //     <p>test</p>
    //     <p>ID: test</p>
    //   </ModalContent>
    // </ModalWrapper>
  );
}

export default Details