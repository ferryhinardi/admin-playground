import glob from 'glob';

export default (dir: string) => {
  return glob.sync(dir);
};