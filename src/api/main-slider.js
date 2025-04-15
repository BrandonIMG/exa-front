import { ENV } from "@/utils/constants";

export class MainSlider {
    async main_slider () {
        try {
            const url = `${ENV.API_URL}/${ENV.ENDPOINTS.SLIDER}?populate=*`;
            const response = await fetch(url);
            const result = await response.json();
            if (response.status !== 200) throw result;
            return result;
            
        } catch (error) {
            throw error;
        }
    }
}