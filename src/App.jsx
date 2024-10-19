import "./App.css";
import { AppLayout } from "./components";
import { useState, useEffect } from "react";
import { store } from "./store";

function App() {
  const [state, setState] = useState(store.getState());

  const onRestart = () => {
    store.dispatch({ type: "RESTART_GAME" });
  };

  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      setState(store.getState());
    });
    return () => unsubscribe();
  });
  return <AppLayout onRestart={onRestart} />;
}

export default App;
