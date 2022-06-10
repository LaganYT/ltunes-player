module.exports = function(io) {
    var Player = {
        queue: {
            source: {
                id: null,
                type: null,
                tracks: [],
                /* other spotify data */
            },
            nowPlaying: {
                index: 0,
                paused: true,
                track: null,
                progress: 0
            },
        },
        
        setQueue(source) {
            this.queue.source = source;
            io.emit('queue:set', source);
        },
        
        updateQueue(newQueue)  {
            this.queue = Object.assign(this.queue, newQueue);
        },
        
        plause() {
            io.emit(this.queue.nowPlaying ? 'playback:play' : 'playback:pause');
            this.queue.nowPlaying = !this.queue.nowPlaying;
        },
        
        skip(direction) {
            if (!this.queue.source.tracks || !this.queue.source.tracks.items) return false;
            
            if (direction == 'next' && this.queue.nowPlaying.index < this.queue.source.tracks.items.length - 1) {
                this.queue.nowPlaying.index++;
                io.emit('playback:skip.next');
            } else if (direction == 'prev' && this.queue.nowPlaying.index > 0) {
                this.queue.nowPlaying.index--;
                io.emit('playback:skip.prev');
            }
        },
        
        setVolume() {
            
        },
        
        toggleShuffle(state) {
            
        },
        
        toggleRepeat(state) {
            
        },
        
        seek(to) {
            
        },
        
        // canPlay
    };
    
    });
};
