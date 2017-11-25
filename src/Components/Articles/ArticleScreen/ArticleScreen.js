import React from 'react';
import Classes from './ArticleScreen.css';
import Aux from '../../../HOCs/Aux';
const CommentScreen = (props) => (

  <Aux>
    <div className='row'
      style={{
        backgroundColor: '#555',
        borderRadius: '10px 10px 0px 0px',
        marginRight: '0px',
        marginLeft: '0px'
      }}>
      <div className="col-md-4" 
      style={{
        paddingLeft: '0px',
        paddingRight: '0px'
      }}>
        <img className={Classes.Image} src={props.image} alt={props.title}/>
      </div>
      <div className="col-md-8">
        <h2><a className={Classes.Link} href={props.link} target="_blank">{props.title}</a></h2>
      </div>
    </div>
    <div className='row'>
     <p className={Classes.p}> {props.desc} </p>
    </div>
    <form>
      <label>
        Comment:
        <input type="text" name="name" />
      </label>
      <input type="submit" value="Submit" />
    </form>
  </Aux>
)
export default CommentScreen;