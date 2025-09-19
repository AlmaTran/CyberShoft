
import { TProductAPI } from "src/pages/home/convert";
import { axiosWithoutAuth } from "./axios.config";
import { IDetailAPI } from "src/pages/home/detail/type";

/**
 * sau khi CallAPI thì return về giá trị
 */

// export const getAllProduct = () => {
//   return new Promise((resolve, reject) => {
//     axiosWithoutAuth("/Product")
//       .then((resp) => {
//         resolve(resp.data.content);
//       })
//       .catch(reject);
//   });
// };

// kết quả trả về trong function async là một promise
export const getAllProduct = async (): Promise<TProductAPI[]> => {
  try {
    const resp = await axiosWithoutAuth("/Product");
    return resp.data.content;
  } catch (error: any) {
    throw new Error(error)
  }
}

export const getProductById = async (id: string):Promise<IDetailAPI> => {
  try {
    const resp = await axiosWithoutAuth("/Product/getbyid", {
      params: {id}
    });
    return resp.data.content;
  } catch (error: any) {
    throw new Error(error)
  }
}