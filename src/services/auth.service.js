import { clientService } from "./client.service";


export const loginFetch = async () => {
    // console.log(clientService)
    window.location.href = clientService.defaults.baseURL + "/auth/discord"
};



export const getProfile = async () => {
    
}

