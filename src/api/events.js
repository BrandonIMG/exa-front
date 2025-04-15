import { ENV } from "@/utils/constants";

export class Eventos {
    async getEventos() {
        try {
            const populate = "populate=*";
            const Sort = "sort=createdAt:asc";
            const url = `${ENV.API_URL}/${ENV.ENDPOINTS.EVENTS}?${populate}&${Sort}`
            const response = await fetch(url);
            const result = await response.json();
            if (response.status !== 200) throw result;
            return result;
        } catch (error) {
            throw error;
        }
    }
}