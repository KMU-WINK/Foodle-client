import baseService from "./base-service";

export const recommendFood = async (sentence, is_soup, data) => {
  try {
    return baseService
      .post(
        `find_menu?sentence=${encodeURI(sentence)}&is_soup=${is_soup}`,
        data,
      )
      .then((response) => {
        return response.data;
      });
  } catch (e) {
    console.log("!", e);
  }
};
