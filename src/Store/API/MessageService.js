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
     * @returns {Promise<void>}
     */
    async getMessages(userId) {
        return await request({
            url: API_NICKEL + "/messages?user_id=" + `${userId}`,
            method: "GET"
        })
    }

    /**
     * Create message on nickel to user
     * @param message
     * @returns {Promise<void>}
     */
    async createMessage(message) {
        return await request({
            url: API_NICKEL + "/messages/",
            method: "POST",
            body: message
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
            body: message
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