import React from 'react';
import { rhythm, scale } from '../utils/typography';

export default props => (
  <div>
    <p
      style={{
        color: '#c7c7c7',
        fontSize: rhythm(.5)
      }}
    >&#xA9; {(new Date()).getFullYear()} Morgan Balog. This site or any content thereof
    may not be reproduced or used in any manner whatsoever
    without the express written permission of the writer.</p>
  </div>
)
