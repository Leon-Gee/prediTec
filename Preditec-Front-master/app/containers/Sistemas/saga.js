import {
  takeLatest,
  call,
  put,
  select,
} from 'redux-saga/effects';
import { assign } from 'lodash';

import request from 'utils/request';
import {
  SISTEMAS_GET_LIST,
  CREATE_REPORT,
} from './constants';
import {
  infantsGetListOk,
  infantsGetListError,
  CreateReportOk,
  CreateReportError,
} from './actions';
const path = 'https://localhost:5000';

export function* listSistemas() {
  const requestURL = `${path}/students`;
  try {
    const response = yield call(request, requestURL, {
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const responseBody = response;
    console.log(responseBody, 'es todo');
    if (responseBody) {
      const formatedResponse = [];
      responseBody.map((item) => (
        formatedResponse.push({
          name: item.nombre,
          firstSurname: item.apellidoPaterno,
          secondSurname: item.apellidoMaterno,
          genre: item.sexo,
          birthdate: item.fechaNacimiento,
          height: item.altura,
          weight: item.peso,
          extras: item.indicacionesExtra,
          image: item.foto,
          tuthorName: item.tutor.nombre,
          tuthorFirstSurname: item.tutor.apellidoPaterno,
          tuthorSecondSurname: item.tutor.apellidoMaterno,
          tuthorGenre: item.tutor.sexo,
          email: item.tutor.email,
          phone: item.tutor.numeroTelefono,
          tuthorId: item.tutor.id,
        })
      ));
      yield put(infantsGetListOk(formatedResponse));
    }
  } catch (error) {
    yield put(infantsGetListError(error));
  }
}

export function* createReport() {
  const { infants: { report, currentInfant: { tuthorId } } } = yield select((state) => state.toJS());
  const requestURL = `${path}/comunicado`;

  assign(report, { tutorId: tuthorId });
  try {
    const response = yield call(request, requestURL, {
      method: 'post',
      body: JSON.stringify(report),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const responseBody = response;
    if (responseBody) {
      yield put(CreateReportOk());
    }
  } catch (error) {
    yield put(CreateReportError(error));
  }
}

export default function* defaultSaga() {
  yield takeLatest(SISTEMAS_GET_LIST, listSistemas);
  yield takeLatest(CREATE_REPORT, createReport);
  // yield call(listSistemas);
}
