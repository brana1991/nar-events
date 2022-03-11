module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '3247d94d9d5c7f4e9bf6e35ea8725a00'),
  },
});
