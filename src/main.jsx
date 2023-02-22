import React from "react";
import ReactDOM from "react-dom/client";
//import HooksApp from './Components/HooksApp'
//import CounterWithCustomHook from './Components/useState/CounterWithCustomHook'
//import SimpleForm from './Components/useEffect/SimpleForm'
import "./body.css";
//import { CallBackHook } from "./Components/memos/CallBackHook";
//import { Padre } from "./Components/tarea-memo/Padre";
//import { MemoHook } from "./Components/memos/MemoHook";
//import { Memorize } from "./Components/memos/Memorize";
//import { Layout } from "./Components/useLayoutEffect/Layout";
//import { MultipleCustomHooks } from "./Components/examples/MultipleCustomHooks";
//import { FocusScreen } from "./Components/useRef/FocusScreen";
//import FormWithCustomHook from './Components/useEffect/FormWithCustomHook'

//import CounterApp from './Components/useState/CounterApp'
//import './Components/useReducer/intro-reducer.js';
import { TodoApp } from "./Components/useReducer/TodoApp";

ReactDOM.createRoot(document.getElementById("root")).render(
  <TodoApp />
);
