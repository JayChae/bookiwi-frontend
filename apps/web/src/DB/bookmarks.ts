// 20개의 북마크 더미 데이터 생성
const sceneTypes = ["with protagonist", "with antagonist", "plot twist"];
const dummyBookmarks = Array.from({ length: 20 }, (_, index) => ({
  id: index + 1,
  title: `Chapter ${index + 1} Important scene ${sceneTypes[index % 3]}`,
  page: Math.floor(Math.random() * 300) + 1,
}));

export default dummyBookmarks;
