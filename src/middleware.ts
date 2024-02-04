import { withAuth } from "next-auth/middleware";

export default withAuth({
  pages: {
    signIn: "/",
    error: "/",
    verifyRequest: "/",
  },
});

export const config = {
  matcher: ["/home"],
};
