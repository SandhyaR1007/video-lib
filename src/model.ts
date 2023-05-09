export type SingleVideo = {
  id: number;
  title: string;
  description: string;
  url: string;
  thumbnail: string;
  duration: string;
  categories: string[];
};

export interface VideoInitialStateType {
  videosData: SingleVideo[];
}
export interface VideoContextType {
  videosData: SingleVideo[];
  loading: boolean;
}
export interface ActionType {
  type: string;
  payload: any;
}
