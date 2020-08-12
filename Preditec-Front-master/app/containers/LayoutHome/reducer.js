/*
 *
 * LayoutHome reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  DRAWER_ITEM_ACTIVE,
} from './constants';

const initialState = fromJS({
  menu: [
    {
      browserHistory: '/sistemas',
      fullScreen: true,
      url: '/sistemas',
      text: 'Sistemas',
      status: true,
      nameIcon: 'suitcase', // cuando lo encuentre lo cambio
      id: '9',
    },
    {
      browserHistory: '/tics',
      fullScreen: true,
      url: '/tics',
      text: 'Tics',
      status: true,
      nameIcon: 'suitcase', // cuando lo encuentre lo cambio
      id: '10',
    },
    {
      browserHistory: '/mecatronica',
      fullScreen: true,
      url: '/mecatronica',
      text: 'Mecatrónica',
      status: true,
      nameIcon: 'suitcase', // cuando lo encuentre lo cambio
      id: '8',
    },
    {
      browserHistory: '/electronica',
      fullScreen: true,
      url: '/electronica',
      text: 'Electrónica',
      status: true,
      nameIcon: 'suitcase', // cuando lo encuentre lo cambio
      id: '3',
    },
    {
      browserHistory: '/electricidad',
      fullScreen: true,
      url: '/electricidad',
      text: 'Electricidad',
      status: true,
      nameIcon: 'suitcase', // cuando lo encuentre lo cambio
      id: '2',
    },
    {
      browserHistory: '/mecanica',
      fullScreen: true,
      url: '/mecanica',
      text: 'Mecánica',
      status: true,
      nameIcon: 'suitcase', // cuando lo encuentre lo cambio
      id: '7',
    },
    {
      browserHistory: '/industrial',
      fullScreen: true,
      url: '/industrial',
      text: 'Industrial',
      status: true,
      nameIcon: 'suitcase', // cuando lo encuentre lo cambio
      id: '6',
    },
    {
      browserHistory: '/ambiental',
      fullScreen: true,
      url: '/ambiental',
      text: 'Ambiental',
      status: true,
      nameIcon: 'suitcase', // cuando lo encuentre lo cambio
      id: '0',
    },
    {
      browserHistory: '/gestion',
      fullScreen: true,
      url: '/gestion',
      text: 'Gestión E.',
      status: true,
      nameIcon: 'suitcase', // cuando lo encuentre lo cambio
      id: '6',
    },
    {
      browserHistory: '/energias',
      fullScreen: true,
      url: '/energias',
      text: 'Energías R.',
      status: true,
      nameIcon: 'suitcase', // cuando lo encuentre lo cambio
      id: '5',
    },
    {
      browserHistory: '/bioquimica',
      fullScreen: true,
      url: '/bioquimica',
      text: 'Bioquímica',
      status: true,
      nameIcon: 'suitcase', // cuando lo encuentre lo cambio
      id: '2',
    },
  ],
});

function layoutHomeReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case DRAWER_ITEM_ACTIVE:
      return state
        .update('menu', (items) => items.map((item) => item.set('status', false)))
        .setIn(['menu', action.itemIndex, 'status'], true);
        // .setIn(['menu', action.itemIndex, 'submenus'], state.getIn(['menu', action.itemIndex, 'submenus'])
        // .map((submenus) => submenus.set('color', '#6c7b8a').set('variant', 'text'))
        // .setIn([0, 'variant'], 'rounded-icon').setIn([0, 'color'], '#f54c95'));
    default:
      return state;
  }
}

export default layoutHomeReducer;
