import { ENV } from "@/utils/constants";

export class singlePost {
    async getSingelPost (id) {
        try {
            const url = `${ENV.API_URL}/${ENV.ENDPOINTS.POSTS}?filters[id][$eq]=${id}&populate=*`;
            const response = await fetch(url);
            const result = await response.json();
            if (response.status !== 200) throw result;
            return result;
        } catch (error) {
            throw error;
        }
    }
}