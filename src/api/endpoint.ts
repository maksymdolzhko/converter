import { API_PATH } from "./constants";

export enum EndpointCurrency {
    PAIR = `${API_PATH}/pair`,
    LATEST = `${API_PATH}/latest`,
    HISTORY= `${API_PATH}/history`,
}
