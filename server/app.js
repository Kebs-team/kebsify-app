const express = require('express')
const app = express()
const router = express.Router()
var SpotifyWebApi = require('spotify-web-api-node');
const token = 'BQAG2Oc-HDpY2ziXQM2tUcz_7rNnfRSbBGiUG0gIrfRBFc8zTJPqLKObOMUNVxXy4yLFfR6PWnX2-feduvIuqnvB97kNWsIqaCxz5F1mTAU_6NBgToGL3KYsu_MYLmdvyqN0VCmDA6Yk9oZCSxSOMruD-nVmqWoQynU5dYLVzdOeR5-1dR26cyAvgbo1fsiTM0HAz746AsiTMn8p4B3Y-9RA6Q65YV-atjiI69OUOmm5DG_-5Q2mSJgUXp4vi7r2VFZ7c9vqY2OyJiHIUgabYgqiODL9dEiudTS63TJjsIKr5YFCTbFLtq9vtXt_l215Y6hTySvuX9N9w702sVRx'
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
            res.send(JSON.stringify(response.body.access_token))
            spotifyApi.setAccessToken(token)
        }
    )
})

spotifyApi.setAccessToken(token)

router.get('/api/profile', (req, res) => {
    spotifyApi.getMe()
        .then(function (data) {
            res.send(data.body)
        }, function (err) {
            res.send({ error: 'Error while fetching data' })
        });
})

router.get('/api/recentlyplayedtracks', (req, res) => {
    spotifyApi.getMyRecentlyPlayedTracks({
        limit: 20
    }).then(function (data) {
        res.send(data.body.items)
    }, function (err) {
        res.send({ error: 'Error while fetching data' })
    })
})

router.get('/api/userplaylist', async (req, res) => {
    await spotifyApi.getUserPlaylists(spotifyApi.clientId).then(
        function (data) {
            res.send(data.body.items)
        }, function (err) {
            res.send({ error: 'Error while fetching data' })
        })
})

router.get('/api/playlist/:playlistId', (req, res) => {
    spotifyApi.getPlaylist(req.params.playlistId)
        .then(function (data) {
            res.send(data.body.tracks.items)
        }, function (err) {
            res.send({ error: 'Error while fetching data' })
        });
})

router.get('/api/searchplaylist/:name', (req, res) => {
    spotifyApi.searchPlaylists(req.params.name)
        .then(function (data) {
            res.send(data.body.playlists.items);
        }, function (err) {
            res.send({ error: 'Error while fetching data' })
        });
})

router.get('/api/searchartist/:artistname', async (req, res) => {
    await spotifyApi.searchArtists(req.params.artistname).then(
        function (data) {
            res.send(data.body.artists.items)
        },
        function () {
            res.send({ error: 'Error while fetching data' })
        })
}
)

router.get('/api/playlistofartist/:artistId',(req,res)=>{
spotifyApi.getArtistTopTracks(req.params.artistId,'GB')
  .then(function(data) {
        res.send(data.body)
    }, function(err) {
        res.send({ error: 'Error while fetching data' })
  })
})

router.get('/api/artistalbum/:artistId',(req,res)=>{
spotifyApi.getArtistAlbums(req.params.artistId).then(
    function(data) {
        res.send(data.body)
    },
    function(err) {
        res.send({ error: 'Error while fetching data' })
    }
  )
})

router.get('/api/searchtracks/:trackname',(req,res)=>{
spotifyApi.searchTracks(req.params.trackname)
  .then(function(data) {
    res.send(data.body.tracks.items)
  }, function(err) {
    res.send({ error: 'Error while fetching data' })
  });
})

router.post('/api/createplaylist',(req,res)=>{
    const {playlist_name,description,publicmode} = req.body
    console.log(playlist_name,description,publicmode)
    spotifyApi.createPlaylist(playlist_name, { 'description': description, 'public': publicmode })
    .then(function(data) {
      res.send({message:'Created playlist'});
    }, function(err) {
        res.status(500).send({ error: 'Error while creating playlist' })
    });
})

router.post('/api/addtracks',(req,res,next)=>{
    const {playlistId,trackId} = req.body
    spotifyApi.addTracksToPlaylist(playlistId,['spotify:track:'+trackId+''])
  .then(function(data) {
    res.send('Added tracks to playlist!')
  }, function(err) {
    res.status(500).send({ error: 'Error while adding tracks' })
  })
})





app.use('/', router)

app.listen(9000, () => {
    console.log("Server running on port : 9000")
})
