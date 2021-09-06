import { NextApiRequest, NextApiResponse } from "next";

import { open } from "sqlite";
import sqlite3 from "sqlite3";
import { IProject } from "../../../models/IProjects";


export default async function getAllprojects(req: NextApiRequest, res: NextApiResponse) {
  const db = await open({
    filename: './database.db',
    driver: sqlite3.Database
  });

  const projects: IProject[] = await db.all('SELECT * FROM projets');

  res.status(200).json(projects);
}