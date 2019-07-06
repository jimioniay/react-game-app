import axios from './axios';

export default {
  games: {
    fetchAll: () => axios.get(`/api/unsafegames`).then(resp => resp.data.games),
    postGame: async game => {
      try {
        console.log('befor any request', game);
        const resp = await axios.post('/api/unsafegames', { game });
        console.log('success response', resp);
        return resp.data.game;
      } catch (err) {
        console.log('err response', err.response.data);
        const { data } = err.response;
        console.log('error response', data);
        return data;
      }
    },

    update: async game => {
      try {
        const resp = await axios.put(`/api/unsafegames/${game._id}`, { game });
        console.log('inside put request: ', resp);
        return resp;
      } catch (err) {
        console.log('err response', err.response.data);
        const { data } = err.response;
        console.log('error response', data);
        return data;
      }
    },
    delete: async game => {
      try {
        const resp = await axios.delete(`/api/unsafegames/${game._id}`);
        return resp;
      } catch (err) {
        console.log('err response', err);
        // const { data } = err.response;
        // console.log('error response', data);
        return err;
      }
    },

    fetchGameByID: async id => {
      try {
        const resp = await axios.get(`api/unsafegames/${id}`);
        return resp.data.game;
      } catch (error) {
        return error;
      }
    },
  },
};
