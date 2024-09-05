import moment from 'moment';

const timeElement = document.getElementById('time');
timeElement.textContent = `Current Time: ${moment().format('LLLL')}`;

import { nesting } from './plugin'

export default Object.assign(
  function (opts) {
    return {
      postcssPlugin: 'tailwindcss/nesting',
      Once(root, { result }) {
        return nesting(opts)(root, result)
      },
    }
  },
  { postcss: true }
)

