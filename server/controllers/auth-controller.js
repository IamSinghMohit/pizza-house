const userService = require("../services/user-service");
const tokenService = require("../services/token-service");
const ErrorResponse = require("../utils/error-response");
const ResponseService = require("../services/response-service");

class AuthController {
    static async signin(req, res, next) {
        const { email, name, password } = req.body;
        const isExist = await userService.findUser({ email });

        if (isExist) {
            return next(new ErrorResponse("Email already exists", 403));
        }

        const user = await userService.createUser({
            name,
            email,
            password,
        });

        await ResponseService.sendCookiesWithUser(res, user);
    }

    static async login(req, res, next) {
        const { email, password } = req.body;
        const user = await userService.findUser({ email });

        if (!user) {
            return next(new ErrorResponse("User does not exist", 404));
        }

        const verifiedUser = await user.comparePassword(password);
        if (verifiedUser) {
            ResponseService.sendCookiesWithUser(res, user);
        } else {
            return next(new ErrorResponse("Invalid credentials", 404));
        }
    }

    static async refresh(req, res, next) {
        // get refresh token from cookie
        const { refreshToken: refreshTokenFromCookie } = req.cookies;

        if (!refreshTokenFromCookie) {
            return next(new ErrorResponse("invalid token", 401));
        }

        // check if token is valid
        const userData = await tokenService.verifyRefreshToken(
            refreshTokenFromCookie
        );

        // Check if token is in db
        const token = await tokenService.findRefreshToken(
            userData.id,
            refreshTokenFromCookie
        );
        if (!token) {
            return next(new ErrorResponse("invalid token", 401));
        }

        // check if valid user
        // ... it was updated

        // Generate new tokens
        const { refreshToken, accessToken } = tokenService.generateTokens({
            _id: userData._id,
        });

        // Update refresh token
        await tokenService.updateRefreshToken(userData._id, refreshToken);

        // put in cookie
        await ResponseService.sendCookies(res, { accessToken, refreshToken });
    }
}

module.exports = AuthController;
