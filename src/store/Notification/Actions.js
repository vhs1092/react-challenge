import { OPEN_NOTIFICATION, CLOSE_NOTIFICATION } from './Types'

export const openNotification = (notification) => {
    return {
        type: OPEN_NOTIFICATION,
        payload: notification
    }
}

export const closeNotification = () => {
    return {
        type: CLOSE_NOTIFICATION
    }
}
