import { apiRequest } from "./api_handler";

export async function getContacts(){
    const response = await apiRequest({endpoint: "/user/contacts"});
    return response;
}

export async function addContact(contactUsername){
    const postData = {
        contactUsername: contactUsername
    };
    
    const response = await apiRequest({
        endpoint: "/user/contacts",
        options: {
            method: "PATCH",
            body: JSON.stringify(postData)
        }
    });
    return response;
}