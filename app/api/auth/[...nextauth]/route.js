import NextAuth from "next-auth";

const handler = NextAuth({
    providers: [
        {
            id: "descope",
            name: "Descope",
            type: "oauth",
            wellKnown: "https://api.descope.com/P2vMATlLf08N2hhP21JpajEclPk7/.well-known/openid-configuration",
            authorization: { params: { scope: "openid email profile" } },
            idToken: true,
            clientId: process.env.NEXT_PUBLIC_DESCOPE_PROJECT_ID,
            clientSecret: "<Descope Access Key>",
            checks: ["pkce", "state"],
            profile(profile) {
                return {
                    id: profile.sub,
                    name: profile.name,
                    email: profile.email,
                    image: profile.picture,
                };
            },
        },
    ],
});

export { handler as GET, handler as POST };
