import { ENV } from "@/utils/constants";

export class Posts {
    async getPosts (sort = 'desc', limit = 3, page = 1 ) {
        try {
            const populate = "populate=*";
            const Sort = `sort=createdAt:${sort}`;
            const pagination = `pagination[pageSize]=${limit}&pagination[page]=${page}`;
            const url = `${ENV.API_URL}/${ENV.ENDPOINTS.POSTS}?${populate}&${Sort}&${pagination}`;
            const response = await fetch(url);
            const result = await response.json();
            if (response.status !== 200) throw result;
            return result;
            
        } catch (error) {
            throw error;
        }
    }
}