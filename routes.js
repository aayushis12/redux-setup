import React from 'react';
import {
  Actions, Router, Scene, Stack, Lightbox, Overlay, Reducer,
} from 'react-native-router-flux';
import Root from './index';
import FirstPage from './FirstPage';

export default class Routes extends React.Component{
  render(){
    return(
      <Router>
        <Overlay>
          <Lightbox key="modal">
            <Scene>
            <Scene key="root" component={Root} intial/>
            <Scene key="firstpage" component={FirstPage}/>
            </Scene>
          </Lightbox>
        </Overlay>
      </Router>
    )
  }
}