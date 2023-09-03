<template>
  <div>
    <table>
      <thead>
        <tr>
          <th></th>
          <th>Title</th>
          <th>Artist</th>
          <th>Album</th>
          <th>Timer</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(track, index) in tracks" :key="index">
          <td>
            <img :src="track.image" alt="Track Image" height="50" width="50" />
          </td>
          <td>{{ track.title }}</td>
          <td>{{ track.artist }}</td>
          <td>{{ track.album }}</td>
          <td>{{ track.timer }}</td>
          <td>
            <button @click="playTrack(track)">Play</button>
          </td>
          <td>
            <button :class="{ 'liked': track.liked }" @click="toggleLike(track)">
              {{ track.liked ? 'Unlike' : 'Like' }}
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tracks: [
        {
          title: 'Song 1',
          artist: 'Artist 1',
          album: 'Album 1',
          liked: false,
          image: '/img/AO.jpg',
          timer: '00:00'
        },
        {
          title: 'Song 2',
          artist: 'Artist 2',
          album: 'Album 2',
          liked: false,
          image: 'https://example.com/image2.jpg',
          timer: '00:00'
        },
        // Add more tracks with images and timers...
      ]
    };
  },
  methods: {
    playTrack(track) {
      // Add your logic to play the track here
      console.log('Playing track:', track.title);
    },
    toggleLike(track) {
      track.liked = !track.liked;
    }
  }
};
</script>

<style scoped>
.container {
  padding: 20px;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  padding: 10px;
  text-align: left;
}

thead {
  background-color: #282828;
  color: #fff;
}

tbody tr:nth-child(even) {
  background-color: #f8f8f8;
}

img {
  display: block;
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 50%;
}

button {
  padding: 5px 10px;
  border: none;
  background-color: transparent;
  cursor: pointer;
}

button.liked {
  color: #1db954;
}

/* Optional: Add additional styling for hover and active states */
button:hover {
  background-color: rgba(0, 0, 0, 0.1);
}

button:active {
  transform: translateY(1px);
}
</style>

