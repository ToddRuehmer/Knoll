import React from 'react';
import { connect } from 'react-redux';
import { addTodoItem } from '../actions';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

class Heading extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <Box>
        <Typography gutterBottom variant="h2">
          {this.props.text}
        </Typography>
      </Box>
    );
  }
}

export default Heading;