import { apiRequest } from "./api_handler";

export async function getContacts({username}){
    const response = await apiRequest({endpoint: "/user/contacts"});
}