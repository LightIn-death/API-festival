module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'd2fcb2a7a5b16d88daf54070e9479fb8'),
  },
});
