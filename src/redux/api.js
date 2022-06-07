const appId = 'MkNJOeZeNHAkqb4mlebg';
const apiURL = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${appId}/books/`;

// Fetch Data from api
const fetchApi = async () => {
  const response = await fetch(apiURL);
  const data = await response.json();
  const resultData = [];
  Object.keys(data).forEach((key) => {
    if (key) {
      resultData.push({ ...data[key][0], item_id: key });
    }
  });

  return resultData;
};

export default fetchApi;
// Save Data to Api
export const saveApi = async (data) => {
  await fetch(apiURL, {
    method: 'POST',
    headers: { 'Content-type': 'application/json; charset=UTF-8' },
    body: JSON.stringify(data),
  });
};
// Remove Data from Api
export const removeApi = async (id) => {
  await fetch(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${appId}/books/${id}`, {
    method: 'DELETE',
  });
};
