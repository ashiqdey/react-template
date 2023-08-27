const ROOTS_AUTH = '/auth';
const ROOTS_DASHBOARD = '/dashboard';


// ----------------------------------------

function path(root, sublink) {
  return `${root}${sublink}`;
}


// ----------------------------------------

export const PATH_AUTH = {
  root: ROOTS_AUTH,
  login: path(ROOTS_AUTH, '/login'),
  verify: path(ROOTS_AUTH, '/verify')
};


export const PATHS = {
  contact: '/contact-us',
  page404: '/404',
  page500: '/500',

  root: '/',
  general: {
    root: path(ROOTS_DASHBOARD, '/app'),
    blog: path(ROOTS_DASHBOARD, '/blog'),
  },
};

// ROOT PATH AFTER LOGIN SUCCESSFUL
export const PATH_AFTER_LOGIN = PATHS.general.root; 
