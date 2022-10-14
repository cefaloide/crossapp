import { useInfo } from "../store/context";

const ListView = () => {
  const { state, dispatch } = useInfo();

  const resetInfo = () => {
    dispatch({ type: "reset" });
  };

  return (
    <div>
      {state.storedInfo.map((element, index) => (
        <div key={index}>
          <div>Reps: {element.reps}</div>
          <div>Text: {element.text}</div>
          <div>{element.dateTime}</div>
          ------
        </div>
      ))}
      <div
        style={{
          border: "1px solid black",
          borderRadius: "5px",
          display: "inline-block",
          padding: "10px",
          background: "coral",
        }}
        onClick={resetInfo}
      >
        Reset
      </div>
    </div>
  );
};

export default ListView;
