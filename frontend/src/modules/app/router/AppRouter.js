import { PrivateRouters } from "./PrivateRoutes";
import { PublicRouters } from "./PublicRoutes";

export const AppRouter = () => {
  return (
    <div>
      <PublicRouters />
      <PrivateRouters />
    </div>
  );
};
