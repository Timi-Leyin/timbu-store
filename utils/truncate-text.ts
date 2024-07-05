export default (str: string, limit = 20) => {
  return str.length <= limit ? str : `${str.slice(0, limit)}...`;
};
