const { z } = require("zod");
const ErrorResponse = require("../utils/error-response");

class Validate {
    static async signin(req, res, next) {
        try {
            const schema = z.object({
                name: z.string(),
                email: z.string().email("Invalid email format"),
                password: z.string()
            });

            await schema.parseAsync(req.body);
            return next();
        } catch (error) {
            next(error)
        }
    }

    static async login(req, res, next) {
        try {
            const schema = z.object({
                email: z.string().email("Invalid email format"),
                password: z.string().nonempty("Password is required"),
            });

            await schema.parseAsync(req.body);
            return next();
        } catch (error) {
            next(error);
        }
    }
}
module.exports = Validate;
