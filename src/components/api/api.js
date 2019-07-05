import axios from './axios';

export default {
  games: {
    fetchAll: () => axios.get(`/api/unsafegames`).then(resp => resp.data.games),
    postGame: game =>
      axios.post('/api/unsafegames', { game }).then(resp => resp.data.game),
  },
};
