const { Router } = require("express");
const axios = require("axios");
const { table } = require("console");
const router = Router();

const getAnimeByTitle = async (req, res, next) => {
  let animeResults;
  console.log("title: " + req.query.title);
  try {
    if (req.query.title) {
      animeResults = await axios.get(
        `https://api.jikan.moe/v4/anime?q=${req.query.title}`
      );
    }

    if (animeResults) {
      let final = animeResults.data.data.map((anime) => {
        return {
          title: anime.title,
          url: anime.url,
          rating: anime.rating,
          synopsis: anime.synopsis,
          genres: anime.genres,
          image: anime.images.jpg.large_image_url,
          episodes: anime.episodes,
          status: anime.status,
          id: anime.mal_id,
        };
      });
      console.log(final);
      res.send(final);
    } else {
      console.log("no results");
      res.send("No results");
    }
  } catch (error) {
    next(error);
  }
};

const getCurrentSeason = async (req, res, next) => {
  let currentSeason;
  try {
    currentSeason = await axios.get(`https://api.jikan.moe/v4/seasons/now`);

    if (currentSeason) {
      let final = currentSeason.data.data.map((anime) => {
        return {
          title: anime.title,
          url: anime.url,
          rating: anime.rating,
          synopsis: anime.synopsis,
          genres: anime.genres,
          image: anime.images.jpg.large_image_url,
          episodes: anime.episodes,
          status: anime.status,
        };
      });
      res.send(final);
    }
  } catch (error) {
    next(error);
  }
};

const getUpcomingSeason = async (req, res, next) => {
  let nextSeason;
  try {
    nextSeason = await axios.get(`https://api.jikan.moe/v4/seasons/upcoming`);

    if (nextSeason) {
      let final = nextSeason.data.data.map((anime) => {
        return {
          title: anime.title,
          url: anime.url,
          rating: anime.rating,
          synopsis: anime.synopsis,
          genres: anime.genres,
          image: anime.images.jpg.large_image_url,
          episodes: anime.episodes,
          status: anime.status,
        };
      });
      res.send(final);
    }
  } catch (error) {
    next(error);
  }
};

const getRandomAnime = async (req, res, next) => {
  let Ranime;
  let final;
  try {
    Ranime = await axios.get(`https://api.jikan.moe/v4/random/anime`);

    if (Ranime) {
      final = {
        title: Ranime.data.data.title,
        url: Ranime.data.data.url,
        rating: Ranime.data.data.rating,
        synopsis: Ranime.data.data.synopsis,
        genres: Ranime.data.data.genres,
        image: Ranime.data.data.images.jpg.large_image_url,
        episodes: Ranime.data.data.episodes,
        status: Ranime.data.data.status,
      };
    }
    res.send(final);
  } catch (error) {
    next(error);
  }
};

const getById = async (req, res, next) => {
  let animeResults;
  console.log(req.query.id);
  try {
    if (req.query.id) {
      animeResults = await axios.get(
        `https://api.jikan.moe/v4/anime/${req.query.id}`
      );
    }
    if (animeResults) {
      let final = {
        title: animeResults.data.data.title,
        url: animeResults.data.data.url,
        rating: animeResults.data.data.rating,
        synopsis: animeResults.data.data.synopsis,
        genres: animeResults.data.data.genres,
        image: animeResults.data.data.images.jpg.large_image_url,
        episodes: animeResults.data.data.episodes,
        status: animeResults.data.data.status,
        id: animeResults.data.data.mal_id,
      };

      res.send(final);
    } else {
      res.send("No results");
    }
  } catch (error) {
    next(error);
  }
};

router.get("/anime", getAnimeByTitle);
router.get("/now", getCurrentSeason);
router.get("/upcoming", getUpcomingSeason);
router.get("/randomAnime", getRandomAnime);
router.get("/id", getById);

module.exports = router;
