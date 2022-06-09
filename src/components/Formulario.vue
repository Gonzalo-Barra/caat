<template>
  <div>
    <div class="formulario">
      <form>
        <div class="d-flex justify-content-between">
          <label>Título: </label>
          <input type="text" v-model="giftitulo" />
        </div>

        <!-- Filtro -->
        <div class="d-flex justify-content-between">
          <label for="">Filtro: </label>
          <select @change="changeFilter">
            <option>Elija un filtro para la imagen</option>
            <option
              v-for="filtro in filter"
              :key="filtro.value"
              :value="filtro.value"
              v-text="filtro.filtro"
            ></option>
          </select>
        </div>

        <!-- Color de fuente -->
        <div class="d-flex justify-content-between">
          <label>Color: </label>
          <select class="input-color" @change="changeColor">
            <option>Elija un color para el título</option>
            <option
              v-for="color in fontColor"
              :key="color.value"
              :value="color.value"
            >
              {{ color.color }}
            </option>
          </select>
        </div>
        <div class="color-box d-flex" :style="styles"></div>

        <!-- tamaño -->
        <div class="d-flex justify-content-between">
          <label>Tamaño: </label>
          <input type="text" v-model="fontSize" />
        </div>
      </form>
    </div>
    <!-- Imagen de gatos -->
    <div class="image-card">
      <button @click.self="getGif" class="btn btn-light mb-4">
        Obtener mi gato
      </button>
      <br />
      <img :src="gifImage" :style="imgstyle" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: "form-component",

  data() {
    return {
      
    };
  },
  computed: {
    filter() {
      return this.$store.state.filter;
    },
    titlestyle() {
      return this.$store.state.titlestyle;
    },
    fontColor() {
      return this.$store.state.fontColor;
    },
    imgstyle() {
      return this.$store.state.imgstyle;
    },
    styles() {
      return this.$store.state.styles;
    },
    fontSize: {
      get() {
        return this.$store.state.fontSize;
      },
      set(value) {
        this.$store.commit("UPDATE_FONTSIZE", value);
      }
     },  
      giftitulo: {
        get() {
          return this.$store.state.giftitulo;
        },
        set(value) {
          this.$store.commit("UPDATE_TITULO", value);
        },
      },
      gifImage: {
        get() {
          return this.$store.state.gifImage;
        },
        set(value) {
          this.$store.commit("UPDATE_GIFIMAGE", value);
        },
      },
    },
  
  methods: {
    changeColor(event) {
      this.styles.background = event.target.value;
      this.titlestyle.color = event.target.value;
    },
    changeFilter(event) {
      this.imgstyle.filter = event.target.value;
    },
    getGif() {

        this.gifImage = ''
        this.gifImage = `https://cataas.com/cat/gif/says/${this.giftitulo}?filter=${this.imgstyle.filter}&c=${this.titlestyle.color}&size=${this.fontSize}&width=400`;
        
    },

    created(){
      this.gifImage();
    }
   

      
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.formulario {
  background: rgb(162, 231, 236);
  padding: 15px 120px;
}
input,
select {
  border: none;
  margin-top: 10px;
  width: 250px;
}
.input-color {
  height: 30px;
}

.input-format {
  border: none;
  margin-left: 20px;
}
.color-box {
  width: 30px;
  height: 30px;
  display: inline-block;
  border-radius: 50%;
  margin-top: 10px;
}
.image-card {
  background: greenyellow;
  text-align: center;
  padding: 30px;
  position: relative;
}
h3 {
  position: absolute;
  top: 80%;
  left: 50%;
  transform: translate(-50%, -50%);
}
label {
  margin-top: 10px;
}
</style>
