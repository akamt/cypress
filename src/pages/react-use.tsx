import useEventList from "../hooks/useEventList";
import usePromiseDemo from "../hooks/usePromise";

const ReactUsePage = (): JSX.Element => {
  const list = useEventList();

  const json = usePromiseDemo({
    promise: fetch(
      "https://dashboard.e-stat.go.jp/api/1.0/Json/getRegionInfo?&RegionCode=00000,13100"
    ),
  });

  return (
    <>
      <p>{json}</p>
      <pre>{JSON.stringify(list, null, 4)}</pre>
    </>
  );
};

export default ReactUsePage;
