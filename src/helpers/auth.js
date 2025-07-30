<<<<<<< HEAD
import { ROLE_ADMIN, ROLE_AGENT } from "@/constants/roles";

export function allowedAdminRoles(roles) {
    return roles?.some((role) => [ROLE_ADMIN, ROLE_AGENT].includes(role));
}

export function getAuthToken() {
    return localStorage.getItem("authToken");
}

=======
import { ROLE_ADMIN, ROLE_AGENT } from "@/constants/roles";

export function allowedAdminRoles(roles) {
    return roles?.some((role) => [ROLE_ADMIN, ROLE_AGENT].includes(role));
}

export function getAuthToken() {
    return localStorage.getItem("authToken");
}

>>>>>>> dff7259d9c648c2ed6ef28607dacf6d55f73aca2
