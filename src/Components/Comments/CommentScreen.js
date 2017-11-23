import React from 'react';

import Aux from '../../HOCs/Aux';

const CommentScreen = (props) => (
  <Aux>
    <h1> Comments: </h1>
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