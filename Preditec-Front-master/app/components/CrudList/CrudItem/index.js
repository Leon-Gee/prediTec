/**
*
* CrudItem
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import ListItemText from '@material-ui/core/ListItemText';

import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import {
  CustomListItem,
} from './styledComponents';


class CrudItem extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const {
      classes,
      item,
      setDialog,
      setCurrentItem,
    } = this.props;
    return (
      <CustomListItem
        button
        selected
        className={classes.rootList}
        disableRipple
      >
        <ListItemText disableTypography primary={item.name} className={classes.rootText} onClick={() => { setDialog(); setCurrentItem(item); }} />
      </CustomListItem>
    );
  }
}

CrudItem.propTypes = {
  classes: PropTypes.object,
  item: PropTypes.object,
  setDialog: PropTypes.func,
  setCurrentItem: PropTypes.func,
};

export default withStyles(styles)(CrudItem);
