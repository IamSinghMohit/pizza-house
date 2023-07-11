const passport = require("passport");
const passportJWT = require("passport-jwt");
const UserService = require("./services/user-service");
const JWTStrategy = passportJWT.Strategy;
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const UserDto = require("./dtos/user-dto");
const ErrorResponse = require("./utils/error-response");

const cookieExtractor = function (req) {
    let token = null;
    if (req && req.cookies) {
        token = req.cookies["accessToken"];
    }
    return token;
};

passport.use(
    new JWTStrategy(
        {
            jwtFromRequest: cookieExtractor,
            secretOrKey: process.env.JWT_ACCESS_TOKEN_SECRET,
        },
        async (jwtPayload, done) => {
            const { exp, id } = jwtPayload;
            console.log(jwtPayload);
            if (Date.now() > exp * 1000) {
                done("Unauthorized", false);
            }
            let user = await UserService.findUser({ id: id });
            if (user) {
                return done(null, new UserDto(user));
            }
            return done(new ErrorResponse("User not found", 404), false);
        }
    )
);

passport.use(
    new GoogleStrategy(
        {
            clientID: process.env.CLIENT_ID,
            clientSecret: process.env.CLIENT_SECRET,
            callbackURL: "http://localhost:3001/auth/google/callback",
        },
        async (req, accessToken, refreshToken, profile, cb) => {
            const defaultUser = {
                name: profile.givenName,
                email: profile.email[0].value,
                avatar: profile.photos[0].value,
                googleId: profile.id,
            };
            /* LOGING HERE  */
        }
    )
);
