import "./App.css";
import Field from "./components/Field/Field";
import Information from "./components/Information/Information";
import { useState, useEffect } from "react";
import { store } from "./store";

const AppLayout = () => {
  return (
    <>
      <Information />
      <Field />
      <button
        className="restart-btn"
        onClick={() => {
          store.dispatch({ type: "RESTART_GAME" });
        }}
      >
        Начать заново
      </button>
    </>
  );
};

function App() {
  const [state, setState] = useState(store.getState());
  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      setState(store.getState());
    });
    return () => unsubscribe();
  });
  return <AppLayout />;
}

export default App;
