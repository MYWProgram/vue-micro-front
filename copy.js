const copy = require('recursive-copy');

const task = [
  {
    src: 'applications/app-entry/dist',
    dest: 'docs'
  },
  {
    src: 'applications/app-first/dist',
    dest: 'docs/app-first'
  },
  {
    src: 'applications/app-second/dist',
    dest: 'docs/app-second'
  }
];

task.forEach(({ src, dest }) => {
  copy(src, dest, error => {
    error && console.error('[Copy failed]', `src: ${src}, dest: ${dest}`, error);
  });
});
