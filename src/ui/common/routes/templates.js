export default {
  root: '/',
  auth: {
    signUp: '/sign-up',
    verificationEmailSent: '/verification-email-sent',
    verifyEmail: '/verify-email',
    login: '/login',
    changePassword: '/password/change',
    forgotPassword: '/password/forgot',
    resetPassword: '/password/reset',
  },
  admin: {
    root: '/admin',
    users: {
      index: '/admin/users'
    }
  },
  claims: {
    root: '/claims',
    my: '/claims',
    new: '/claims/new'
  }
};
