import { SingleVideo } from "../model";

interface ErrorResponse {
  status: number;
  message: string;
}

interface VideosResponse {
  status: number;
  message: string;
  data: {
    videos: SingleVideo[];
  };
}

export const getVideosApi = (url: string): Promise<VideosResponse> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "https://example.com/api/videos") {
        resolve({
          status: 200,
          message: "Success",
          data: {
            videos: [
              {
                id: 1,
                title: "Introduction to React",
                description:
                  "Learn the basics of React in this introductory tutorial",
                url: "https://www.youtube.com/watch?v=Ke90Tje7VS0",
                thumbnail: "https://i.ytimg.com/vi/Ke90Tje7VS0/hqdefault.jpg",
                duration: "12:35",
                categories: ["react", "beginner"],
              },
              {
                id: 2,
                title: "JavaScript for Beginners",
                description:
                  "Get started with JavaScript with this beginner-friendly tutorial",
                url: "https://www.youtube.com/watch?v=PkZNo7MFNFg",
                thumbnail: "https://i.ytimg.com/vi/PkZNo7MFNFg/hqdefault.jpg",
                duration: "20:17",
                categories: ["javascript", "beginner"],
              },
              {
                id: 3,
                title: "Python Crash Course",
                description:
                  "Learn Python basics in this crash course for beginners",
                url: "https://www.youtube.com/watch?v=Z1Yd7upQsXY",
                thumbnail: "https://i.ytimg.com/vi/Z1Yd7upQsXY/hqdefault.jpg",
                duration: "15:42",
                categories: ["python", "beginner"],
              },
              {
                id: 4,
                title: "Promises Namaste JS",
                description:
                  "Promises is the new way of handling asynchronous operations in JavaScript. This episode of Namaste JavaScript Season 2 will explain how Promises work in JavaScript along with code examples in detail. ",
                url: "https://youtu.be/ap-6PPAuK1Y",
                thumbnail:
                  "https://i.ytimg.com/vi/ap-6PPAuK1Y/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDgPCbG3LN8lOM4W1b28Cc_G6d6Jw",
                duration: "39:06",
                categories: ["javascript"],
              },
              {
                id: 5,
                title: "React JS with TypeScript",
                description:
                  "Learn React JS with Typescript in one video. We will learn typescript from scratch and use it with react hooks such as useState, useRef and useReducer. We will understand PropTypes, DefaultProps etc. all while building a todo list app project.",
                url: "https://youtu.be/knqz3_rPcKk",
                thumbnail:
                  "https://i.ytimg.com/vi/knqz3_rPcKk/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD2eqkdx2EKR7Vw6Ca56uR8onMfRw",
                duration: "49:42",
                categories: ["react", "typescript"],
              },
              {
                id: 6,
                title: "Python Crash Course",
                description:
                  "Learn Python basics in this crash course for beginners",
                url: "https://www.youtube.com/watch?v=Z1Yd7upQsXY",
                thumbnail: "https://i.ytimg.com/vi/Z1Yd7upQsXY/hqdefault.jpg",
                duration: "15:42",
                categories: ["python", "beginner"],
              },
              {
                id: 7,
                title: "Python Crash Course",
                description:
                  "Learn Python basics in this crash course for beginners",
                url: "https://www.youtube.com/watch?v=Z1Yd7upQsXY",
                thumbnail: "https://i.ytimg.com/vi/Z1Yd7upQsXY/hqdefault.jpg",
                duration: "15:42",
                categories: ["python", "beginner"],
              },
            ],
          },
        });
      } else {
        reject({
          status: 404,
          message: "Video list not found.",
        });
      }
    }, 5000);
  });
};
