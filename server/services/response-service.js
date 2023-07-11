const UserDto = require("../dtos/user-dto");
const tokenService = require("./token-service");

class ResponseSerivice {
    static async sendCookiesWithUser(res, user) {
        const { accessToken, refreshToken } = tokenService.generateTokens({
            id: user._id,
        });

        await tokenService.CreateOrUpdateRefreshToken(user._id, refreshToken);

        res.cookie("refreshToken", refreshToken, {
            maxAge: 1000 * 60 * 60 * 24 * 30,
            httpOnly: true,
        });

        res.cookie("accessToken", accessToken, {
            maxAge: 1000 * 60 * 60 * 24 * 30,
            httpOnly: true,
        });

        const userDto = new UserDto(user);
        res.status(200).json({ user: userDto });
    }

    static async sendCookies(res, { accessToken, refreshToken }) {
        res.cookie("refreshToken", refreshToken, {
            maxAge: 1000 * 60 * 60 * 24 * 30,
            httpOnly: true,
        });

        res.cookie("accessToken", accessToken, {
            maxAge: 1000 * 60 * 60 * 24 * 30,
            httpOnly: true,
        });

        res.status(200).json({ success: true });
    }
}
module.exports = ResponseSerivice;
