exports.getSignup = (_req, res) => {
  res.render('auth/signup', {
    title: 'Sign-up',
  });
};
