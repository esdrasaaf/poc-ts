import { QueryResult } from "pg";
import connection from "../database/dt.js";
import { MovieEntity } from "../protocols/movies.js";

export async function getAllQuery(): Promise<QueryResult<MovieEntity>> {
    return connection.query("SELECT * FROM movies ORDER BY status DESC;");
};

export async function getByGenreQuery(genre: string): Promise<QueryResult<MovieEntity>> {
    return connection.query("SELECT * FROM movies WHERE genre = $1 ORDER BY status DESC;", [genre]);
};

export async function getByPlatformQuery(platform: string): Promise<QueryResult<MovieEntity>> {
    return connection.query("SELECT * FROM movies WHERE platform = $1 ORDER BY status DESC;", [platform]);
};

export async function postQuery(name: string, platform: string, genre: string): Promise<QueryResult> {
    return connection.query(`INSERT INTO movies (name, platform, genre) values ($1, $2, $3);`, [name, platform, genre]);
};

export async function updateQuery(id: number, status: boolean, rating: number, summary: string): Promise<QueryResult> {
    return connection.query(`
    UPDATE
        movies
    SET
        status = $1,
        rating = $2,
        summary = $3
    WHERE
        id = $4
    ;`, [status, rating, summary, id]);
};

export async function deleteQuery(id: number): Promise<QueryResult> {
    return connection.query("DELETE FROM movies WHERE id = $1;", [id]);
};