import getData from "./getData.mjs";

const userId = 1;

getData(userId)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error("İşlem hatası:", error.message);
  });
