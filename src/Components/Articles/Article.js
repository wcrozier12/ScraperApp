import React from 'react';
import Classes from './Article.css';
import { Panel } from 'react-bootstrap';

import Commentbutton from './Comments/Commentbutton'

const Article = (props) => {
  const divClass = Classes.div;
  const panelClass=Classes.panel;
  const imgClass=Classes.img;
  
  
  return(
      <Panel className={panelClass} footer={<Commentbutton />} header='title'>
        <p> Description </p>
        <img className={imgClass} src={props.image} />
      </Panel>
  )
}

export default Article;