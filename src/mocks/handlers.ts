import { rest } from "msw";
import { mockEvents } from "./mocks";

const routes = {
  user: "/users",
  login: "/login",
  register: "/register",
  events: "/events",
  getEvents: "/",
  myEvents: "/my-events",
  delete: "/delete/",
  id: "asdjkdhskdsjka",
};

export const handlers = [
  rest.post(
    `${process.env.REACT_APP_URL_API}${routes.user}${routes.login}`,
    (req, res, ctx) => res(ctx.status(200), ctx.json({ token: "vik27634fvj" }))
  ),

  rest.post(
    `${process.env.REACT_APP_URL_API}${routes.user}${routes.register}`,
    (req, res, ctx) => res(ctx.status(200))
  ),

  rest.get(
    `${process.env.REACT_APP_URL_API}${routes.events}${routes.getEvents}`,
    (req, res, ctx) => res(ctx.status(200), ctx.json(mockEvents))
  ),

  rest.get(
    `${process.env.REACT_APP_URL_API}${routes.events}${routes.myEvents}`,
    (req, res, ctx) => res(ctx.status(200), ctx.json(mockEvents))
  ),

  rest.delete(
    `${process.env.REACT_APP_URL_API}${routes.events}${routes.delete}${routes.id}`,
    (req, res, ctx) => res(ctx.status(200))
  ),
];

export const errorHandlers = [
  rest.get(
    `${process.env.REACT_APP_URL_API}${routes.events}${routes.getEvents}`,
    (req, res, ctx) => res(ctx.status(404))
  ),

  rest.get(
    `${process.env.REACT_APP_URL_API}${routes.events}${routes.myEvents}`,
    (req, res, ctx) => res(ctx.status(400))
  ),

  rest.post(
    `${process.env.REACT_APP_URL_API}${routes.user}${routes.register}`,
    (req, res, ctx) => res(ctx.status(400))
  ),

  rest.delete(
    `${process.env.REACT_APP_URL_API}${routes.events}${routes.delete}${routes.id}`,
    (req, res, ctx) => res(ctx.status(400))
  ),
];
