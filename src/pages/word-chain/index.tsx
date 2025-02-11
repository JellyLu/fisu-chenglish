import { useEffect, useState } from "react";
import deepSeekApi from "../../api/deep-seek";

const WordChain = () => {
  const [msg, setMsg] = useState("");
  const systemMsg = "You are a helpful assistant.";

  useEffect(() => {
    deepSeekApi.sendSingleMsg(systemMsg)
      .then((res) => {
        setMsg(res);
      })
  }, []);

  return (
    <div>
      <div>system</div>
      <div>{systemMsg}</div>
      <div>you</div>
      <div>{msg}</div>
    </div>
  );
};

export default WordChain;