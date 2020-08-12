/**
 *
 * LayoutHome
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose, bindActionCreators } from 'redux';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';

import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
// import CalendarToday from '@material-ui/icons/CalendarToday';
// import Group from '@material-ui/icons/Group';
// import WorkOutline from '@material-ui/icons/WorkOutline';

import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Avatar from '@material-ui/core/Avatar';

import { Switch, Redirect } from 'react-router-dom';
import { push } from 'react-router-redux';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import Sistemas from 'containers/Sistemas/index';
import Tics from 'containers/Tics/index';
import Mecatronica from 'containers/Mecatronica/index';
import Electronica from 'containers/Electronica/index';
import Electricidad from 'containers/Electricidad/index';
import Mecanica from 'containers/Mecanica/index';
import Industrial from 'containers/Industrial/index';
import Ambiental from 'containers/Ambiental/index';
import Gestion from 'containers/Gestion/index';
import Energias from 'containers/Energias/index';
import Bioquimica from 'containers/Bioquimica/index';
import makeSelectLayoutHome from './selectors';
import reducer from './reducer';
import saga from './saga';
import styles from './styles';
import { Container, WorkArea, AppBarTitle, ProfileContainer, Name } from './styledComponents';
import * as LayoutHomeActions from './actions';
import PrivateRoute from '../../utils/PrivateRoute';
import ambiental from './assets/ambiental.png';
import bioquimica from './assets/bioquimica.png';
import electricidad from './assets/electricidad.png';
import electronica from './assets/electronica.png';
import energias from './assets/energias.png';
import gestion from './assets/gestion.png';
import industrial from './assets/industrial.png';
import mecanica from './assets/mecanica.png';
import mecatronica from './assets/mecatronica.png';
import sistemas from './assets/sistemas.png';
import tics from './assets/tics.png';

export class LayoutHome extends React.Component { // eslint-disable-line react/prefer-stateless-function
  state = {
    anchorEl: null,
  };

  handleMenu = (event) => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const {
      classes,
      location,
      layouthome: { menu },
      drawerClick,
      logOut,
    } = this.props;
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);

    const icon = [
      <Avatar variant="square" src={ambiental} className={classes.square} />,
      <Avatar variant="square" src={bioquimica} className={classes.square} />,
      <Avatar variant="square" src={electricidad} className={classes.square} />,
      <Avatar variant="square" src={electronica} className={classes.square} />,
      <Avatar variant="square" src={energias} className={classes.square} />,
      <Avatar variant="square" src={gestion} className={classes.square} />,
      <Avatar variant="square" src={industrial} className={classes.square} />,
      <Avatar variant="square" src={mecanica} className={classes.square} />,
      <Avatar variant="square" src={mecatronica} className={classes.square} />,
      <Avatar variant="square" src={sistemas} className={classes.square} />,
      <Avatar variant="square" src={tics} className={classes.square} />,
    ];
    return (
      <Container>
        <AppBar position={'fixed'} className={classes.appBar}>
          <Toolbar className={classes.rootToolbar}>
            <AppBarTitle>Tecnológico Nacional de México</AppBarTitle>
            <ProfileContainer>
              <Name>Direccion</Name>
              <IconButton
                aria-owns={open ? 'menu-appbar' : null}
                aria-haspopup="true"
                onClick={this.handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={this.handleClose}
              >
                <MenuItem onClick={() => { logOut(); }}>Cerrar sesión</MenuItem>
              </Menu>
            </ProfileContainer>
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.toolbar} />
          <List>
            {menu.map((item) => (
              <ListItem
                button
                key={item.text}
                onClick={drawerClick(item.id, item.url)}
                className={classes.rootList}
                disableRipple
              >
                <ListItemAvatar>
                  {icon[item.id]}
                </ListItemAvatar>
                <ListItemText
                  primary={item.text}
                  classes={{
                    primary: classes.primary,
                  }}
                />
              </ListItem>
            ))}
          </List>
        </Drawer>
        <WorkArea
          inicio={find(menu, 'status').fullScreen}
        >
          <div className={classes.toolbar} />
          <Switch location={location}>
            <PrivateRoute
              path="/sistemas"
              component={Sistemas}
            />
            <PrivateRoute
              path="/tics"
              component={Tics}
            />
            <PrivateRoute
              path="/mecatronica"
              component={Mecatronica}
            />
            <PrivateRoute
              path="/electronica"
              component={Electronica}
            />
            <PrivateRoute
              path="/electricidad"
              component={Electricidad}
            />
            <PrivateRoute
              path="/mecanica"
              component={Mecanica}
            />
            <PrivateRoute
              path="/industrial"
              component={Industrial}
            />
            <PrivateRoute
              path="/ambiental"
              component={Ambiental}
            />
            <PrivateRoute
              path="/gestion"
              component={Gestion}
            />
            <PrivateRoute
              path="/energias"
              component={Energias}
            />
            <PrivateRoute
              path="/bioquimica"
              component={Bioquimica}
            />
            <Redirect from="/" to="/releases" />
          </Switch>
        </WorkArea>
      </Container>
    );
  }
}

LayoutHome.propTypes = {
  layouthome: PropTypes.object,
  dispatch: PropTypes.func.isRequired, // eslint-disable-line
  classes: PropTypes.object,
  location: PropTypes.object,
  drawerClick: PropTypes.func,
  logOut: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  layouthome: makeSelectLayoutHome(),
});

function mapDispatchToProps(dispatch, ownProps) {
  const actions = bindActionCreators(LayoutHomeActions, dispatch);
  return {
    dispatch,
    ...actions,
    drawerClick: (itemIndex, url) => () => {
      const currentUrl = ownProps.match.url.slice(-1) === '/' ? ownProps.match.url.slice(0, -1) : ownProps.match.url;
      dispatch(actions.drawerActive(itemIndex));
      dispatch(push(currentUrl + url));
    },
    logOut: () => {
      dispatch(push('/sign_in'));
    },
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'layoutHome', reducer });
const withSaga = injectSaga({ key: 'layoutHome', saga });

export default compose(
  withStyles(styles),
  withReducer,
  withSaga,
  withConnect,
)(LayoutHome);
