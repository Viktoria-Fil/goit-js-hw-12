
import axios from "axios";
 
export default async function getPictures(query, page = 1) {
  const BASE_URL = "https://pixabay.com/api/";
    try {
        const response = await axios.get(BASE_URL, {
            params: {
                key: '48530484-8b1e6b3578d96dabcf99a211e',
                q: query,
                image_type: 'photo',
                orientation: 'horizontal',
                safesearch: true,
                page: page,
                per_page: 15,
            },
        });
        return response.data;
    } catch (error) {
        console.error("Error fetching images:", error);
        throw error;
    }
}