import { ADD_PHONE} from "../constants/action-types";
import { ADD_CODE} from "../constants/action-types";
import { ADD_NAME} from "../constants/action-types";
import { ADD_PHOTO} from "../constants/action-types";
import { ADD_CONTACTS} from "../constants/action-types";
import { ADD_NOTIFICATION} from "../constants/action-types";
import { ADD_KNOWS} from "../constants/action-types";

export function addPhone(payload) {
    return { type: ADD_PHONE, payload }
};
export function addCode(payload) {
    return { type: ADD_CODE, payload }
};
export function addName(payload) {
    return { type: ADD_NAME, payload }
};
export function addPhoto(payload) {
    return { type: ADD_PHOTO, payload }
};
export function addNotification(payload) {
    return { type: ADD_NOTIFICATION, payload }
};
export function addContacts(payload) {
    return { type: ADD_CONTACTS, payload }
};
export function addKnows(payload) {
    return { type: ADD_KNOWS, payload }
};