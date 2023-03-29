import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Notes from './pages/Notes'
import Create from './pages/Create'
import Remove from './pages/Remove'
import Layout from './Components/Layout'
import { createMuiTheme,ThemeProvider, Typography, } from '@material-ui/core'
import { blueGrey, grey, indigo, lightBlue, orange, teal } from '@material-ui/core/colors'
const myTheme=createMuiTheme({
  palette:{
    primary: grey,
    secondary:indigo,
    
  },
  Typography:{
    fontfamily: 'Montserrat, sans-serif',
    fontfamily: 'UnifrakturCook, cursive'
  }
})
function App() {
  return (
   <ThemeProvider theme={myTheme}>
    <Router>
      <Layout>
      <Switch>
        <Route exact path="/">
          <Notes />
        </Route>
        <Route path="/create">
          <Create />
        </Route>
        <Route path="/Remove">
          <Remove />
        </Route>
      </Switch>
      </Layout>
    </Router>
    </ThemeProvider>

  );
}

export default App;
