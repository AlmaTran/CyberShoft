
import { axiosWithoutAuth } from "./axios.config";

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
export const getAllProduct = async () => {
  try {
    const resp = await axiosWithoutAuth("/Product");
    return resp.data.content;
  } catch (error: any) {
    throw new Error(error)
  }
}