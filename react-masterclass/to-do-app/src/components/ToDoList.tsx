import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { atom, useRecoilValue } from "recoil";
import { toDoSelector, toDoState } from "../atom";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";
function ToDoList() {
  const [toDo, doing, done] = useRecoilValue(toDoState);
  const selectorOutput = useRecoilValue(toDoSelector);
  console.log(selectorOutput);
  return (
    <div>
      <h1>To Dos</h1>
      <hr />
      <CreateToDo />
      <h2>To Do</h2>
      <ul>
        {toDo.map((toDO) => (
          <ToDo key={toDO.id} {...toDO} />
        ))}
      </ul>
      <hr />
      <h2>Doing</h2>
      <ul>
        {doing.map((toDO) => (
          <ToDo key={toDO.id} {...toDO} />
        ))}
      </ul>
      <hr />
      <h2>Done</h2>
      <ul>
        {done.map((toDO) => (
          <ToDo key={toDO.id} {...toDO} />
        ))}
      </ul>
      <hr />
    </div>
  );
}
export default ToDoList;
