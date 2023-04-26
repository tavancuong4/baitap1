import axios from "axios";

let api = "https://swapi.dev/api/starships";
let getData = [];

export const callAPIStarWar = async () => {
  do {
    let dataURL = await axios.get(api);
    api = dataURL.data.next;

    console.log("CallAPI STARWAR:");
    console.log(dataURL.data.results);
    const results = await dataURL.data.results;
    getData = [...getData, ...results];
  } while (api);

  //   console.log("366666 CallAPI STARWAR:");
  //   console.log(getData);
  return getData;
};
