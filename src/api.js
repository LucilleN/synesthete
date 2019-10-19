const apiHost = () => { } // No-op in our mock version.

const getAudioFeatures = () => Promise.resolve({
  "danceability": 0.441,
  "energy": 0.379,
  "key": 2,
  "loudness": -9.545,
  "mode": 1,
  "speechiness": 0.0449,
  "acousticness": 0.968,
  "instrumentalness": 0.262,
  "liveness": 0.639,
  "valence": 0.105,
  "tempo": 174.118,
  "type": "audio_features",
  "id": "0QZ5yyl6B6utIWkxeBDxQN",
  "uri": "spotify:track:0QZ5yyl6B6utIWkxeBDxQN",
  "track_href": "https://api.spotify.com/v1/tracks/0QZ5yyl6B6utIWkxeBDxQN",
  "analysis_url": "https://api.spotify.com/v1/audio-analysis/0QZ5yyl6B6utIWkxeBDxQN",
  "duration_ms": 208227,
  "time_signature": 3
})

const getRecommendation = () => Promise.resolve({
  "tracks" : [ {
    "album" : {
      "album_type" : "ALBUM",
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/0XHM5ZNJDU8e4CfbWMeSzC"
        },
        "href" : "https://api.spotify.com/v1/artists/0XHM5ZNJDU8e4CfbWMeSzC",
        "id" : "0XHM5ZNJDU8e4CfbWMeSzC",
        "name" : "Roo Panes",
        "type" : "artist",
        "uri" : "spotify:artist:0XHM5ZNJDU8e4CfbWMeSzC"
      } ],
      "available_markets" : [ "AD", "AE", "AR", "AT", "AU", "BE", "BG", "BH", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "SA", "SE", "SG", "SK", "SV", "TH", "TN", "TR", "TW", "US", "UY", "VN", "ZA" ],
      "external_urls" : {
        "spotify" : "https://open.spotify.com/album/3ZTS2uxdWAkBnIXzsCY8PZ"
      },
      "href" : "https://api.spotify.com/v1/albums/3ZTS2uxdWAkBnIXzsCY8PZ",
      "id" : "3ZTS2uxdWAkBnIXzsCY8PZ",
      "images" : [ {
        "height" : 640,
        "url" : "https://i.scdn.co/image/ab67616d0000b2731763012ab9a170a56bf0542a",
        "width" : 640
      }, {
        "height" : 300,
        "url" : "https://i.scdn.co/image/ab67616d00001e021763012ab9a170a56bf0542a",
        "width" : 300
      }, {
        "height" : 64,
        "url" : "https://i.scdn.co/image/ab67616d000048511763012ab9a170a56bf0542a",
        "width" : 64
      } ],
      "name" : "Little Giant",
      "release_date" : "2014-10-06",
      "release_date_precision" : "day",
      "total_tracks" : 0,
      "type" : "album",
      "uri" : "spotify:album:3ZTS2uxdWAkBnIXzsCY8PZ"
    },
    "artists" : [ {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/artist/0XHM5ZNJDU8e4CfbWMeSzC"
      },
      "href" : "https://api.spotify.com/v1/artists/0XHM5ZNJDU8e4CfbWMeSzC",
      "id" : "0XHM5ZNJDU8e4CfbWMeSzC",
      "name" : "Roo Panes",
      "type" : "artist",
      "uri" : "spotify:artist:0XHM5ZNJDU8e4CfbWMeSzC"
    } ],
    "available_markets" : [ "AD", "AE", "AR", "AT", "AU", "BE", "BG", "BH", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "SA", "SE", "SG", "SK", "SV", "TH", "TN", "TR", "TW", "US", "UY", "VN", "ZA" ],
    "disc_number" : 1,
    "duration_ms" : 241720,
    "explicit" : false,
    "external_ids" : {
      "isrc" : "GB5UQ1400018"
    },
    "external_urls" : {
      "spotify" : "https://open.spotify.com/track/4C2aiAVTTVyZbCQZst5Xu1"
    },
    "href" : "https://api.spotify.com/v1/tracks/4C2aiAVTTVyZbCQZst5Xu1",
    "id" : "4C2aiAVTTVyZbCQZst5Xu1",
    "is_local" : false,
    "name" : "Tiger Striped Sky",
    "popularity" : 68,
    "preview_url" : null,
    "track_number" : 6,
    "type" : "track",
    "uri" : "spotify:track:4C2aiAVTTVyZbCQZst5Xu1"
  } ],
  "seeds" : [ {
    "initialPoolSize" : 250,
    "afterFilteringSize" : 250,
    "afterRelinkingSize" : 250,
    "id" : "6ltzsmQQbmdoHHbLZ4ZN25",
    "type" : "ARTIST",
    "href" : "https://api.spotify.com/v1/artists/6ltzsmQQbmdoHHbLZ4ZN25"
  }, {
    "initialPoolSize" : 249,
    "afterFilteringSize" : 249,
    "afterRelinkingSize" : 249,
    "id" : "0QZ5yyl6B6utIWkxeBDxQN",
    "type" : "TRACK",
    "href" : "https://api.spotify.com/v1/tracks/0QZ5yyl6B6utIWkxeBDxQN"
  } ]
})

