import { search } from "../API/index";
import instance from "../client";

async function getSearchMovie() {
  try {
    const { data } = await instance.get(search.get.searchMovie.url);
    return data;
  } catch (error) {
    console.error(error);
  }
}

async function getSearchTv() {
  try {
    const { data } = await instance.get(search.get.searchTv.url);
    return data;
  } catch (error) {
    console.error(error);
  }
}

export { getSearchMovie, getSearchTv };
