export const getAllStarships = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching starships: ", error);
    return null;
  }
};
