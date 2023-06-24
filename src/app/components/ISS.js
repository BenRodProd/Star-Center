
import Controls from "./Controls";
import Map from "./ISSMap";
import useSWR from "swr";
import styled from "styled-components";
const URL = "https://api.wheretheiss.at/v1/satellites/25544";

const Main = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding:2rem;
`;

export default function ISSTracker() {
    const fetcher = (url) => fetch(url).then((r) => r.json());
  const { data, error, isloading, mutate } = useSWR(URL, {
    refreshInterval: 1000, fetcher
  });

 
  if (!data) {
    return <div>Is Loading...</div>;
  }

  return (
    <Main>
      <Map longitude={data.longitude} latitude={data.latitude} />
      <Controls
        longitude={data.longitude}
        latitude={data.latitude}
       
      />
    </Main>
  );
}