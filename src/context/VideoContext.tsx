import { createContext, useEffect, useReducer, useState } from "react";
import { getVideosApi } from "../api/fakeFetch";
import { VideoContextType } from "../model";
import { videoReducer } from "./videoReducer";
import { SET_VIDEOS_DATA } from "./types";

export const VideoContext = createContext<VideoContextType>(
  {} as VideoContextType
);

interface VideoProviderProps {
  children: React.ReactNode;
}
export const VideoContextProvider = ({ children }: VideoProviderProps) => {
  const [loading, setLoading] = useState<boolean>(false);
  const initialState = {
    videosData: [],
  };

  const [state, dispatch] = useReducer(videoReducer, initialState);

  const getVideosData = async () => {
    setLoading(true);
    try {
      const {
        status,
        data: { videos },
      } = await getVideosApi("https://example.com/api/videos");

      if (status === 200) {
        dispatch({
          type: SET_VIDEOS_DATA,
          payload: videos,
        });
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getVideosData();
  }, []);

  return (
    <VideoContext.Provider value={{ videosData: state.videosData, loading }}>
      {children}
    </VideoContext.Provider>
  );
};
