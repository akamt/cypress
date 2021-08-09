import useEventList from "../hooks/useEventList";

const ReactUsePage = (): JSX.Element => {
  const list = useEventList();

  return <pre>{JSON.stringify(list, null, 4)}</pre>;
};

export default ReactUsePage;
