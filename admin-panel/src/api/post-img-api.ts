import { IImgRequest} from "../types/interface";
export const createImg = async (body: IImgRequest): Promise<string[]> =>
    (
      await fetch(`https://bicycleapi.onrender.com/api/bicycle/images/save`, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
          'Content-Type': 'application/json',
        },
      })
    ).json();
  
  export default createImg;