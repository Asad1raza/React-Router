import { Suspense, lazy, useState } from "react";
import Reducer from "./Reducer";

// Lazy load User component
const User = lazy(() => import("./User"));

function App() {
  const [load, setLoad] = useState(false);

  return (
    <>
      <Reducer />
      <br /><br />
      <div>
        <h1>Lazy Loading</h1>

        {load ? (
          <Suspense fallback={<h3>Loading....</h3>}>
            <User />
          </Suspense>
        ) : null}

        <button onClick={() => setLoad(true)}>Load User</button>
        <button onClick={() => setLoad(false)}>Remove User</button>
      </div>
    </>
  );
}

export default App;
