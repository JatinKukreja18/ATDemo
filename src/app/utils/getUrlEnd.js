const getUrlEnd = (urlString) => {
  if (!urlString) {
    return '';
  }

  return urlString.substring(urlString.lastIndexOf('/') + 1);
};

export default getUrlEnd;