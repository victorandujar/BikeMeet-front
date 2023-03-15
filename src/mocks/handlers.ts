import { rest } from "msw";
import { mockEvents } from "./mocks";

const routes = {
  user: "/users",
  login: "/login",
  events: "/events",
  getEvents: "/",
  register: "/register",
  delete: "/delete/",
};

export const handlers = [
  rest.post(
    `${process.env.REACT_APP_URL_API}${routes.user}${routes.login}`,
    async (req, res, ctx) =>
      res(ctx.status(200), ctx.json({ token: "vik27634fvj" }))
  ),

  rest.get(
    `${process.env.REACT_APP_URL_API}${routes.events}${routes.getEvents}`,
    async (req, res, ctx) => res(ctx.status(200), ctx.json(mockEvents))
  ),
];

export const errorHandlers = [
  rest.get(
    `${process.env.REACT_APP_URL_API}${routes.events}${routes.getEvents}`,
    async (req, res, ctx) => res(ctx.status(404))
  ),
];
