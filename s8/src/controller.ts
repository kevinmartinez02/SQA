import { Request, Response } from "express";

export const getTasks = (req: Request, res: Response) => {
  res.json({ message: "Hello World" });
};

const tasks = [
  { id: 1, title: "Task 1", description: "Task 1 description" },
  { id: 2, title: "Task 2", description: "Task 2 description" },
  { id: 3, title: "Task 3", description: "Task 3 description" },
];

export const getAllTask = (req: Request, res: Response) => {
  res.json(tasks);
};
