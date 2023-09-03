<template>
  <div>
    <!-- Your main content here -->

    <footer class="footer">
      <div class="music-controls">
        <div class="music-info">
          <img :src="currentSong.image" alt="Song Cover" class="song-image">
          <div class="song-details">
            <p class="song-title">{{ currentSong.title }}</p>
            <p class="song-artist">{{ currentSong.artist }}</p>
          </div>
        </div>
        <div class="music-buttons">
          <button class="btn-control" @click="skipNext">
            Prev
          </button>
          <button class="btn-control" @click="playPause">
            {{ isPlaying ? 'Pause' : 'Play' }}
          </button>
          <button class="btn-control" @click="skipNext">
            Next
          </button>
          <input type="range" class="volume-slider" v-model="volume" @input="changeVolume">
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentSong: {
        title: "Song Title",
        artist: "Artist Name",
        image: "song-image.jpg",
      },
      isPlaying: false,
      volume: 50,
    };
  },
  methods: {
    playPause() {
      this.isPlaying = !this.isPlaying;
      // Implement play/pause functionality here
    },
    skipNext() {
      // Implement skip to next song functionality here
    },
    changeVolume() {
      // Implement volume change functionality here
    },
  },
};
</script>

<style scoped>
.footer {
  background-color: #1e1e1e;
  color: #fff;
  padding: 20px;
  text-align: center;
}

.music-controls {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.music-info {
  display: flex;
  align-items: center;
}

.song-image {
  width: 50px;
  height: 50px;
  margin-right: 10px;
}

.song-details {
  text-align: left;
}

.song-title {
  font-weight: bold;
  margin: 0;
}

.song-artist {
  margin: 0;
}

.music-buttons {
  display: flex;
  align-items: center;
}

.btn-control {
  background: transparent;
  border: none;
  color: #fff;
  font-size: 24px;
  margin: 0 10px;
  cursor: pointer;
}

.volume-slider {
  width: 100px;
}
</style>
