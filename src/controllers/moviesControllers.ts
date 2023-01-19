import { Request, Response } from "express";

//Protocols
import { PostMovie, PutMovie } from "../protocols/movies.js";

//Repositories
import { deleteQuery, getAllQuery, getByGenreQuery, getByPlatformQuery, postQuery, updateQuery } from "../repositories/moviesRepositories.js";

export async function getAllMovies(req: Request, res: Response) {
    try {
        const movies = (await getAllQuery()).rows

        if (movies.length > 0) {
            return res.status(200).send(movies)
        } else {
            return res.status(404).send("We don't have movies registered yet")
        }
    } catch (error) {
        console.log(error)
        return res.sendStatus(500)
    }
};

export async function getMoviesByGenre(req: Request, res: Response) {
    const { genre } = req.params

    try {
        const movies = (await getByGenreQuery(genre)).rows;

        if (movies.length > 0) {
            return res.status(200).send(movies)
        } else {
            return res.status(404).send("We don't have movies registered with this genre yet")
        }
    } catch (error) {
        console.log(error)
        return res.sendStatus(500)
    }
};

export async function getMoviesByPlatform(req: Request, res: Response) {
    const { platform } = req.params

    try {
        const movies = (await getByPlatformQuery(platform)).rows

        if (movies.length > 0) {
            return res.status(200).send(movies)
        } else {
            return res.status(404).send("We don't have movies registered on this platform yet")
        }
    } catch (error) {
        console.log(error)
        return res.sendStatus(500)
    }
};

export async function postMovies(req: Request, res: Response) {
    const { name, platform, genre } = req.body as PostMovie
    
    try {
        const result = (await postQuery(name, platform, genre)).rowCount
        return res.status(201).send(`Inserted ${result} movie`)
    } catch (error) {
        console.log(error)
        return res.sendStatus(500)
    }
};

export async function updateMovies(req: Request, res: Response) {
    const { id } = req.params;
    const { status, rating, summary } = req.body as PutMovie;
    
    try {
        const result = (await updateQuery(Number(id), status, rating, summary)).rowCount;

        if (result > 0) {
            return res.status(201).send(`Updated ${result} movie`);
        } else {
            return res.status(404).send(`Updated ${result} movie`);
        }
    } catch (error) {
        console.log(error);
        return res.sendStatus(500);
    }
};

export async function deleteMovies(req: Request, res: Response) {
    const { id } = req.params
    
    try {
        const result = (await deleteQuery(Number(id))).rowCount;

        if (result > 0) {
            return res.status(200).send(`Deleted ${result} movie`);
        } else {
            return res.status(404).send(`Deleted ${result} movie`);
        }
    } catch (error) {
        console.log(error);
        return res.sendStatus(500);
    }
};