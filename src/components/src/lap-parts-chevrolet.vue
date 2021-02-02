<template>
  <div class="lap__part">
    <p class="lap-part-name">{{ chevrolet_data.name }}</p>
    <img
      class="lap__part-img"
      :src="require('../../assets/lap-card/' + chevrolet_data.image)"
      alt="auto-part"
    />
  </div>
</template>

<script>
export default {
  components: {},
  name: "lap-parts-chevrolet",
  props: {
    chevrolet_data: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  mounted() {
    this.$set(this.chevrolet_data, "quantity", 1);
  },
};
</script>

<style>
.part-info {
  width: 85px;
  height: 34px;
  border-radius: 7px;
  background: rgb(46, 43, 42);
  color: white;
  cursor: pointer;
}
.lap-part-name {
  text-align: center;
  max-width: 280px;
  min-height: 42px;
}
.lap__part-img {
  height: 250px;
  width: 280px;
  border-top: 2px solid #171717;
  border-bottom: 2px solid #171717;
  box-sizing: border-box;
}
.lap__part-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 7px;
}
.lap__part {
  background: rgb(233, 228, 227);
  margin: 5px 0px 20px 17px;
  border: 2px solid #171717;
  box-sizing: border-box;
  border-radius: 4px;
}
.add__button {
  width: 75px;
  height: 34px;
  border-radius: 7px;
  background: rgb(16, 109, 56);
  color: white;
  cursor: pointer;
}
.lap__part-price {
  border: 2px solid #383838;
  padding: 4px;
}
@media (min-width: 1200px) {
}

/* Landscape tablets and medium desktops */
@media (min-width: 992px) and (max-width: 1199px) {
}

/* Portrait tablets and small desktops */
@media (min-width: 768px) and (max-width: 991px) {
}

/* Landscape phones and portrait tablets */
@media (max-width: 767px) {
  .lap__title {
    text-align: center;
  }
  .chevrolet__parts-wrapper {
    flex-direction: column;
  }
  .lap__part {
    max-width: 275px;
    max-height: 275px;
    margin: 20px 10px 20px;
  }
  .lap__part-img {
    max-width: 100%;
    max-height: 120px;
  }
  .chevrolet__parts {
    justify-content: center;
  }
}

/* Portrait phones and smaller */
@media (max-width: 480px) {
  .lap__title {
    text-align: center;
  }
  .chevrolet__parts-wrapper {
    flex-direction: column;
  }
  .lap__part {
    max-width: 275px;
    max-height: 275px;
    margin: 20px 0px 20px;
  }
  .lap__part-img {
    max-width: 100%;
    max-height: 120px;
  }
  .chevrolet__parts {
    justify-content: center;
  }
}

@media (max-width: 320px) {
  .lap__title {
    text-align: center;
  }
  .chevrolet__parts-wrapper {
    flex-direction: column;
  }
  .lap__part {
    max-width: 275px;
    max-height: 275px;
    margin: 20px 0px 20px;
  }
  .lap__part-img {
    max-width: 100%;
    max-height: 120px;
  }
}
</style>
