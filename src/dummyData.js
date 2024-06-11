import { v4 as uuidv4 } from "uuid";

const dummyData = [
  {
    id: uuidv4(),
    title: "📝林のタスク",
    tasks: [
      {
        id: uuidv4(),
        title: "Reactの基礎固めのための勉強",
      },
      {
        id: uuidv4(),
        title: "nextの実務",
      },
      {
        id: uuidv4(),
        title: "Django実務",
      },
    ],
  },
  {
    id: uuidv4(),
    title: "🚀今後やること",
    tasks: [
      {
        id: uuidv4(),
        title: "AWS周りの学習",
      },
      {
        id: uuidv4(),
        title: "転職活動",
      },
    ],
  },
  {
    id: uuidv4(),
    title: "🌳終わったこと",
    tasks: [
      {
        id: uuidv4(),
        title: "タスクだし",
      },
    ],
  },
];

export default dummyData;
