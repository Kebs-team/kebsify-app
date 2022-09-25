const express = require('express')
const app = express()
const router = express.Router()
var SpotifyWebApi = require('spotify-web-api-node');
const token = 'BQDpP_WLJ1Ipd1gU4y2rjmA_JvLzLGx6yoqryT7vRywURvdGyd0A4Fv85XSf15eaWCR8DKrWZM-pMy6-AYaE6aMgdofxqSqvFwZdlWjKm2VszPeX__5VRCta33BzqAVStjKisCBFzWmGNR_qiTXqSJsXDvdJKAUBPw45-9o7tAP2XFXk_EFVYehyC6MJRsHXnnfZ_505df2Hwx4-M0I4BAOYtgx13XCnkBA1icmYHSyJYu-MohOi3lLRAmdTm3XrN9SOshBQCreEzi6y-vKDg1gcOqmD_dPM-eTyRBXClYSCwFywd72tOHzOyB5557dGQ9Q1eGXMvh2CvKteIyuP'
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
