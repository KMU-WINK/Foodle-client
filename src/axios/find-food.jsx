import baseService from "./base-service";

export const recommendFood = async (sentence, is_soup, data) => {
  try {
    baseService
      .post(
        `find_menu?sentence=${encodeURI(sentence)}&is_soup=${is_soup}`,
        data,
      )
      .then((response) => {
        console.log(response);
      });
  } catch (e) {
    console.log("!", e);
  }
};
