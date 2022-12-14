import { useRecoilValue } from "recoil";
import charCountState from "./charCountState";

function CharacterCount() {
  const count = useRecoilValue(charCountState);

  return <>Character Count: {count}</>;
}

export default CharacterCount;
