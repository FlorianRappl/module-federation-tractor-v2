import React from "react";
import Router from "./Router";

const Loading = () => (
  <div className="loader-frame">
    <span className="loader" />
  </div>
);

const App = () => {
  return (
    <React.Suspense fallback={<Loading />}>
      <Router />
    </React.Suspense>
  );
};

export default App;
