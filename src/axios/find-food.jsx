import baseService from "./base-service";

export const recommendFood = async (sentence, is_soup, data) => {
  try {
    const result = await baseService.post(
      `find_menu?sentence=${encodeURI(sentence)}&is_soup=${is_soup}`,
      data,
      { withCredentials: true }
    );
    return result;
  } catch (e) {
    console.log("!", e);
  }
};
