import React from 'react';
import {Button} from 'react-bootstrap';
import Classes from './Commentbutton.css'

const Commentbutton = (props) => {
  return (
   <Button className={Classes.CommentButton} onClick={props.clicked}>Comment</Button>
  )
}

export default Commentbutton;