import { ErrorBoundary } from "react-error-boundary";
import { useEffect, useState } from "react";

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>message: {error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
}

const ErrorComponent = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    setCount(count + 1);

    if (count >= 1) throw new Error("ERROR!!!");
  };

  return (
    <div>
      <p>error</p>
      <button onClick={fetchData}>button</button>
    </div>
  );
};

const myErrorHandler = (error: Error, info: { componentStack: string }) => {
  console.error("Handle Error", error);
  console.log(info.componentStack);
};

const ErrorBoundaryPage = () => (
  <ErrorBoundary
    FallbackComponent={ErrorFallback}
    onReset={() => {
      console.log("try again!");
    }}
    onError={myErrorHandler}
  >
    <ErrorComponent />
  </ErrorBoundary>
);

export default ErrorBoundaryPage;
