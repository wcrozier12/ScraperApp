import React from 'react';
import Aux from '../../../../HOCs/Aux';

const scrapeSummary = (props) => {
  if (props.scrapedArticlesLength !== 0) {
    return (
    <Aux>
      <p>Added {props.scrapedArticlesLength} articles, enjoy!</p>
    </Aux>
    )
  }
  else {
  return (
    <Aux>
      <p> There are no new articles. Try back tomorrow. </p>
    </Aux>
  )
  }
}
export default scrapeSummary;