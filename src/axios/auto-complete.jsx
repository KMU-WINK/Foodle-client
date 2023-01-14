import { autoCompleteService } from "./base-service";

export const getSearchMenus = async (body) => {
  try {
    autoCompleteService.post(`/api/menus/menu-list`, body).then((response) => {
      console.log(response);
      return response;
    });
  } catch (e) {
    console.log("!", e);
  }
};
