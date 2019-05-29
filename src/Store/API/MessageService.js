import request from "./requests";
import {API_NICKEL} from "./constants";

/**
 * Service to manage messages
 * @author kostya05983
 */
class MessageService {

    /**
     * Get message to specified user from Nickel
     * @param userId
     * @returns {Promise<T>}
     */
    async getMessages(userId, offset, limit) {
        return await request({
            url: API_NICKEL + "/messages/all?user_id=" + `${userId}&offset=${offset}&limit=${limit}`,
            method: "GET"
        })
    }

    /**
     * Create message on nickel to user
     * @param message
     * @returns {Promise<void>}
     */
    async createMessage(message) {
        console.log("Service create message", message);
        return await request({
            url: API_NICKEL + "/messages/",
            method: "POST",
            body: JSON.stringify(message)
        })
    }

    /**
     * Update message of user, userId transfer in packet
     * @param message
     * @returns {Promise<void>}
     */
    async updateMessage(message) {
        return await request({
            url: API_NICKEL + "/messages/",
            method: "PUT",
            body: JSON.stringify(message)
        })
    }

    /**
     * Delete message by key and user_id
     * @param userId
     * @param key
     * @returns {Promise<void>}
     */
    async deleteMessage(userId, key) {
        return await request({
            url: API_NICKEL + "/messages" + `?user_id=${userId}&key=${key}`,
            method: "DELETE"
        })
    }
}

export default new MessageService()