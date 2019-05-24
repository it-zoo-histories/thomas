import * as types from './constants'
import MessageService from '../../API/MessageService'

/**
 * Get message from service
 * @param userId
 * @returns {Function}
 */
export function getMessages(userId) {
    return async (dispatch, getState) => {
        try {
            const fetchMessages = MessageService.getMessages(userId);

            let response = await fetchMessages;

            dispatch({type: types.GET_MESSAGES, payload: response})
        } catch (error) {
            console.error(error)
        }
    }
}

/**
 * Add message to bot for this user
 * @param message
 * @returns {Function}
 */
export function createMessage(message) {
    return async (dispatch, getState) => {
        try {
            const fetchCreated = MessageService.createMessage(message);

            let response = await fetchCreated;

            dispatch({type: types.ADD_MESSAGE, payload: response})
        } catch (error) {
            console.error(error)
        }
    }
}

/**
 * Update message of specified user
 * @param message
 * @returns {Function}
 */
export function updateMessage(message) {
    return async (dispatch, getState) => {
        try {
            const fetchedUpdate = MessageService.updateMessage(message);

            let response = await fetchedUpdate;

            dispatch({type: types.UPDATE_MESSAGE, payload: response})
        } catch (error) {
            console.error(error)
        }
    }
}

/**
 * Delete message from chat for specified user
 * @param userId
 * @param key
 * @returns {Function}
 */
export function deleteMessage(userId, key) {
    return async (dispatch, getState) => {
        try {
            const fetchedDeleted = MessageService.deleteMessage(userId, key);

            let response = await fetchedDeleted;

            dispatch({type: types.DELETE_MESSAGE, payload: response})
        } catch (error) {
            console.error(error)
        }
    }
}