import axios from "axios";

async function getData(userId) {
  try {
    const userResponse = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );
    const postsResponse = await axios.get(
      `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
    );

    const userData = userResponse.data;
    const posts = postsResponse.data;
    const result = { ...userData, posts };

    return result;
  } catch (error) {
    console.error("Error fetching data:", error.message);
    throw error;
  }
}

export default getData;
