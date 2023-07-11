const router = require("express").Router();
const passport = require("passport");
const AuthController = require("../controllers/auth-controller");
const asyncHandler = require("../middlewares/async-handler");
const Validate = require("../middlewares/validate");

router.get(
    "/login/google",
    passport.authenticate("google", {
        scope: ["profile", "email"],
        session: false,
    })
);

router.get(
    "/google/callback",
    passport.authenticate("google", {
        failureMessage: "Cannot login",
    }),
    (req, res) => {}
);

router.post(
    "/signin",
    Validate.signin,
    asyncHandler(AuthController.signin)
);
router.post("/login", Validate.login, asyncHandler(AuthController.login));
router.get("/refresh", asyncHandler(AuthController.refresh));
router.get(
    "/me",
    passport.authenticate("jwt", { session: false }),
    (req, res) => {
        res.json({user:req.user});
    }
);
module.exports = router;
