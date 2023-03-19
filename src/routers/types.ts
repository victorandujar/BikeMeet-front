interface Routes {
  login: string;
  register: string;
  mySpace: string;
  create: string;
  detail: string;
}

const endpoints: Routes = {
  login: "/login",
  register: "/sign-up",
  mySpace: "/my-space",
  create: "/create",
  detail: "/detail",
};

export default endpoints;
