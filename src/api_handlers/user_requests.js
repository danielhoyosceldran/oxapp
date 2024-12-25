import { apiRequest } from "./api_handler";

export async function getContacts(){
    const response = await apiRequest({endpoint: "/user/contacts"});
    return response;
}