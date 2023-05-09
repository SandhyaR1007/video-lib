import { useContext } from "react";

import { VideoContext } from "../context/VideoContext";

export const useVideosContext = () => useContext(VideoContext);
