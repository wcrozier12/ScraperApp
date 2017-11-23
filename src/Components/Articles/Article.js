import React from 'react';
import Classes from './Article.css';
import { Panel } from 'react-bootstrap';
import Articleheader from './Articleheader';

import Commentbutton from '../Comments/Commentbutton';

const Article = (props) => {
 
  return(
      <Panel className={Classes.Panel} footer={<Commentbutton clicked={props.commentOpen} />} header={<Articleheader title={props.title} link={props.link} />}>
        <img className={Classes.Image} alt='Article' src={props.image} />
        <p className={Classes.Desc}> {props.desc} </p>
      </Panel>
  )
}

export default Article;