import React from 'react';
import { connect } from 'react-redux';
import { addTodoItem } from '../actions';
import { getTodoItems } from '../actions';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import ListItem from './ListItem';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputItemValue: ''
    };
  }

  componentDidMount() {
    this.props.getTodoItems().then((response) => {
      this.state.todoList = response.data;
    });
  }

  render() {
    const { inputItemValue } = this.state;

    const handleInputChange = (value) => {
      this.state.inputItemValue = value;
    };

    return (
      <Box 
        sx={{
          backgroundColor: 'primary.dark',
        }} 
        spacing={2} 
        p={2} 
        borderRadius={2}
        data-testid="list"
      >
        {this.props.todoList.map((listItem, i) => <ListItem item={listItem} index={i} key={i} />)}
        <Grid container spacing={2} mt={2}>
          <Grid xs={9}>
            <TextField fullWidth onChange={(e) => handleInputChange(e.target.value)} label="Description" variant="filled" size="small" />
          </Grid>
          <Grid xs={3}>
            <Button 
              onClick={() => this.props.addTodoItem(this.state.inputItemValue)} 
              variant="contained"
              sx={{
                height: "100%",
                width: "100%"
              }}
              data-testid="AddTodoItem"
            >Add Item</Button>
          </Grid>
        </Grid>
      </Box>
    );
  }
}

const mapStateToProps = (state) => ({
  todoList: state?.todoList || []
});

const mapDispatchToProps = {
  getTodoItems,
  addTodoItem,
};

export default connect(mapStateToProps, mapDispatchToProps)(List);