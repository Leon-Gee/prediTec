/**
*
* InfantDetail
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import DialogGeneral from '../../components/DialogGeneral';
import {
  Container,
  ContentContainer,
  Subheader,
  Text,
  ActionsContainer,
} from './styledComponents';

class InfantDetail extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const {
      infant: {
        name,
        status,
        controlNumber,
        career,
        semester,
        grades,
      },
      classes,
      setDialog,
      open,
    } = this.props;

    const nodo = (
      <Container>
        <ContentContainer>
          <Subheader>Estatus</Subheader>
          <Text>{status}</Text>
          <Subheader>Numero de control</Subheader>
          <Text>{controlNumber}</Text>
          <Subheader>Carrera</Subheader>
          <Text>{career}</Text>
          <Subheader>Semestre</Subheader>
          <Text>{semester}</Text>
        </ContentContainer>
        <div>
          <Subheader>Promedio</Subheader>
          <Text>{grades}</Text>
        </div>
      </Container>
    );

    const actions = (
      <ActionsContainer>
        <Button className={classes.close} onClick={() => { setDialog(); }}>Cerrar</Button>
      </ActionsContainer>
    );

    return (
      <DialogGeneral
        title={name}
        node={nodo}
        nodeActions={actions}
        open={open}
        setDialog={setDialog}
      />
    );
  }
}

InfantDetail.propTypes = {
  infant: PropTypes.object,
  classes: PropTypes.object,
  open: PropTypes.bool,
  setDialog: PropTypes.func,
};

export default withStyles(styles)(InfantDetail);
