import React, { Component } from 'react';
import Classes from './ArticlePanel.css';
import Articleheader from './Articleheader';
import ArticleScreen from '../ArticleScreen/ArticleScreen';
import Aux from '../../../HOCs/Aux';
import Modal from '../../UI/Modal/Modal';

class ArticlePanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
      viewingArticle: false
    }
  }

  handleArticleWindowOpen = () => {
    this.setState({viewingArticle: true});
  }
  handleArticleWindowClose = () => {
    this.setState({viewingArticle:false})
  }

  render() {
  return(
      // <Panel className={Classes.Panel} footer={<Commentbutton clicked={props.commentOpen} />} header={<Articleheader title={props.title} link={props.link} />}>
      //   <img className={Classes.Image} alt='Article' src={props.image} />
      //   <p className={Classes.Desc}> {props.desc} </p>
      // </Panel>
    <Aux>
      <div onClick={this.handleArticleWindowOpen} className={Classes.Panel} footer={<Articleheader title={this.props.title} link={this.props.link} />}>
        <a target="_blank"> <img className={Classes.Image} alt='Article' src={this.props.image}/> </a>
        <p className={Classes.p}> {this.props.title} </p>
      </div>
      <Modal show={this.state.viewingArticle} modalClosed={this.handleArticleWindowClose}>
        <ArticleScreen id={this.props.id} title={this.props.title} desc={this.props.desc} image={this.props.image} link={this.props.link}/>
      </Modal>
    </Aux>
  )
  }

}

export default ArticlePanel;