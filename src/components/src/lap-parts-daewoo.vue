<template>
  <div class="lap__part">
    <p class="lap-part-name">{{ daewoo_data.name }}</p>
    <img
      class="lap__part-img"
      :src="require('../../assets/lap-card/' + daewoo_data.image)"
      alt="auto-part"
    />
  </div>
</template>

<script>
export default {
  components: {},
  name: "lap-parts-daewoo",
  props: {
    daewoo_data: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  mounted() {
    this.$set(this.daewoo_data, "quantity", 1);
  },
};
</script>

<style>
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
  .daewoo__parts-wrapper {
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
  .daewoo__parts {
    justify-content: center;
  }
}

/* Portrait phones and smaller */
@media (max-width: 480px) {
  .lap__title {
    text-align: center;
  }
  .daewoo__parts-wrapper {
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
  .daewoo__parts {
    justify-content: center;
  }
}

@media (max-width: 320px) {
  .lap__title {
    text-align: center;
  }
  .daewoo__parts-wrapper {
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