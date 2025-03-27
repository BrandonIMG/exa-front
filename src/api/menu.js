import { ENV } from "@/utils/constants";
export class MenuItems {
    async getMenuItems () {
        try{
            /* FILTROS */
            const sort = "publishedAt:asc";
            const pagination = "";
            const populate = ""
            const url = `${ENV.API_URL}/${ENV.ENDPOINTS.PAGES}?${sort}`
            const response = await fetch(url);
            const result = await response.json();

            if(response.status !== 200 ) throw result;

            return result;

        }catch(error){
            throw error
        }
    }
}