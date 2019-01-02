export const home = (req, res) => res.render('home', { pageTitle: 'Home' });
export const search = (req, res) => res.send('search', { pageTitle: 'Search' });
export const upload = (req, res) => res.send('upload', { pageTitle: 'Upload' });
export const videoDetail = (req, res) =>
  res.send('videoDetail', { pageTitle: 'Video Detail' });
export const editVideo = (req, res) =>
  res.send('editVideo', { pageTitle: 'Edit Video' });
export const deleteVideo = (req, res) =>
  res.send('deleteVideo', { pageTitle: 'Delete Video' });
