import { SET_BOOKS } from "../../constants/action-types";

export const dateFormatting = store => next => action => {
  const {type, payload} = action;

  if (type === SET_BOOKS) {
    const formattedPublishedDate = payload.items.map(item => {
      return item.volumeInfo.publishedYear = new Date(item.volumeInfo.publishedDate).getFullYear();
    })

    const dateFormatted = {
      ...payload,
      formattedPublishedDate
    }

    const newAction = {...action, payload: dateFormatted};
    next(newAction);
  }
}