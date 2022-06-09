import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    giftitulo: null,                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          itulo: null,
    gifImage: null,
    fontSize: null,
    fontColor: [
      { color: "azul", value: "blue" },
      { color: "rojo", value: "red" },
      { color: "verde", value: "green" },
      { color: "amarillo", value: "yellow" },
      { color: "naranjo", value: "orange" },
    ],
    filter: [
      { filtro: "sepia", value: "sepia" },
      { filtro: "invert", value: "invert" },
      { filtro: "blur", value: "blur" },
      { filtro: "opacity", value: "opacity" },
      { filtro: "blanco/negro", value: "grayscale" },
    ],
    titlestyle: {
      color: "black",
      fontSize: "30px",
    },
    imgstyle: {
      filter: "none",
      width: "100%",
      height: "auto",
    },
    styles: {
      background: "white",
    },
  },

  getters: {
  },

  mutations: {
    UPDATE_TITULO(state,payload){
      state.giftitulo = payload;
    },
    UPDATE_FONTSIZE(state,payload){
      state.fontSize = payload;
    },
    UPDATE_GIFIMAGE(state,payload){
      state.gifImage = payload;
    }
  },
  
  actions: {
  },
 
  modules: {},
});
