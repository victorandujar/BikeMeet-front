import { rest } from "msw";

const routes = {
  user: "/users",
  login: "/login",
};

export const handlers = [
  rest.post(
    `${process.env.REACT_APP_URL_API}${routes.user}${routes.login}`,
    async (req, res, ctx) =>
      res(ctx.status(200), ctx.json({ token: "vik27634fvj" }))
  ),
];
