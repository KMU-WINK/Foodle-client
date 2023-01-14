import { autoCompleteService } from "./base-service";

export const getSearchMenus = async (body) => {
  try {
    return autoCompleteService
      .post(`/api/menus/menu-list`, body)
      .then((response) => {
        return response.data;
      });
  } catch (e) {
    console.log("!", e);
  }
};
