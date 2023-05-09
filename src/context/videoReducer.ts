import { ActionType, VideoInitialStateType } from "../model";
import { SET_VIDEOS_DATA } from "./types";

export const videoReducer = (
  state: VideoInitialStateType,
  action: ActionType
) => {
  switch (action.type) {
    case SET_VIDEOS_DATA:
      return { ...state, videosData: action.payload };

    default:
      return state;
  }
};
