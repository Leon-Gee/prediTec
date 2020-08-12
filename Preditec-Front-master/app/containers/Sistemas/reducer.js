/*
 *
 * Infants reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  SET_DIALOG,
  SET_DIALOG_DETAILS,
  SET_DIALOG_REPORT,
  SET_CURRENT_INFANT,
  INPUT_SET_MESSAGE,
  SET_REPORT_TYPE,
  SISTEMAS_GET_LIST_OK,
} from './constants';

const initialState = fromJS({
  dialogOpen: false,
  dialogDetailsOpen: false,
  dialogReportOpen: false,
  currentInfant: {},
  report: {
    mensaje: '',
    autorComunicadoId: 2,
    imagen: '',
    tipoComunicado: 0,
    enterado: false,
  },
  infantsList: [
    {
      career: 'Ingenieria en Sistemas Computacionales',
      controlNumber: '18171427',
      grades: 80,
      status: 'Favorable',
      id: 1,
      name: 'Oscar Oswaldo Meza Leon',
      semester: 5,
    },
    {
      career: 'Ingenieria en Sistemas Computacionales',
      controlNumber: '18172754',
      grades: 90,
      status: 'Favorable',
      id: 2,
      name: 'Jorge Paul Burgueno',
      semester: 5,
    },
    {
      career: 'Ingenieria en Sistemas Computacionales',
      controlNumber: '18174124',
      grades: 68,
      status: 'No favorable',
      id: 3,
      name: 'Diane Reyes Varce',
      semester: 5,
    },
    {
      career: 'Ingenieria en Sistemas Computacionales',
      controlNumber: '18179845',
      grades: 76,
      status: 'Regular',
      id: 4,
      name: 'Laura Verse Concepcion',
      semester: 5,
    },
    {
      career: 'Ingenieria en Sistemas Computacionales',
      controlNumber: '18179042',
      grades: 70,
      status: 'Regular',
      id: 5,
      name: 'Carlos Cafe Reza',
      semester: 5,
    },
    {
      career: 'Ingenieria en Sistemas Computacionales',
      controlNumber: '18178943',
      grades: 60,
      status: 'No favorable',
      id: 6,
      name: 'Jose Manuel Sainz',
      semester: 5,
    },
    {
      career: 'Ingenieria en Sistemas Computacionales',
      controlNumber: '18174209',
      grades: 81,
      status: 'Favorable',
      id: 7,
      name: 'Mario Torrez Uke',
      semester: 5,
    },
    {
      career: 'Ingenieria en Sistemas Computacionales',
      controlNumber: '18174567',
      grades: 77,
      status: 'Regular',
      id: 8,
      name: 'Juan Pablo Gomez',
      semester: 5,
    },
    {
      career: 'Ingenieria en Sistemas Computacionales',
      controlNumber: '18172398',
      grades: 92,
      status: 'Favorable',
      id: 9,
      name: 'Ana Segunda Chiquete',
      semester: 5,
    },
    {
      career: 'Ingenieria en Sistemas Computacionales',
      controlNumber: '18176557',
      grades: 81,
      status: 'Favorable',
      id: 10,
      name: 'Ana Segunda Chiquete',
      semester: 5,
    },
  ],
});

function infantsReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case SET_DIALOG:
      return state.set('dialogOpen', !state.get('dialogOpen'));
    case SET_DIALOG_DETAILS:
      return state.set('dialogDetailsOpen', !state.get('dialogDetailsOpen'));
    case SET_DIALOG_REPORT:
      return state.set('dialogReportOpen', !state.get('dialogReportOpen'));
    case SET_CURRENT_INFANT:
      return state.set('currentInfant', action.payload);
    case INPUT_SET_MESSAGE:
      return state.update('report', (form) => form.set('mensaje', action.text));
    case SET_REPORT_TYPE:
      return state.update('report', (form) => form.set('tipoComunicado', action.value));
    case SISTEMAS_GET_LIST_OK:
      return state.set('infantsList', action.data);
    default:
      return state;
  }
}

export default infantsReducer;
