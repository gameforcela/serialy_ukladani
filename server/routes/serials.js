var express = require('express');
const {contentDisposition} = require("express/lib/utils");
var router = express.Router();
var debug = require('debug')('router:serials');

const options = {
	verbose: console.debug
};
const db = require('better-sqlite3')('serials.sqlite', options);

router.get("/", function (req, res, next) {
	const serials = db.prepare('SELECT * FROM Serial').all();
	for(let serial of serials){
		serial.seasons = db.prepare(`SELECT * FROM Season WHERE Season.Serial = ${serial.IdSerial}`).all();

		for(let season of serial.seasons){
			season.episodes = db.prepare(`SELECT * FROM Episode WHERE Episode.Season = ${season.IdSeason}`).all();
		}
	}
	res.send(serials);
});

router.get('/:id', (req, res, next) => {
	const id = req.params.id
	if (id) {
		const serial = db.prepare('SELECT * FROM Serial WHERE IdSerial = ?').get(id);
		serial.seasons = db.prepare(`SELECT * FROM Season WHERE Season.Serial = ${serial.IdSerial} ORDER BY Season.NumberSeason`).all();
		for(let season of serial.seasons){
			season.episodes = db.prepare(`SELECT * FROM Episode WHERE Episode.Season = ${season.IdSeason} ORDER BY Episode.NumberEpisode`).all();
		}
		res.send(serial);
	} else {
		res.send("Not Found");
	}
});


router.post("/serial", (req, res, next) => {

	const body = req.body;
	const name = body.NameSerial;
	const image = body.Image;


	const insert = db.prepare('INSERT INTO Serial (NameSerial, Image) VALUES (?, ?)');
	insert.run(name, image);
	res.send({});
});

router.post("/season", (req, res, next) => {

	const body = req.body;
	const name = body.NameSeason;
	const serial = body.Serial;
	const number = body.NumberSeason;


	const insert = db.prepare('INSERT INTO Season (NameSeason, Serial, NumberSeason) VALUES (?, ?, ?)');
	insert.run(name, serial, number);
	res.send({});
});


router.post("/episode", (req, res, next) => {

	const body = req.body;
	const season = body.Season;
	const number = body.NumberEpisode;
	const name = body.NameEpisode;


	const insert = db.prepare('INSERT INTO Episode (Season, NumberEpisode, NameEpisode) VALUES (?, ?, ?)');
	insert.run(season, number, name);
	res.send({});
});

router.delete('/episode/:id', (req, res, next) => {
	const id = req.params.id
	if (id) {
		const delete_episode = db.prepare('DELETE FROM Episode WHERE Episode.IdEpisode = ?');
		delete_episode.run(id);
		res.sendStatus(200);
	}
	else{
		res.sendStatus(404);
	}
});

router.delete('/season/:id', (req, res, next) => {
	const id = req.params.id
	if (id) {
		const delete_episodes = db.prepare('DELETE FROM Episode WHERE Episode.Season = ?');
		delete_episodes.run(id);
		const delete_season = db.prepare('DELETE FROM Season WHERE Season.IdSeason = ?');
		delete_season.run(id);
		res.sendStatus(200);
	}
	else{
		res.sendStatus(404);
	}
});

router.delete('/serial/:id', (req, res, next) => {
	const id = req.params.id
	if (id) {
		const delete_episodes = db.prepare('DELETE FROM Episode WHERE IdEpisode IN (SELECT e.IdEpisode FROM Episode e INNER JOIN Season s ON e.Season=s.IdSeason WHERE s.Serial =?)');
		delete_episodes.run(id);
		const delete_season = db.prepare('DELETE FROM Season WHERE Season.Serial = ?');
		delete_season.run(id);
		const delete_serial = db.prepare('DELETE FROM Serial WHERE Serial.IdSerial = ?');
		delete_serial.run(id);
		res.sendStatus(200);
	}
	else{
		res.sendStatus(404);
	}
});

router.patch('/serial/:id', (req, res, next) => {
	const body = req.body;
	const id = req.params.id
	console.debug(req.params);
	if (id) {
		const serial = db.prepare('SELECT * FROM Serial WHERE Serial.IdSerial = ?').get(id);
		if(serial){
			Object.assign(serial, body);
			const stm = db.prepare('UPDATE Serial SET NameSerial = ?, Image =? WHERE Serial.IdSerial = ?');
			console.debug(stm);
			const info = stm.run(serial.NameSerial, serial.Image, serial.IdSerial);
			console.debug(info);
			res.sendStatus(200);
		}
		else{
			res.sendStatus(404);
		}
	} else {
		res.sendStatus(404);
	}
});

router.patch('/episode/:id', (req, res, next) => {
	const body = req.body;
	const id = req.params.id
	console.debug(req.params);
	if (id) {
		const episode = db.prepare('SELECT * FROM Episode WHERE Episode.IdEpisode = ?').get(id);
		if(episode){
			Object.assign(episode, body);
			const stm = db.prepare('UPDATE Episode SET Season = ?, NumberEpisode =?, NameEpisode =? WHERE Episode.IdEpisode = ?');
			console.debug(stm);
			const info = stm.run(episode.Season, episode.NumberEpisode, episode.NameEpisode, episode.IdEpisode);
			console.debug(info);
			res.sendStatus(200);
		}
		else{
			res.sendStatus(404);
		}
	} else {
		res.sendStatus(404);
	}
});


module.exports = router;
