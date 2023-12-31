import React from 'react';
import { connect } from 'react-redux';
import { removeTodoItem } from '../actions';
import { updateTodoItemStatus } from '../actions';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import RemoveCircleTwoToneIcon from '@mui/icons-material/RemoveCircleTwoTone';
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';

class ListItem extends React.Component {
  render() {
    const statusAttr = this.props.item.text
    return (
      <Box pl={2} pr={2} borderRadius={1} data-testid="todoitem">
        <Grid container spacing={2}>
          <Grid xs={11}>
            <FormControlLabel 
              control={
                <Checkbox 
                  defaultChecked={ this.props.item.done } 
                  onChange={() => this.props.updateTodoItemStatus(this.props.index,this.props.item.done)} 
                />
                } 
              label={
                this.props.item.text
              }
            />
          </Grid>

          <Grid 
            xs={1}
            sx={{
              display: 'flex',
              justifyContent: 'flex-end',
            }}>
            <RemoveCircleTwoToneIcon 
              onClick={
                () => this.props.removeTodoItem(this.props.index)
              } 
              sx={{
                pr: 0,
              }}
            />
          </Grid>
        </Grid>
      </Box>
    );
  }
}

const mapStateToProps = (state) => ({
  todoList: state.todoList
});

const mapDispatchToProps = {
  removeTodoItem,
  updateTodoItemStatus
};

export default connect(mapStateToProps, mapDispatchToProps)(ListItem);

export class TodoItem {
  constructor(text) {
    this.text = text;
    this.status = {
      done: false,
      text: 'Not Done'
    };
  }
}