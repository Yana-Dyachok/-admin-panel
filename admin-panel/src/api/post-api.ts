import { IBicycle, IBicycleData } from "../types/interface";
export const createBicycle = async (body: IBicycle): Promise<IBicycleData> =>
    (
      await fetch(`https://bicycleapi.onrender.com/api/bicycle/save`, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
          'Content-Type': 'application/json',
        },
      })
    ).json();
  
  export default createBicycle;