const searchSongs = () => Promise.resolve({
  // data: [
  //   {
  //     id: '26BRBupa6nRXMGBP2',
  //     source_tld: '',
  //     images: {
  //       fixed_width: {
  //         url: 'https://media2.giphy.com/media/26BRBupa6nRXMGBP2/200w.gif?cid=e1bb72ff5ba9df1d5249616f457f56c5'
  //       }
  //     }
  //   },
  //   {
  //     id: 'hklv9aNS7Gcda',
  //     source_tld: '',
  //     images: {
  //       fixed_width: {
  //         url: 'https://media2.giphy.com/media/hklv9aNS7Gcda/200w.gif?cid=e1bb72ff5ba9df1d5249616f457f56c5'
  //       }
  //     }
  //   },
  //   {
  //     id: 'YJBNjrvG5Ctmo',
  //     source_tld: '',
  //     images: {
  //       fixed_width: {
  //         url: 'https://media0.giphy.com/media/YJBNjrvG5Ctmo/200w.gif?cid=e1bb72ff5ba9df1d5249616f457f56c5'
  //       }
  //     }
  //   }
  // ]
  "tracks" : {
    "href" : "https://api.spotify.com/v1/search?query=the+night+we+met&type=track&offset=0&limit=20",
    "items" : [ {
      "album" : {
        "album_type" : "album",
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/6ltzsmQQbmdoHHbLZ4ZN25"
          },
          "href" : "https://api.spotify.com/v1/artists/6ltzsmQQbmdoHHbLZ4ZN25",
          "id" : "6ltzsmQQbmdoHHbLZ4ZN25",
          "name" : "Lord Huron",
          "type" : "artist",
          "uri" : "spotify:artist:6ltzsmQQbmdoHHbLZ4ZN25"
        } ],
        "available_markets" : [ "CA", "US" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/3yoNZlqerJnsnMN5EDwwBS"
        },
        "href" : "https://api.spotify.com/v1/albums/3yoNZlqerJnsnMN5EDwwBS",
        "id" : "3yoNZlqerJnsnMN5EDwwBS",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/d0a15f9288814a7e3f199ab2d1a6b0c9a9a633b5",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/9bcea4ada214a061cecce6d565319f839ea83ce1",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/0a2f11966d40cd6fc87ee70b71d8547578e87fe8",
          "width" : 64
        } ],
        "name" : "Strange Trails",
        "release_date" : "2015-04-07",
        "release_date_precision" : "day",
        "total_tracks" : 14,
        "type" : "album",
        "uri" : "spotify:album:3yoNZlqerJnsnMN5EDwwBS"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/6ltzsmQQbmdoHHbLZ4ZN25"
        },
        "href" : "https://api.spotify.com/v1/artists/6ltzsmQQbmdoHHbLZ4ZN25",
        "id" : "6ltzsmQQbmdoHHbLZ4ZN25",
        "name" : "Lord Huron",
        "type" : "artist",
        "uri" : "spotify:artist:6ltzsmQQbmdoHHbLZ4ZN25"
      } ],
      "available_markets" : [ "CA", "US" ],
      "disc_number" : 1,
      "duration_ms" : 208211,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "US53Q1200103"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/0QZ5yyl6B6utIWkxeBDxQN"
      },
      "href" : "https://api.spotify.com/v1/tracks/0QZ5yyl6B6utIWkxeBDxQN",
      "id" : "0QZ5yyl6B6utIWkxeBDxQN",
      "is_local" : false,
      "name" : "The Night We Met",
      "popularity" : 76,
      "preview_url" : "https://p.scdn.co/mp3-preview/1c0da00b5c95a1a6c9dfc05b14a1a628a6e0ad73?cid=159ac88b1c534ed7ae41602f1e558a49",
      "track_number" : 14,
      "type" : "track",
      "uri" : "spotify:track:0QZ5yyl6B6utIWkxeBDxQN"
    }, {
      "album" : {
        "album_type" : "compilation",
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/0C8ZW7ezQVs4URX5aX7Kqx"
          },
          "href" : "https://api.spotify.com/v1/artists/0C8ZW7ezQVs4URX5aX7Kqx",
          "id" : "0C8ZW7ezQVs4URX5aX7Kqx",
          "name" : "Selena Gomez",
          "type" : "artist",
          "uri" : "spotify:artist:0C8ZW7ezQVs4URX5aX7Kqx"
        }, {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/5Pwc4xIPtQLFEnJriah9YJ"
          },
          "href" : "https://api.spotify.com/v1/artists/5Pwc4xIPtQLFEnJriah9YJ",
          "id" : "5Pwc4xIPtQLFEnJriah9YJ",
          "name" : "OneRepublic",
          "type" : "artist",
          "uri" : "spotify:artist:5Pwc4xIPtQLFEnJriah9YJ"
        }, {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/6Ad91Jof8Niiw0lGLLi3NW"
          },
          "href" : "https://api.spotify.com/v1/artists/6Ad91Jof8Niiw0lGLLi3NW",
          "id" : "6Ad91Jof8Niiw0lGLLi3NW",
          "name" : "YUNGBLUD",
          "type" : "artist",
          "uri" : "spotify:artist:6Ad91Jof8Niiw0lGLLi3NW"
        } ],
        "available_markets" : [ "AD", "AE", "AR", "AT", "AU", "BE", "BG", "BH", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "SA", "SE", "SG", "SK", "SV", "TH", "TN", "TR", "TW", "US", "UY", "VN", "ZA" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/4RpgjxgSxcRwGNuWnImneN"
        },
        "href" : "https://api.spotify.com/v1/albums/4RpgjxgSxcRwGNuWnImneN",
        "id" : "4RpgjxgSxcRwGNuWnImneN",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/48040d1f965eaac3703a614af0a5df299c3c7f57",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/bdfb3d7fcca226ae8920fbf49adc82715b45470f",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/ef44ad12b8210abac74b82ffabfeb3e02453efc9",
          "width" : 64
        } ],
        "name" : "13 Reasons Why (Season 2)",
        "release_date" : "2018-05-18",
        "release_date_precision" : "day",
        "total_tracks" : 20,
        "type" : "album",
        "uri" : "spotify:album:4RpgjxgSxcRwGNuWnImneN"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/6ltzsmQQbmdoHHbLZ4ZN25"
        },
        "href" : "https://api.spotify.com/v1/artists/6ltzsmQQbmdoHHbLZ4ZN25",
        "id" : "6ltzsmQQbmdoHHbLZ4ZN25",
        "name" : "Lord Huron",
        "type" : "artist",
        "uri" : "spotify:artist:6ltzsmQQbmdoHHbLZ4ZN25"
      }, {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/1r1uxoy19fzMxunt3ONAkG"
        },
        "href" : "https://api.spotify.com/v1/artists/1r1uxoy19fzMxunt3ONAkG",
        "id" : "1r1uxoy19fzMxunt3ONAkG",
        "name" : "Phoebe Bridgers",
        "type" : "artist",
        "uri" : "spotify:artist:1r1uxoy19fzMxunt3ONAkG"
      } ],
      "available_markets" : [ "AD", "AE", "AR", "AT", "AU", "BE", "BG", "BH", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "SA", "SE", "SG", "SK", "SV", "TH", "TN", "TR", "TW", "US", "UY", "VN", "ZA" ],
      "disc_number" : 1,
      "duration_ms" : 208173,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "US53Q1200148"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/0jZO7p0nBUi9VHedWUBS9l"
      },
      "href" : "https://api.spotify.com/v1/tracks/0jZO7p0nBUi9VHedWUBS9l",
      "id" : "0jZO7p0nBUi9VHedWUBS9l",
      "is_local" : false,
      "name" : "The Night We Met (feat. Phoebe Bridgers)",
      "popularity" : 72,
      "preview_url" : null,
      "track_number" : 5,
      "type" : "track",
      "uri" : "spotify:track:0jZO7p0nBUi9VHedWUBS9l"
    }, {
      "album" : {
        "album_type" : "single",
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/6ltzsmQQbmdoHHbLZ4ZN25"
          },
          "href" : "https://api.spotify.com/v1/artists/6ltzsmQQbmdoHHbLZ4ZN25",
          "id" : "6ltzsmQQbmdoHHbLZ4ZN25",
          "name" : "Lord Huron",
          "type" : "artist",
          "uri" : "spotify:artist:6ltzsmQQbmdoHHbLZ4ZN25"
        } ],
        "available_markets" : [ "CA", "US" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/3HHHK8lGDgB9wwGXd0za9o"
        },
        "href" : "https://api.spotify.com/v1/albums/3HHHK8lGDgB9wwGXd0za9o",
        "id" : "3HHHK8lGDgB9wwGXd0za9o",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/ab67616d0000b2739c636fd22a1df32ffc1a3cf6",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/ab67616d00001e029c636fd22a1df32ffc1a3cf6",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/ab67616d000048519c636fd22a1df32ffc1a3cf6",
          "width" : 64
        } ],
        "name" : "The Night We Met (feat. Phoebe Bridgers)",
        "release_date" : "2018-12-14",
        "release_date_precision" : "day",
        "total_tracks" : 1,
        "type" : "album",
        "uri" : "spotify:album:3HHHK8lGDgB9wwGXd0za9o"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/6ltzsmQQbmdoHHbLZ4ZN25"
        },
        "href" : "https://api.spotify.com/v1/artists/6ltzsmQQbmdoHHbLZ4ZN25",
        "id" : "6ltzsmQQbmdoHHbLZ4ZN25",
        "name" : "Lord Huron",
        "type" : "artist",
        "uri" : "spotify:artist:6ltzsmQQbmdoHHbLZ4ZN25"
      }, {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/1r1uxoy19fzMxunt3ONAkG"
        },
        "href" : "https://api.spotify.com/v1/artists/1r1uxoy19fzMxunt3ONAkG",
        "id" : "1r1uxoy19fzMxunt3ONAkG",
        "name" : "Phoebe Bridgers",
        "type" : "artist",
        "uri" : "spotify:artist:1r1uxoy19fzMxunt3ONAkG"
      } ],
      "available_markets" : [ "CA", "US" ],
      "disc_number" : 1,
      "duration_ms" : 209081,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "US53Q1800080"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/5JVlz4JCy3cv8pZB12sKJL"
      },
      "href" : "https://api.spotify.com/v1/tracks/5JVlz4JCy3cv8pZB12sKJL",
      "id" : "5JVlz4JCy3cv8pZB12sKJL",
      "is_local" : false,
      "name" : "The Night We Met (feat. Phoebe Bridgers)",
      "popularity" : 55,
      "preview_url" : "https://p.scdn.co/mp3-preview/f7f35586de8b45ce8224057e944f6df3ab998c47?cid=159ac88b1c534ed7ae41602f1e558a49",
      "track_number" : 1,
      "type" : "track",
      "uri" : "spotify:track:5JVlz4JCy3cv8pZB12sKJL"
    }, {
      "album" : {
        "album_type" : "single",
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/6ltzsmQQbmdoHHbLZ4ZN25"
          },
          "href" : "https://api.spotify.com/v1/artists/6ltzsmQQbmdoHHbLZ4ZN25",
          "id" : "6ltzsmQQbmdoHHbLZ4ZN25",
          "name" : "Lord Huron",
          "type" : "artist",
          "uri" : "spotify:artist:6ltzsmQQbmdoHHbLZ4ZN25"
        } ],
        "available_markets" : [ "CA", "US" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/5UGCFUixbUYeYrpfUnlEQA"
        },
        "href" : "https://api.spotify.com/v1/albums/5UGCFUixbUYeYrpfUnlEQA",
        "id" : "5UGCFUixbUYeYrpfUnlEQA",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/ab67616d0000b273e5d72e7141406c974ff5f8f7",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/ab67616d00001e02e5d72e7141406c974ff5f8f7",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/ab67616d00004851e5d72e7141406c974ff5f8f7",
          "width" : 64
        } ],
        "name" : "The Night We Met",
        "release_date" : "2015-02-09",
        "release_date_precision" : "day",
        "total_tracks" : 1,
        "type" : "album",
        "uri" : "spotify:album:5UGCFUixbUYeYrpfUnlEQA"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/6ltzsmQQbmdoHHbLZ4ZN25"
        },
        "href" : "https://api.spotify.com/v1/artists/6ltzsmQQbmdoHHbLZ4ZN25",
        "id" : "6ltzsmQQbmdoHHbLZ4ZN25",
        "name" : "Lord Huron",
        "type" : "artist",
        "uri" : "spotify:artist:6ltzsmQQbmdoHHbLZ4ZN25"
      } ],
      "available_markets" : [ "CA", "US" ],
      "disc_number" : 1,
      "duration_ms" : 208226,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "US53Q1200103"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/4iH31mAwPbG9SSPN6nHWgu"
      },
      "href" : "https://api.spotify.com/v1/tracks/4iH31mAwPbG9SSPN6nHWgu",
      "id" : "4iH31mAwPbG9SSPN6nHWgu",
      "is_local" : false,
      "name" : "The Night We Met",
      "popularity" : 50,
      "preview_url" : "https://p.scdn.co/mp3-preview/eb1aee7ce7d3dd50ae65c964054f5eafd9dd4006?cid=159ac88b1c534ed7ae41602f1e558a49",
      "track_number" : 1,
      "type" : "track",
      "uri" : "spotify:track:4iH31mAwPbG9SSPN6nHWgu"
    }, {
      "album" : {
        "album_type" : "single",
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/364ovD0MRp9ezaNTkRoLeA"
          },
          "href" : "https://api.spotify.com/v1/artists/364ovD0MRp9ezaNTkRoLeA",
          "id" : "364ovD0MRp9ezaNTkRoLeA",
          "name" : "Gavin Mikhail",
          "type" : "artist",
          "uri" : "spotify:artist:364ovD0MRp9ezaNTkRoLeA"
        } ],
        "available_markets" : [ "AD", "AE", "AR", "AT", "AU", "BE", "BG", "BH", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "SA", "SE", "SG", "SK", "SV", "TH", "TN", "TR", "TW", "US", "UY", "VN", "ZA" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/2pM0eE0dsyGjzVbLtrr5Oz"
        },
        "href" : "https://api.spotify.com/v1/albums/2pM0eE0dsyGjzVbLtrr5Oz",
        "id" : "2pM0eE0dsyGjzVbLtrr5Oz",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/ab67616d0000b2736143574d0d8ec8b2708f1aff",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/ab67616d00001e026143574d0d8ec8b2708f1aff",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/ab67616d000048516143574d0d8ec8b2708f1aff",
          "width" : 64
        } ],
        "name" : "The Night We Met",
        "release_date" : "2017-05-10",
        "release_date_precision" : "day",
        "total_tracks" : 4,
        "type" : "album",
        "uri" : "spotify:album:2pM0eE0dsyGjzVbLtrr5Oz"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/364ovD0MRp9ezaNTkRoLeA"
        },
        "href" : "https://api.spotify.com/v1/artists/364ovD0MRp9ezaNTkRoLeA",
        "id" : "364ovD0MRp9ezaNTkRoLeA",
        "name" : "Gavin Mikhail",
        "type" : "artist",
        "uri" : "spotify:artist:364ovD0MRp9ezaNTkRoLeA"
      } ],
      "available_markets" : [ "AD", "AE", "AR", "AT", "AU", "BE", "BG", "BH", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "SA", "SE", "SG", "SK", "SV", "TH", "TN", "TR", "TW", "US", "UY", "VN", "ZA" ],
      "disc_number" : 1,
      "duration_ms" : 177477,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "TCADB1749009"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/5ftTH7EI3S4Z0FjuJOnVxy"
      },
      "href" : "https://api.spotify.com/v1/tracks/5ftTH7EI3S4Z0FjuJOnVxy",
      "id" : "5ftTH7EI3S4Z0FjuJOnVxy",
      "is_local" : false,
      "name" : "The Night We Met (from \"13 Reasons Why\")",
      "popularity" : 59,
      "preview_url" : "https://p.scdn.co/mp3-preview/bf5b8f9acd1c432dbfe0d876fc1174722fbaf47b?cid=159ac88b1c534ed7ae41602f1e558a49",
      "track_number" : 1,
      "type" : "track",
      "uri" : "spotify:track:5ftTH7EI3S4Z0FjuJOnVxy"
    }, {
      "album" : {
        "album_type" : "single",
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/2K7ajrQVgS9eXO8fPGuisc"
          },
          "href" : "https://api.spotify.com/v1/artists/2K7ajrQVgS9eXO8fPGuisc",
          "id" : "2K7ajrQVgS9eXO8fPGuisc",
          "name" : "Nath Brooks",
          "type" : "artist",
          "uri" : "spotify:artist:2K7ajrQVgS9eXO8fPGuisc"
        } ],
        "available_markets" : [ "AD", "AE", "AR", "AT", "AU", "BE", "BG", "BH", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "SA", "SE", "SG", "SK", "SV", "TH", "TN", "TR", "TW", "US", "UY", "VN", "ZA" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/311TJ4dezII0wmYCwNaZ6s"
        },
        "href" : "https://api.spotify.com/v1/albums/311TJ4dezII0wmYCwNaZ6s",
        "id" : "311TJ4dezII0wmYCwNaZ6s",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/ab67616d0000b27372801caf3dfadc45cd8e29ed",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/ab67616d00001e0272801caf3dfadc45cd8e29ed",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/ab67616d0000485172801caf3dfadc45cd8e29ed",
          "width" : 64
        } ],
        "name" : "Take Me Back To The Night We Met",
        "release_date" : "2017-07-24",
        "release_date_precision" : "day",
        "total_tracks" : 1,
        "type" : "album",
        "uri" : "spotify:album:311TJ4dezII0wmYCwNaZ6s"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/2K7ajrQVgS9eXO8fPGuisc"
        },
        "href" : "https://api.spotify.com/v1/artists/2K7ajrQVgS9eXO8fPGuisc",
        "id" : "2K7ajrQVgS9eXO8fPGuisc",
        "name" : "Nath Brooks",
        "type" : "artist",
        "uri" : "spotify:artist:2K7ajrQVgS9eXO8fPGuisc"
      } ],
      "available_markets" : [ "AD", "AE", "AR", "AT", "AU", "BE", "BG", "BH", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "SA", "SE", "SG", "SK", "SV", "TH", "TN", "TR", "TW", "US", "UY", "VN", "ZA" ],
      "disc_number" : 1,
      "duration_ms" : 187068,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "AUBEC1706245"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/7gUuGkxbxxbDdixMQl50EW"
      },
      "href" : "https://api.spotify.com/v1/tracks/7gUuGkxbxxbDdixMQl50EW",
      "id" : "7gUuGkxbxxbDdixMQl50EW",
      "is_local" : false,
      "name" : "The Night We Met (13 Reasons Why)",
      "popularity" : 49,
      "preview_url" : "https://p.scdn.co/mp3-preview/0a81c718dbfd5269987ab186e3fe5add7924fce3?cid=159ac88b1c534ed7ae41602f1e558a49",
      "track_number" : 1,
      "type" : "track",
      "uri" : "spotify:track:7gUuGkxbxxbDdixMQl50EW"
    }, {
      "album" : {
        "album_type" : "album",
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/4988ULVP4X7nco6pLh1PA2"
          },
          "href" : "https://api.spotify.com/v1/artists/4988ULVP4X7nco6pLh1PA2",
          "id" : "4988ULVP4X7nco6pLh1PA2",
          "name" : "Cimorelli",
          "type" : "artist",
          "uri" : "spotify:artist:4988ULVP4X7nco6pLh1PA2"
        } ],
        "available_markets" : [ "AD", "AE", "AR", "AT", "AU", "BE", "BG", "BH", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "SA", "SE", "SG", "SK", "SV", "TH", "TN", "TR", "TW", "US", "UY", "VN", "ZA" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/3vcHEIFqiT5kUoVQCgQfqI"
        },
        "href" : "https://api.spotify.com/v1/albums/3vcHEIFqiT5kUoVQCgQfqI",
        "id" : "3vcHEIFqiT5kUoVQCgQfqI",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/ab67616d0000b273509423015cddeccfb0848b79",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/ab67616d00001e02509423015cddeccfb0848b79",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/ab67616d00004851509423015cddeccfb0848b79",
          "width" : 64
        } ],
        "name" : "Best of 2017",
        "release_date" : "2017-12-31",
        "release_date_precision" : "day",
        "total_tracks" : 27,
        "type" : "album",
        "uri" : "spotify:album:3vcHEIFqiT5kUoVQCgQfqI"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/4988ULVP4X7nco6pLh1PA2"
        },
        "href" : "https://api.spotify.com/v1/artists/4988ULVP4X7nco6pLh1PA2",
        "id" : "4988ULVP4X7nco6pLh1PA2",
        "name" : "Cimorelli",
        "type" : "artist",
        "uri" : "spotify:artist:4988ULVP4X7nco6pLh1PA2"
      } ],
      "available_markets" : [ "AD", "AE", "AR", "AT", "AU", "BE", "BG", "BH", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "SA", "SE", "SG", "SK", "SV", "TH", "TN", "TR", "TW", "US", "UY", "VN", "ZA" ],
      "disc_number" : 1,
      "duration_ms" : 230291,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "QMF921750053"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/7nTUSCEv9lZt7k17gebGnZ"
      },
      "href" : "https://api.spotify.com/v1/tracks/7nTUSCEv9lZt7k17gebGnZ",
      "id" : "7nTUSCEv9lZt7k17gebGnZ",
      "is_local" : false,
      "name" : "The Night We Met",
      "popularity" : 44,
      "preview_url" : "https://p.scdn.co/mp3-preview/87dcd75eca9a08dcf5df83f6439b2a16902a62d5?cid=159ac88b1c534ed7ae41602f1e558a49",
      "track_number" : 9,
      "type" : "track",
      "uri" : "spotify:track:7nTUSCEv9lZt7k17gebGnZ"
    }, {
      "album" : {
        "album_type" : "single",
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/480xKab3lUPhBBnCzlzqIu"
          },
          "href" : "https://api.spotify.com/v1/artists/480xKab3lUPhBBnCzlzqIu",
          "id" : "480xKab3lUPhBBnCzlzqIu",
          "name" : "Taylor Davis",
          "type" : "artist",
          "uri" : "spotify:artist:480xKab3lUPhBBnCzlzqIu"
        }, {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/2v5wjWQZ9ViJUXAetTQcZ6"
          },
          "href" : "https://api.spotify.com/v1/artists/2v5wjWQZ9ViJUXAetTQcZ6",
          "id" : "2v5wjWQZ9ViJUXAetTQcZ6",
          "name" : "Lara de Wit",
          "type" : "artist",
          "uri" : "spotify:artist:2v5wjWQZ9ViJUXAetTQcZ6"
        } ],
        "available_markets" : [ "AD", "AE", "AR", "AT", "AU", "BE", "BG", "BH", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "SA", "SE", "SG", "SK", "SV", "TH", "TN", "TR", "TW", "US", "UY", "VN", "ZA" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/2N3CY6RagVIcNCMY8gp6oe"
        },
        "href" : "https://api.spotify.com/v1/albums/2N3CY6RagVIcNCMY8gp6oe",
        "id" : "2N3CY6RagVIcNCMY8gp6oe",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/ab67616d0000b2737aac1ba8745999b7920be5a1",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/ab67616d00001e027aac1ba8745999b7920be5a1",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/ab67616d000048517aac1ba8745999b7920be5a1",
          "width" : 64
        } ],
        "name" : "The Night We Met (Instrumental)",
        "release_date" : "2017-08-04",
        "release_date_precision" : "day",
        "total_tracks" : 1,
        "type" : "album",
        "uri" : "spotify:album:2N3CY6RagVIcNCMY8gp6oe"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/480xKab3lUPhBBnCzlzqIu"
        },
        "href" : "https://api.spotify.com/v1/artists/480xKab3lUPhBBnCzlzqIu",
        "id" : "480xKab3lUPhBBnCzlzqIu",
        "name" : "Taylor Davis",
        "type" : "artist",
        "uri" : "spotify:artist:480xKab3lUPhBBnCzlzqIu"
      }, {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/2v5wjWQZ9ViJUXAetTQcZ6"
        },
        "href" : "https://api.spotify.com/v1/artists/2v5wjWQZ9ViJUXAetTQcZ6",
        "id" : "2v5wjWQZ9ViJUXAetTQcZ6",
        "name" : "Lara de Wit",
        "type" : "artist",
        "uri" : "spotify:artist:2v5wjWQZ9ViJUXAetTQcZ6"
      } ],
      "available_markets" : [ "AD", "AE", "AR", "AT", "AU", "BE", "BG", "BH", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "SA", "SE", "SG", "SK", "SV", "TH", "TN", "TR", "TW", "US", "UY", "VN", "ZA" ],
      "disc_number" : 1,
      "duration_ms" : 215581,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "QZ8LD1719075"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/0REbBWe0RnsYKd8ZEJicZy"
      },
      "href" : "https://api.spotify.com/v1/tracks/0REbBWe0RnsYKd8ZEJicZy",
      "id" : "0REbBWe0RnsYKd8ZEJicZy",
      "is_local" : false,
      "name" : "The Night We Met - Instrumental",
      "popularity" : 38,
      "preview_url" : "https://p.scdn.co/mp3-preview/8408c7d5c0d2e514fc0f47214954762a0c7c52c0?cid=159ac88b1c534ed7ae41602f1e558a49",
      "track_number" : 1,
      "type" : "track",
      "uri" : "spotify:track:0REbBWe0RnsYKd8ZEJicZy"
    }, {
      "album" : {
        "album_type" : "single",
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/364ovD0MRp9ezaNTkRoLeA"
          },
          "href" : "https://api.spotify.com/v1/artists/364ovD0MRp9ezaNTkRoLeA",
          "id" : "364ovD0MRp9ezaNTkRoLeA",
          "name" : "Gavin Mikhail",
          "type" : "artist",
          "uri" : "spotify:artist:364ovD0MRp9ezaNTkRoLeA"
        } ],
        "available_markets" : [ "AD", "AE", "AR", "AT", "AU", "BE", "BG", "BH", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "SA", "SE", "SG", "SK", "SV", "TH", "TN", "TR", "TW", "US", "UY", "VN", "ZA" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/2pM0eE0dsyGjzVbLtrr5Oz"
        },
        "href" : "https://api.spotify.com/v1/albums/2pM0eE0dsyGjzVbLtrr5Oz",
        "id" : "2pM0eE0dsyGjzVbLtrr5Oz",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/ab67616d0000b2736143574d0d8ec8b2708f1aff",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/ab67616d00001e026143574d0d8ec8b2708f1aff",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/ab67616d000048516143574d0d8ec8b2708f1aff",
          "width" : 64
        } ],
        "name" : "The Night We Met",
        "release_date" : "2017-05-10",
        "release_date_precision" : "day",
        "total_tracks" : 4,
        "type" : "album",
        "uri" : "spotify:album:2pM0eE0dsyGjzVbLtrr5Oz"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/364ovD0MRp9ezaNTkRoLeA"
        },
        "href" : "https://api.spotify.com/v1/artists/364ovD0MRp9ezaNTkRoLeA",
        "id" : "364ovD0MRp9ezaNTkRoLeA",
        "name" : "Gavin Mikhail",
        "type" : "artist",
        "uri" : "spotify:artist:364ovD0MRp9ezaNTkRoLeA"
      } ],
      "available_markets" : [ "AD", "AE", "AR", "AT", "AU", "BE", "BG", "BH", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "SA", "SE", "SG", "SK", "SV", "TH", "TN", "TR", "TW", "US", "UY", "VN", "ZA" ],
      "disc_number" : 1,
      "duration_ms" : 161149,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "TCADB1749012"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/2StXXVGXLuLXl34wnGgape"
      },
      "href" : "https://api.spotify.com/v1/tracks/2StXXVGXLuLXl34wnGgape",
      "id" : "2StXXVGXLuLXl34wnGgape",
      "is_local" : false,
      "name" : "The Night We Met - Acoustic",
      "popularity" : 42,
      "preview_url" : "https://p.scdn.co/mp3-preview/4118804ad47007c38177df40824779e52dffcabc?cid=159ac88b1c534ed7ae41602f1e558a49",
      "track_number" : 2,
      "type" : "track",
      "uri" : "spotify:track:2StXXVGXLuLXl34wnGgape"
    }, {
      "album" : {
        "album_type" : "album",
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/1sv4gTq127OMmuGVbaZbfU"
          },
          "href" : "https://api.spotify.com/v1/artists/1sv4gTq127OMmuGVbaZbfU",
          "id" : "1sv4gTq127OMmuGVbaZbfU",
          "name" : "furino",
          "type" : "artist",
          "uri" : "spotify:artist:1sv4gTq127OMmuGVbaZbfU"
        } ],
        "available_markets" : [ "AD", "AE", "AR", "AT", "AU", "BE", "BG", "BH", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "SA", "SE", "SG", "SK", "SV", "TH", "TN", "TR", "TW", "US", "UY", "VN", "ZA" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/6u0rNhJ97Sg2XWZ2JVBGVo"
        },
        "href" : "https://api.spotify.com/v1/albums/6u0rNhJ97Sg2XWZ2JVBGVo",
        "id" : "6u0rNhJ97Sg2XWZ2JVBGVo",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/ab67616d0000b273b7f76ccce000fb2307963350",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/ab67616d00001e02b7f76ccce000fb2307963350",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/ab67616d00004851b7f76ccce000fb2307963350",
          "width" : 64
        } ],
        "name" : "beat tape 01",
        "release_date" : "2017-12-10",
        "release_date_precision" : "day",
        "total_tracks" : 9,
        "type" : "album",
        "uri" : "spotify:album:6u0rNhJ97Sg2XWZ2JVBGVo"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/1sv4gTq127OMmuGVbaZbfU"
        },
        "href" : "https://api.spotify.com/v1/artists/1sv4gTq127OMmuGVbaZbfU",
        "id" : "1sv4gTq127OMmuGVbaZbfU",
        "name" : "furino",
        "type" : "artist",
        "uri" : "spotify:artist:1sv4gTq127OMmuGVbaZbfU"
      } ],
      "available_markets" : [ "AD", "AE", "AR", "AT", "AU", "BE", "BG", "BH", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "SA", "SE", "SG", "SK", "SV", "TH", "TN", "TR", "TW", "US", "UY", "VN", "ZA" ],
      "disc_number" : 1,
      "duration_ms" : 120453,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "QZAPG1726623"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/6o6EGfLlhUqEV2yNp2wnve"
      },
      "href" : "https://api.spotify.com/v1/tracks/6o6EGfLlhUqEV2yNp2wnve",
      "id" : "6o6EGfLlhUqEV2yNp2wnve",
      "is_local" : false,
      "name" : "the night we met",
      "popularity" : 37,
      "preview_url" : "https://p.scdn.co/mp3-preview/34899e4b3ce481394249b0f048d995fff0f548ad?cid=159ac88b1c534ed7ae41602f1e558a49",
      "track_number" : 1,
      "type" : "track",
      "uri" : "spotify:track:6o6EGfLlhUqEV2yNp2wnve"
    }, {
      "album" : {
        "album_type" : "single",
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/71q9UXgQxHbDBZxx6gX1cO"
          },
          "href" : "https://api.spotify.com/v1/artists/71q9UXgQxHbDBZxx6gX1cO",
          "id" : "71q9UXgQxHbDBZxx6gX1cO",
          "name" : "Haley Klinkhammer",
          "type" : "artist",
          "uri" : "spotify:artist:71q9UXgQxHbDBZxx6gX1cO"
        } ],
        "available_markets" : [ "AD", "AE", "AR", "AT", "AU", "BE", "BG", "BH", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "SA", "SE", "SG", "SK", "SV", "TH", "TN", "TR", "TW", "US", "UY", "VN", "ZA" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/1lsZmn4zCP4FFjlZaf2DCf"
        },
        "href" : "https://api.spotify.com/v1/albums/1lsZmn4zCP4FFjlZaf2DCf",
        "id" : "1lsZmn4zCP4FFjlZaf2DCf",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/ab67616d0000b273ee7f4d0798330f8946274527",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/ab67616d00001e02ee7f4d0798330f8946274527",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/ab67616d00004851ee7f4d0798330f8946274527",
          "width" : 64
        } ],
        "name" : "The Night We Met",
        "release_date" : "2018-04-17",
        "release_date_precision" : "day",
        "total_tracks" : 1,
        "type" : "album",
        "uri" : "spotify:album:1lsZmn4zCP4FFjlZaf2DCf"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/71q9UXgQxHbDBZxx6gX1cO"
        },
        "href" : "https://api.spotify.com/v1/artists/71q9UXgQxHbDBZxx6gX1cO",
        "id" : "71q9UXgQxHbDBZxx6gX1cO",
        "name" : "Haley Klinkhammer",
        "type" : "artist",
        "uri" : "spotify:artist:71q9UXgQxHbDBZxx6gX1cO"
      } ],
      "available_markets" : [ "AD", "AE", "AR", "AT", "AU", "BE", "BG", "BH", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "SA", "SE", "SG", "SK", "SV", "TH", "TN", "TR", "TW", "US", "UY", "VN", "ZA" ],
      "disc_number" : 1,
      "duration_ms" : 229949,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "QZ22B1931533"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/6bO25ss6XNEjjW9QdJrIgV"
      },
      "href" : "https://api.spotify.com/v1/tracks/6bO25ss6XNEjjW9QdJrIgV",
      "id" : "6bO25ss6XNEjjW9QdJrIgV",
      "is_local" : false,
      "name" : "The Night We Met",
      "popularity" : 38,
      "preview_url" : "https://p.scdn.co/mp3-preview/c691d1e1cfcbbe40e13e306ffcf6b4f6de937485?cid=159ac88b1c534ed7ae41602f1e558a49",
      "track_number" : 1,
      "type" : "track",
      "uri" : "spotify:track:6bO25ss6XNEjjW9QdJrIgV"
    }, {
      "album" : {
        "album_type" : "compilation",
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/0LyfQWJT6nXafLPZqxe9Of"
          },
          "href" : "https://api.spotify.com/v1/artists/0LyfQWJT6nXafLPZqxe9Of",
          "id" : "0LyfQWJT6nXafLPZqxe9Of",
          "name" : "Various Artists",
          "type" : "artist",
          "uri" : "spotify:artist:0LyfQWJT6nXafLPZqxe9Of"
        } ],
        "available_markets" : [ "AD", "AE", "AR", "AT", "AU", "BE", "BG", "BH", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "SA", "SE", "SG", "SK", "SV", "TH", "TN", "TR", "TW", "US", "UY", "VN", "ZA" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/6GAXVs7PDWr8Ng1NB0V8Uu"
        },
        "href" : "https://api.spotify.com/v1/albums/6GAXVs7PDWr8Ng1NB0V8Uu",
        "id" : "6GAXVs7PDWr8Ng1NB0V8Uu",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/ab67616d0000b273b3f74532de1b9a5e6a663950",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/ab67616d00001e02b3f74532de1b9a5e6a663950",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/ab67616d00004851b3f74532de1b9a5e6a663950",
          "width" : 64
        } ],
        "name" : "Vibe Like It's 2017",
        "release_date" : "2017-05-01",
        "release_date_precision" : "day",
        "total_tracks" : 12,
        "type" : "album",
        "uri" : "spotify:album:6GAXVs7PDWr8Ng1NB0V8Uu"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/6EPonufTZR87zMCktqtgBx"
        },
        "href" : "https://api.spotify.com/v1/artists/6EPonufTZR87zMCktqtgBx",
        "id" : "6EPonufTZR87zMCktqtgBx",
        "name" : "Washburn",
        "type" : "artist",
        "uri" : "spotify:artist:6EPonufTZR87zMCktqtgBx"
      } ],
      "available_markets" : [ "AD", "AE", "AR", "AT", "AU", "BE", "BG", "BH", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "SA", "SE", "SG", "SK", "SV", "TH", "TN", "TR", "TW", "US", "UY", "VN", "ZA" ],
      "disc_number" : 1,
      "duration_ms" : 193242,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "ESA011709860"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/20KFxECP5bNEsMLKk8HnTZ"
      },
      "href" : "https://api.spotify.com/v1/tracks/20KFxECP5bNEsMLKk8HnTZ",
      "id" : "20KFxECP5bNEsMLKk8HnTZ",
      "is_local" : false,
      "name" : "The Night We Met (13 Reasons Why)",
      "popularity" : 40,
      "preview_url" : "https://p.scdn.co/mp3-preview/6c1a8d9696e1d9c3c5494e3058bbce88b7d55bd4?cid=159ac88b1c534ed7ae41602f1e558a49",
      "track_number" : 9,
      "type" : "track",
      "uri" : "spotify:track:20KFxECP5bNEsMLKk8HnTZ"
    }, {
      "album" : {
        "album_type" : "album",
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/6N1GBr0koYYU0W59ECgg5u"
          },
          "href" : "https://api.spotify.com/v1/artists/6N1GBr0koYYU0W59ECgg5u",
          "id" : "6N1GBr0koYYU0W59ECgg5u",
          "name" : "The Theorist",
          "type" : "artist",
          "uri" : "spotify:artist:6N1GBr0koYYU0W59ECgg5u"
        } ],
        "available_markets" : [ "AD", "AE", "AR", "AT", "AU", "BE", "BG", "BH", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "SA", "SE", "SG", "SK", "SV", "TH", "TN", "TR", "TW", "US", "UY", "VN", "ZA" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/0wro9OKn7tSDSBLull12am"
        },
        "href" : "https://api.spotify.com/v1/albums/0wro9OKn7tSDSBLull12am",
        "id" : "0wro9OKn7tSDSBLull12am",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/ab67616d0000b273145f2a88de02e6fa43c52f57",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/ab67616d00001e02145f2a88de02e6fa43c52f57",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/ab67616d00004851145f2a88de02e6fa43c52f57",
          "width" : 64
        } ],
        "name" : "Piano Covers, Vol. 14",
        "release_date" : "2019-05-13",
        "release_date_precision" : "day",
        "total_tracks" : 13,
        "type" : "album",
        "uri" : "spotify:album:0wro9OKn7tSDSBLull12am"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/6N1GBr0koYYU0W59ECgg5u"
        },
        "href" : "https://api.spotify.com/v1/artists/6N1GBr0koYYU0W59ECgg5u",
        "id" : "6N1GBr0koYYU0W59ECgg5u",
        "name" : "The Theorist",
        "type" : "artist",
        "uri" : "spotify:artist:6N1GBr0koYYU0W59ECgg5u"
      } ],
      "available_markets" : [ "AD", "AE", "AR", "AT", "AU", "BE", "BG", "BH", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "SA", "SE", "SG", "SK", "SV", "TH", "TN", "TR", "TW", "US", "UY", "VN", "ZA" ],
      "disc_number" : 1,
      "duration_ms" : 192983,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "QZES81939509"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/0p3jFafiaqUvlPx7trYExV"
      },
      "href" : "https://api.spotify.com/v1/tracks/0p3jFafiaqUvlPx7trYExV",
      "id" : "0p3jFafiaqUvlPx7trYExV",
      "is_local" : false,
      "name" : "The Night We Met (Piano Arrangement)",
      "popularity" : 33,
      "preview_url" : "https://p.scdn.co/mp3-preview/56ea79fb1571e354ff0905fde09f6ba2c587fcf1?cid=159ac88b1c534ed7ae41602f1e558a49",
      "track_number" : 11,
      "type" : "track",
      "uri" : "spotify:track:0p3jFafiaqUvlPx7trYExV"
    }, {
      "album" : {
        "album_type" : "album",
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/0aeLcja6hKzb7Uz2ou7ulP"
          },
          "href" : "https://api.spotify.com/v1/artists/0aeLcja6hKzb7Uz2ou7ulP",
          "id" : "0aeLcja6hKzb7Uz2ou7ulP",
          "name" : "Noah And The Whale",
          "type" : "artist",
          "uri" : "spotify:artist:0aeLcja6hKzb7Uz2ou7ulP"
        } ],
        "available_markets" : [ "AR", "BO", "BR", "CA", "CL", "CO", "CR", "DO", "EC", "GB", "GT", "HN", "IE", "NI", "PA", "PE", "PY", "SV", "US" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/2BAYuyT9kP620VgwpowIQK"
        },
        "href" : "https://api.spotify.com/v1/albums/2BAYuyT9kP620VgwpowIQK",
        "id" : "2BAYuyT9kP620VgwpowIQK",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/ab67616d0000b273988c6f083e6b6500a4f7f094",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/ab67616d00001e02988c6f083e6b6500a4f7f094",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/ab67616d00004851988c6f083e6b6500a4f7f094",
          "width" : 64
        } ],
        "name" : "Last Night On Earth",
        "release_date" : "2011-01-01",
        "release_date_precision" : "day",
        "total_tracks" : 10,
        "type" : "album",
        "uri" : "spotify:album:2BAYuyT9kP620VgwpowIQK"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/0aeLcja6hKzb7Uz2ou7ulP"
        },
        "href" : "https://api.spotify.com/v1/artists/0aeLcja6hKzb7Uz2ou7ulP",
        "id" : "0aeLcja6hKzb7Uz2ou7ulP",
        "name" : "Noah And The Whale",
        "type" : "artist",
        "uri" : "spotify:artist:0aeLcja6hKzb7Uz2ou7ulP"
      } ],
      "available_markets" : [ "AR", "BO", "BR", "CA", "CL", "CO", "CR", "DO", "EC", "GB", "GT", "HN", "IE", "NI", "PA", "PE", "PY", "SV", "US" ],
      "disc_number" : 1,
      "duration_ms" : 217666,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "GBUM71100384"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/1gdwrQBPtaA8aIGLdKMGt5"
      },
      "href" : "https://api.spotify.com/v1/tracks/1gdwrQBPtaA8aIGLdKMGt5",
      "id" : "1gdwrQBPtaA8aIGLdKMGt5",
      "is_local" : false,
      "name" : "Just Me Before We Met",
      "popularity" : 28,
      "preview_url" : null,
      "track_number" : 6,
      "type" : "track",
      "uri" : "spotify:track:1gdwrQBPtaA8aIGLdKMGt5"
    }, {
      "album" : {
        "album_type" : "single",
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/5KAVfCgSUKnnJaFB9w5OY9"
          },
          "href" : "https://api.spotify.com/v1/artists/5KAVfCgSUKnnJaFB9w5OY9",
          "id" : "5KAVfCgSUKnnJaFB9w5OY9",
          "name" : "Sam Yung",
          "type" : "artist",
          "uri" : "spotify:artist:5KAVfCgSUKnnJaFB9w5OY9"
        } ],
        "available_markets" : [ "AD", "AE", "AR", "AT", "AU", "BE", "BG", "BH", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "SA", "SE", "SG", "SK", "SV", "TH", "TN", "TR", "TW", "US", "UY", "VN", "ZA" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/71BVTUrBggaVK2VkLYJZPk"
        },
        "href" : "https://api.spotify.com/v1/albums/71BVTUrBggaVK2VkLYJZPk",
        "id" : "71BVTUrBggaVK2VkLYJZPk",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/ab67616d0000b273456e6154d7ce47019cb61030",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/ab67616d00001e02456e6154d7ce47019cb61030",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/ab67616d00004851456e6154d7ce47019cb61030",
          "width" : 64
        } ],
        "name" : "The Night We Met (Piano Version)",
        "release_date" : "2017-10-26",
        "release_date_precision" : "day",
        "total_tracks" : 1,
        "type" : "album",
        "uri" : "spotify:album:71BVTUrBggaVK2VkLYJZPk"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/5KAVfCgSUKnnJaFB9w5OY9"
        },
        "href" : "https://api.spotify.com/v1/artists/5KAVfCgSUKnnJaFB9w5OY9",
        "id" : "5KAVfCgSUKnnJaFB9w5OY9",
        "name" : "Sam Yung",
        "type" : "artist",
        "uri" : "spotify:artist:5KAVfCgSUKnnJaFB9w5OY9"
      } ],
      "available_markets" : [ "AD", "AE", "AR", "AT", "AU", "BE", "BG", "BH", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "SA", "SE", "SG", "SK", "SV", "TH", "TN", "TR", "TW", "US", "UY", "VN", "ZA" ],
      "disc_number" : 1,
      "duration_ms" : 208829,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "TCADI1735586"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/4EG8SCYitfNrCQWkWV77lY"
      },
      "href" : "https://api.spotify.com/v1/tracks/4EG8SCYitfNrCQWkWV77lY",
      "id" : "4EG8SCYitfNrCQWkWV77lY",
      "is_local" : false,
      "name" : "The Night We Met (Piano Version)",
      "popularity" : 34,
      "preview_url" : "https://p.scdn.co/mp3-preview/c6ea4da26179d102b456718e357b0bda76b6794a?cid=159ac88b1c534ed7ae41602f1e558a49",
      "track_number" : 1,
      "type" : "track",
      "uri" : "spotify:track:4EG8SCYitfNrCQWkWV77lY"
    }, {
      "album" : {
        "album_type" : "album",
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/1feuQE7d9izI54MoL5Lc7t"
          },
          "href" : "https://api.spotify.com/v1/artists/1feuQE7d9izI54MoL5Lc7t",
          "id" : "1feuQE7d9izI54MoL5Lc7t",
          "name" : "Brooke White",
          "type" : "artist",
          "uri" : "spotify:artist:1feuQE7d9izI54MoL5Lc7t"
        } ],
        "available_markets" : [ "AD", "AE", "AR", "AT", "AU", "BE", "BG", "BH", "BO", "BR", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "SA", "SE", "SG", "SK", "SV", "TH", "TN", "TR", "TW", "US", "UY", "VN", "ZA" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/5SURLT1iZV8rl18SmRp26y"
        },
        "href" : "https://api.spotify.com/v1/albums/5SURLT1iZV8rl18SmRp26y",
        "id" : "5SURLT1iZV8rl18SmRp26y",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/ab67616d0000b27390608144ba5c7b275e5760df",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/ab67616d00001e0290608144ba5c7b275e5760df",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/ab67616d0000485190608144ba5c7b275e5760df",
          "width" : 64
        } ],
        "name" : "Calico",
        "release_date" : "2019-10-04",
        "release_date_precision" : "day",
        "total_tracks" : 12,
        "type" : "album",
        "uri" : "spotify:album:5SURLT1iZV8rl18SmRp26y"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/1feuQE7d9izI54MoL5Lc7t"
        },
        "href" : "https://api.spotify.com/v1/artists/1feuQE7d9izI54MoL5Lc7t",
        "id" : "1feuQE7d9izI54MoL5Lc7t",
        "name" : "Brooke White",
        "type" : "artist",
        "uri" : "spotify:artist:1feuQE7d9izI54MoL5Lc7t"
      } ],
      "available_markets" : [ "AD", "AE", "AR", "AT", "AU", "BE", "BG", "BH", "BO", "BR", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "SA", "SE", "SG", "SK", "SV", "TH", "TN", "TR", "TW", "US", "UY", "VN", "ZA" ],
      "disc_number" : 1,
      "duration_ms" : 265601,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "QM5L61900008"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/3WFhYXGbamUcEIHyPqy9vn"
      },
      "href" : "https://api.spotify.com/v1/tracks/3WFhYXGbamUcEIHyPqy9vn",
      "id" : "3WFhYXGbamUcEIHyPqy9vn",
      "is_local" : false,
      "name" : "The Night We Met",
      "popularity" : 16,
      "preview_url" : "https://p.scdn.co/mp3-preview/29925cb9348745e17b2b859f57be69806463b640?cid=159ac88b1c534ed7ae41602f1e558a49",
      "track_number" : 8,
      "type" : "track",
      "uri" : "spotify:track:3WFhYXGbamUcEIHyPqy9vn"
    }, {
      "album" : {
        "album_type" : "single",
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/4988ULVP4X7nco6pLh1PA2"
          },
          "href" : "https://api.spotify.com/v1/artists/4988ULVP4X7nco6pLh1PA2",
          "id" : "4988ULVP4X7nco6pLh1PA2",
          "name" : "Cimorelli",
          "type" : "artist",
          "uri" : "spotify:artist:4988ULVP4X7nco6pLh1PA2"
        } ],
        "available_markets" : [ "AD", "AE", "AR", "AT", "AU", "BE", "BG", "BH", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "SA", "SE", "SG", "SK", "SV", "TH", "TN", "TR", "TW", "US", "UY", "VN", "ZA" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/1O5pkgUKO5VsMLIFVoGuOC"
        },
        "href" : "https://api.spotify.com/v1/albums/1O5pkgUKO5VsMLIFVoGuOC",
        "id" : "1O5pkgUKO5VsMLIFVoGuOC",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/ab67616d0000b273dffcbe4cb463e8b7f90dd935",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/ab67616d00001e02dffcbe4cb463e8b7f90dd935",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/ab67616d00004851dffcbe4cb463e8b7f90dd935",
          "width" : 64
        } ],
        "name" : "The Night We Met",
        "release_date" : "2017-05-22",
        "release_date_precision" : "day",
        "total_tracks" : 1,
        "type" : "album",
        "uri" : "spotify:album:1O5pkgUKO5VsMLIFVoGuOC"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/4988ULVP4X7nco6pLh1PA2"
        },
        "href" : "https://api.spotify.com/v1/artists/4988ULVP4X7nco6pLh1PA2",
        "id" : "4988ULVP4X7nco6pLh1PA2",
        "name" : "Cimorelli",
        "type" : "artist",
        "uri" : "spotify:artist:4988ULVP4X7nco6pLh1PA2"
      } ],
      "available_markets" : [ "AD", "AE", "AR", "AT", "AU", "BE", "BG", "BH", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "SA", "SE", "SG", "SK", "SV", "TH", "TN", "TR", "TW", "US", "UY", "VN", "ZA" ],
      "disc_number" : 1,
      "duration_ms" : 230291,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "QMF921750053"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/3Gy10sZDdOE2TNHXIGZD59"
      },
      "href" : "https://api.spotify.com/v1/tracks/3Gy10sZDdOE2TNHXIGZD59",
      "id" : "3Gy10sZDdOE2TNHXIGZD59",
      "is_local" : false,
      "name" : "The Night We Met",
      "popularity" : 26,
      "preview_url" : "https://p.scdn.co/mp3-preview/87dcd75eca9a08dcf5df83f6439b2a16902a62d5?cid=159ac88b1c534ed7ae41602f1e558a49",
      "track_number" : 1,
      "type" : "track",
      "uri" : "spotify:track:3Gy10sZDdOE2TNHXIGZD59"
    }, {
      "album" : {
        "album_type" : "single",
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/4CmTG0RbnKCMFFczXd4LaY"
          },
          "href" : "https://api.spotify.com/v1/artists/4CmTG0RbnKCMFFczXd4LaY",
          "id" : "4CmTG0RbnKCMFFczXd4LaY",
          "name" : "Victor Pizarro",
          "type" : "artist",
          "uri" : "spotify:artist:4CmTG0RbnKCMFFczXd4LaY"
        } ],
        "available_markets" : [ "AD", "AE", "AR", "AT", "AU", "BE", "BG", "BH", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "SA", "SE", "SG", "SK", "SV", "TH", "TN", "TR", "TW", "US", "UY", "VN", "ZA" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/2DMICwVlv2h08coBFsQLIC"
        },
        "href" : "https://api.spotify.com/v1/albums/2DMICwVlv2h08coBFsQLIC",
        "id" : "2DMICwVlv2h08coBFsQLIC",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/ab67616d0000b273f1b147dcc4890e97a381fce6",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/ab67616d00001e02f1b147dcc4890e97a381fce6",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/ab67616d00004851f1b147dcc4890e97a381fce6",
          "width" : 64
        } ],
        "name" : "The Night We Met",
        "release_date" : "2019-01-14",
        "release_date_precision" : "day",
        "total_tracks" : 2,
        "type" : "album",
        "uri" : "spotify:album:2DMICwVlv2h08coBFsQLIC"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/4CmTG0RbnKCMFFczXd4LaY"
        },
        "href" : "https://api.spotify.com/v1/artists/4CmTG0RbnKCMFFczXd4LaY",
        "id" : "4CmTG0RbnKCMFFczXd4LaY",
        "name" : "Victor Pizarro",
        "type" : "artist",
        "uri" : "spotify:artist:4CmTG0RbnKCMFFczXd4LaY"
      } ],
      "available_markets" : [ "AD", "AE", "AR", "AT", "AU", "BE", "BG", "BH", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "SA", "SE", "SG", "SK", "SV", "TH", "TN", "TR", "TW", "US", "UY", "VN", "ZA" ],
      "disc_number" : 1,
      "duration_ms" : 193776,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "ESA011901291"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/2OeTBu9n5pvp3ZMLlCI9Bx"
      },
      "href" : "https://api.spotify.com/v1/tracks/2OeTBu9n5pvp3ZMLlCI9Bx",
      "id" : "2OeTBu9n5pvp3ZMLlCI9Bx",
      "is_local" : false,
      "name" : "The Night We Met - Spanish Version",
      "popularity" : 26,
      "preview_url" : "https://p.scdn.co/mp3-preview/3448753081ad6b91715a336a8641029e6a436fef?cid=159ac88b1c534ed7ae41602f1e558a49",
      "track_number" : 2,
      "type" : "track",
      "uri" : "spotify:track:2OeTBu9n5pvp3ZMLlCI9Bx"
    }, {
      "album" : {
        "album_type" : "single",
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/364ovD0MRp9ezaNTkRoLeA"
          },
          "href" : "https://api.spotify.com/v1/artists/364ovD0MRp9ezaNTkRoLeA",
          "id" : "364ovD0MRp9ezaNTkRoLeA",
          "name" : "Gavin Mikhail",
          "type" : "artist",
          "uri" : "spotify:artist:364ovD0MRp9ezaNTkRoLeA"
        } ],
        "available_markets" : [ "AD", "AE", "AR", "AT", "AU", "BE", "BG", "BH", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "SA", "SE", "SG", "SK", "SV", "TH", "TN", "TR", "TW", "US", "UY", "VN", "ZA" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/2pM0eE0dsyGjzVbLtrr5Oz"
        },
        "href" : "https://api.spotify.com/v1/albums/2pM0eE0dsyGjzVbLtrr5Oz",
        "id" : "2pM0eE0dsyGjzVbLtrr5Oz",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/ab67616d0000b2736143574d0d8ec8b2708f1aff",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/ab67616d00001e026143574d0d8ec8b2708f1aff",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/ab67616d000048516143574d0d8ec8b2708f1aff",
          "width" : 64
        } ],
        "name" : "The Night We Met",
        "release_date" : "2017-05-10",
        "release_date_precision" : "day",
        "total_tracks" : 4,
        "type" : "album",
        "uri" : "spotify:album:2pM0eE0dsyGjzVbLtrr5Oz"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/364ovD0MRp9ezaNTkRoLeA"
        },
        "href" : "https://api.spotify.com/v1/artists/364ovD0MRp9ezaNTkRoLeA",
        "id" : "364ovD0MRp9ezaNTkRoLeA",
        "name" : "Gavin Mikhail",
        "type" : "artist",
        "uri" : "spotify:artist:364ovD0MRp9ezaNTkRoLeA"
      } ],
      "available_markets" : [ "AD", "AE", "AR", "AT", "AU", "BE", "BG", "BH", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "SA", "SE", "SG", "SK", "SV", "TH", "TN", "TR", "TW", "US", "UY", "VN", "ZA" ],
      "disc_number" : 1,
      "duration_ms" : 161548,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "TCADB1754677"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/1VuL5Ut4RIXzPbfQ3Vp2fd"
      },
      "href" : "https://api.spotify.com/v1/tracks/1VuL5Ut4RIXzPbfQ3Vp2fd",
      "id" : "1VuL5Ut4RIXzPbfQ3Vp2fd",
      "is_local" : false,
      "name" : "The Night We Met - Chill Out Version",
      "popularity" : 25,
      "preview_url" : "https://p.scdn.co/mp3-preview/58bc2dccab6a2db7e5b3cc1b91d2e36e6ece2f11?cid=159ac88b1c534ed7ae41602f1e558a49",
      "track_number" : 4,
      "type" : "track",
      "uri" : "spotify:track:1VuL5Ut4RIXzPbfQ3Vp2fd"
    }, {
      "album" : {
        "album_type" : "compilation",
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/0LyfQWJT6nXafLPZqxe9Of"
          },
          "href" : "https://api.spotify.com/v1/artists/0LyfQWJT6nXafLPZqxe9Of",
          "id" : "0LyfQWJT6nXafLPZqxe9Of",
          "name" : "Various Artists",
          "type" : "artist",
          "uri" : "spotify:artist:0LyfQWJT6nXafLPZqxe9Of"
        } ],
        "available_markets" : [ "AD", "AE", "AR", "AT", "AU", "BE", "BG", "BH", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "SA", "SE", "SG", "SK", "SV", "TH", "TN", "TR", "TW", "US", "UY", "VN", "ZA" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/03Mcn6ITH2MtlQjYqU0oq1"
        },
        "href" : "https://api.spotify.com/v1/albums/03Mcn6ITH2MtlQjYqU0oq1",
        "id" : "03Mcn6ITH2MtlQjYqU0oq1",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/8f00507e460b70a932f82c187b03a84658c13278",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/d4f1c33d1c6a8c2255b84ba2ed8dfd576f9c11a9",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/d0154183f1aeb255fd6d7c82a8bb849ad28462c3",
          "width" : 64
        } ],
        "name" : "Cambodian Rocks",
        "release_date" : "1974-05-13",
        "release_date_precision" : "day",
        "total_tracks" : 22,
        "type" : "album",
        "uri" : "spotify:album:03Mcn6ITH2MtlQjYqU0oq1"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/6aBWAoJJ2F6HD6mTr2aLZ0"
        },
        "href" : "https://api.spotify.com/v1/artists/6aBWAoJJ2F6HD6mTr2aLZ0",
        "id" : "6aBWAoJJ2F6HD6mTr2aLZ0",
        "name" : "Ros Serey Sothea",
        "type" : "artist",
        "uri" : "spotify:artist:6aBWAoJJ2F6HD6mTr2aLZ0"
      } ],
      "available_markets" : [ "AD", "AE", "AR", "AT", "AU", "BE", "BG", "BH", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "SA", "SE", "SG", "SK", "SV", "TH", "TN", "TR", "TW", "US", "UY", "VN", "ZA" ],
      "disc_number" : 1,
      "duration_ms" : 201404,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "USDHM1410507"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/7agRgOS9XPxZ94bvjffCLe"
      },
      "href" : "https://api.spotify.com/v1/tracks/7agRgOS9XPxZ94bvjffCLe",
      "id" : "7agRgOS9XPxZ94bvjffCLe",
      "is_local" : false,
      "name" : "Retrey Yung Joup Knea (The Night We Met)",
      "popularity" : 16,
      "preview_url" : "https://p.scdn.co/mp3-preview/d1ce4271e0de11dd310a6db5493501fddb793813?cid=159ac88b1c534ed7ae41602f1e558a49",
      "track_number" : 22,
      "type" : "track",
      "uri" : "spotify:track:7agRgOS9XPxZ94bvjffCLe"
    } ],
    "limit" : 20,
    "next" : "https://api.spotify.com/v1/search?query=the+night+we+met&type=track&offset=20&limit=20",
    "offset" : 0,
    "previous" : null,
    "total" : 204
  }
})

export {
  apiHost,
  searchSongs,
  getAudioFeatures,
  getRecommendation
}
