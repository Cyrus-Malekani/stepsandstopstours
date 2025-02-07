<template>
  <div
    class="min-h-screen bg-gradient-to-r from-red-400 via-orange-400 to-violet-400"
  >
    <!-- Hero Section -->
    <div
      class="flex flex-col items-center justify-center text-center py-20 px-6"
    >
      <h1
        class="text-5xl font-extrabold text-white drop-shadow-lg animate-fadeIn"
      >
        Explore Stockholm with Stepsandstops Tours
      </h1>
      <p
        class="text-xl text-white mt-4 max-w-2xl drop-shadow-md animate-fadeIn delay-200"
      >
        Discover the beauty of Stockholm through guided tours filled with
        history, culture, and stunning landscapes!
      </p>
      <button
        class="mt-6 bg-white text-blue-600 font-bold px-6 py-3 rounded-full shadow-lg hover:bg-blue-100 transition"
      >
        Book Your Adventure
      </button>
    </div>

    <!-- Featured Tours -->
    <div class="bg-white py-12 px-6 rounded-t-3xl shadow-2xl">
      <h2 class="text-3xl font-bold text-center text-blue-600">
        Stockholm's Must-Visit Spots
      </h2>
      <div class="grid grid-cols-1 md-grid-cols-3 gap-8 mt-8">
        <div
          v-for="tour in tours"
          :key="tour.id"
          class="bg-gradient-to-r from-yellow-300 to-pink-300 p-6 rounded-lg shadow-md hover:scale-105 transition"
        >
          <img
            :src="tour.image"
            width="300"
            height="200"
            :alt="tour.title"
            class="rounded-lg shadow-lg w-full h-40 object-cover"
          />
          <h3 class="text-xl font-bold mt-4">{{ tour.title }}</h3>
          <p class="text-gray-700 mt-2">{{ tour.description }}</p>
          <button
            class="mt-4 bg-blue-600 text-white font-semibold px-4 py-2 rounded shadow hover:bg-blue-500 transition"
          >
            Learn More
          </button>
          <br />
          <br />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tours: [
        {
          id: 1,
          title: "Gamla Stan Walk",
          description:
            "Explore Stockholm's old town, its medieval streets, and royal history.",
          image:
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/34/4b/e4/tip-the-cheapest-way.jpg?w=1000&h=-1&s=1",
        },
        {
          id: 2,
          title: "Vasa Museum Tour",
          description:
            "Discover the famous 17th-century warship at the Vasa Museum.",
          image:
            "https://preview.redd.it/pictures-from-my-visit-at-the-vasa-museum-in-stockholm-v0-l9olmnqcmit81.jpg?width=1080&crop=smart&auto=webp&s=132ef1c91f9ec18f46979eaab37ddbbb65036250",
        },
        {
          id: 3,
          title: "Djurgården Island Adventure",
          description:
            "Experience nature, museums, and scenic walks in Djurgården.",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/4/4d/Djurgarden.jpg",
        },
      ],
    };
  },
};
</script>

<style>
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.animate-fadeIn {
  animation: fadeIn 1s ease-in-out;
}
</style>
