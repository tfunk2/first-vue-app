const app = Vue.createApp({
  data: function () {
    return {
      name: "Tyler Funk",
      age: 28,
      hometown: "Kansas City, MO",
      hobbies: ["Golf", "Coding", "Video Games"],
      avatarImage: "https://www.w3schools.com/howto/img_avatar.png",
    };
  },
  methods: {
    getRandomHobby() {
      const randomIndex = Math.floor(Math.random() * this.hobbies.length);
      return this.hobbies[randomIndex];
    },
  },
});

app.mount("#app-body");
