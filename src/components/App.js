import React from 'react';
import { connect } from 'react-redux';
import Heading from './Heading';
import List from './List';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

class App extends React.Component {
  render() {
    return (
      <Box p={4}>
        <ThemeProvider theme={darkTheme}>
          <CssBaseline enableColorScheme />
          <Container maxWidth="sm">
            <Heading text="Knoll Tasks" />
            <List />
          </Container>
        </ThemeProvider>
      </Box>
    );
  }
}

const mapStateToProps = (state) => ({
  count: state.count
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(App);