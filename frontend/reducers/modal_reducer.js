import { OPEN_MODAL, CLOSE_MODAL, OPEN_PRO_MODAL, CLOSE_PRO_MODAL } from '../actions/modal_actions';

export default function modalReducer(state = null, action) {
  switch (action.type) {
    case OPEN_MODAL:
      return action.modal;
    case CLOSE_MODAL:
      return null;
    case OPEN_PRO_MODAL:
      return action.modal;
    case CLOSE_PRO_MODAL:
      return null;
    default:
      return state;
  }
}
