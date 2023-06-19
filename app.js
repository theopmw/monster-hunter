function getRandomValue(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
    };
  },
  computed: {
    monsterBarStyles() {
      return { width: this.monsterHealth + '%' };
    },
    playerBarStyles() {
      return { width: this.playerHealth + '%' };
    },
  },
  methods: {
    attackMonster() {
      // Calculate damage value in range of 5 - 12 points
      const attackValue = getRandomValue(5, 12);
      // Reduce monster heath by attackValue value
      this.monsterHealth -= attackValue;
      this.attackPlayer();
    },
    attackPlayer() {
      // Calculate damage value in range of 8 - 15 points
      const attackValue = getRandomValue(8, 15);
      // Reduce player heath by attackValue value
      this.playerHealth -= attackValue;
    },
  },
});

app.mount('#game');
