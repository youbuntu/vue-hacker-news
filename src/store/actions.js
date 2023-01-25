import {
  fetchAskList,
  fetchCommentItem,
  fetchJobsList,
  fetchNewsList,
  fetchUserInfo,
} from "../api";

export default {
  FETCH_NEWS({ commit }) {
    fetchNewsList()
      .then(({ data }) => commit("SET_NEWS", data))
      .catch(console.error);
  },
  FETCH_JOBS({ commit }) {
    fetchJobsList()
      .then(({ data }) => commit("SET_JOBS", data))
      .catch(console.error);
  },
  FETCH_ASK({ commit }) {
    fetchAskList()
      .then(({ data }) => commit("SET_ASK", data))
      .catch(console.error);
  },
  FETCH_USER({ commit }, userName) {
    fetchUserInfo(userName)
      .then(({ data }) => commit("SET_USER", data))
      .catch(console.error);
  },
  FETCH_ITEM({ commit }, id) {
    fetchCommentItem(id)
      .then(({ data }) => commit("SET_ITEM", data))
      .catch(console.error);
  },
};
