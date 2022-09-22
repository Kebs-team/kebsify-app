const express = require('express')
const app = express()
const router = express.Router()
var SpotifyWebApi = require('spotify-web-api-node');
const token = 'BQCYFQqSoHNrUqONaeZoKjipeYFDK0Kx1tZsfVC1FifMUwI7Fv6CTLDQkWIVIdJ_tRguC-9dYMiFkGb---lf_XW_zI07K61FjbOdeDP7UjYyl7M9IStX3ms18NhQ1f1xEpjxTwcJpytMQhKd_0X90qq6K2wCp-UWaoMyGUdcZSI7ihLlKeQvHxbuFSkM0fAuUnakFIRwexNuGl9hTbi8P-OhRFuAxcTmnc6s-_1xCHitv5uiTODBn0ky0bhcFYxHCAYfM67QzONsRw40y3mnq-OEzm5s9JsgNMT7OjFsviQf2I8Vmi4Ak9LAiQWWGYICz4bQ9Kd_e1lSdO-Bc_17'
app.use(express.json())

// credentials are optional
var spotifyApi = new SpotifyWebApi({
    clientId: '36ae0fbbdfd64575851d8798ed01cf9c',
    clientSecret: 'fad996e644a5400ba642cd1ea130295d',
    redirectUri: 'http://localhost:9000/callback'
});

router.get('/', (req, res, next) => {
    res.redirect(spotifyApi.createAuthorizeURL([
        'ugc-image-upload',
        'user-read-playback-state',
        'app-remote-control',
        'user-modify-playback-state',
        'playlist-read-private',
        'user-follow-modify',
        'user-follow-modify',
        'playlist-read-collaborative',
        'user-follow-read',
        'user-read-currently-playing',
        'user-read-playback-position',
        'user-library-modify',
        'playlist-modify-private',
        'playlist-modify-public',
        'user-read-email',
        'user-top-read',
        'streaming',
        'user-read-recently-played',
        'user-read-private',
        'user-library-read'
    ]))
})


router.get('/callback', (req, res, next) => {
    console.log('request query', req.query)
    spotifyApi.authorizationCodeGrant(req.query.code).then(
        (response) => {
            res.send(JSON.stringify(response))
            spotifyApi.setAccessToken(token)
        }
    )
})


spotifyApi.setAccessToken(token)

router.get('/profile', (req, res) => {
    spotifyApi.getMe()
        .then(function (data) {
            res.send(data.body)
        }, function (err) {
            res.send({ error: 'Error while fetching data' })
        });
})

router.get('/recentlyplayedtracks', (req, res) => {
    spotifyApi.getMyRecentlyPlayedTracks({
        limit: 20
    }).then(function (data) {
        res.send(data.body.items)
    }, function (err) {
        res.send({ error: 'Error while fetching data' })
    })
})

router.get('/userplaylist', async (req, res) => {
    await spotifyApi.getUserPlaylists(spotifyApi.clientId).then(
        function (data) {
            res.send(data.body.items)
        }, function (err) {
            res.send({ error: 'Error while fetching data' })
        })
})

router.get('/playlist/:playlistId', (req, res) => {
    spotifyApi.getPlaylist(req.params.playlistId)
        .then(function (data) {
            res.send(data.body.tracks.items)
        }, function (err) {
            res.send({ error: 'Error while fetching data' })
        });
})

router.get('/searchplaylist/:name', (req, res) => {
    spotifyApi.searchPlaylists(req.params.name)
        .then(function (data) {
            res.send(data.body.playlists.items);
        }, function (err) {
            res.send({ error: 'Error while fetching data' })
        });
})

router.get('/searchartist/:artistname', async (req, res) => {
    await spotifyApi.searchArtists(req.params.artistname).then(
        function (data) {
            res.send(data.body.artists.items)
        },
        function () {
            res.send({ error: 'Error while fetching data' })
        })
}
)

router.get('/playlistofartist/:artistId',(req,res)=>{
spotifyApi.getArtistTopTracks(req.params.artistId,'GB')
  .then(function(data) {
        res.send(data.body)
    }, function(err) {
        res.send({ error: 'Error while fetching data' })
  })
})

router.get('/artistalbum/:artistId',(req,res)=>{
spotifyApi.getArtistAlbums(req.params.artistId).then(
    function(data) {
        res.send(data.body)
    },
    function(err) {
        res.send({ error: 'Error while fetching data' })
    }
  )
})

router.get('/searchtracks/:trackname',(req,res)=>{
spotifyApi.searchTracks(req.params.trackname)
  .then(function(data) {
    res.send(data.body.tracks.items)
  }, function(err) {
    res.send({ error: 'Error while fetching data' })
  });
})

router.post('/createplaylist',(req,res)=>{
    const {playlist_name,description,publicmode} = req.body
    spotifyApi.createPlaylist(playlist_name, { 'description': description, 'public': publicmode })
    .then(function(data) {
      res.send('Created playlist');
    }, function(err) {
        res.status(500).send({ error: 'Error while creating playlist' })
    });
})

router.post('/addtracks',(req,res,next)=>{
    const {playlistId,trackId} = req.body
    spotifyApi.addTracksToPlaylist(playlistId,['spotify:track:'+trackId+''])
  .then(function(data) {
    res.send('Added tracks to playlist!')
  }, function(err) {
    res.status(500).send({ error: 'Error while adding tracks' })
  })
})





app.use('/', router)

app.listen(8000, () => {
    console.log("working")
})
