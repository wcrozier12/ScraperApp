import React from 'react';
import Aux from '../../../../HOCs/Aux';
import Classes from './ScrapeSummary.css';

const scrapeSummary = (props) => {
  if (props.scrapedArticlesLength !== 0) {
    return (
    <Aux>
      <p className={Classes.ScrapeMessage}>Added {props.scrapedArticlesLength} articles, enjoy!</p>
    </Aux>
    )
  }
  else {
  return (
    <Aux>
      <p className={Classes.ScrapeMessage}> There are no new articles. Try back tomorrow. </p>
    </Aux>
  )
  }
}
export default scrapeSummary;