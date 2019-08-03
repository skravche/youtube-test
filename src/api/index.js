const baseurl = 'http://localhost:3001/videos';

export const getVideos = fetch(baseurl);

export const addVideo = data => {
  return fetch(baseurl, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(res => res.json())
    .then(res => {
      console.log('Added:', res.message);
      return res;
    })
    .catch(err => console.error(err));
};

export const remove = id => {
  return fetch(`http://localhost:3001/videos/${id}`, { method: 'DELETE' })
    .then(res => res.json())
    .then(res => {
      console.log('Deleted:', res.message);
      return res;
    })
    .catch(err => console.error(err));
};
