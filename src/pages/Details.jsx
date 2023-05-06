import React from 'react'
import * as style from "../ui/styles"
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';


function Details() {
  const todoData = useSelector(store => store.todoReducer)
  const { id } = useParams()
  const navigate = useNavigate()
  const thisTodo = todoData.find(todo => todo.id === parseInt(id))
  return (
    <style.DetailContainer>
      <div>
        <style.DetailTitleWrap>
          <style.DetailTitle>{thisTodo.title}</style.DetailTitle>
          <style.DetailID>id:: {thisTodo.id}</style.DetailID>
        </style.DetailTitleWrap>
        <style.DetailBody>{thisTodo.body}</style.DetailBody>
        <style.DetailCloseBtn onClick={() => navigate("/")}>close</style.DetailCloseBtn>
      </div>
    </style.DetailContainer>
  );
}

export default Details