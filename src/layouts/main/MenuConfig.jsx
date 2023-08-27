// routes
import { PATH_AUTH, PATHS,PATH_AFTER_LOGIN } from '../../routes/paths';
// components
import { Iconify } from '../../components';

// ----------------------------------------

const ICON_SIZE = {
  width: 22,
  height: 22,
};

const menuConfig = [
  {
    title: 'Home',
    icon: <Iconify icon={'eva:home-fill'} {...ICON_SIZE} />,
    path: '/',
  },
  {
    title: 'Pages',
    path: '/pages',
    icon: <Iconify icon={'eva:file-fill'} {...ICON_SIZE} />,
    children: [
      {
        subheader: 'Other',
        items: [
          { title: 'About us', path: PATHS.root },
          { title: 'Contact us', path: PATHS.root },
          { title: 'FAQs', path: PATHS.root },
          { title: 'Pricing', path: PATHS.root },
          { title: 'Payment', path: PATHS.root },
          { title: 'Maintenance', path: PATHS.root },
          { title: 'Coming Soon', path: PATHS.root },
        ],
      },
      {
        subheader: 'Authentication',
        items: [
          { title: 'Login', path: PATH_AUTH.login },
          // { title: 'Register', path: PATH_AUTH.registerUnprotected },
          // { title: 'Reset password', path: PATH_AUTH.resetPassword },
          // { title: 'Verify code', path: PATH_AUTH.verify },
        ],
      },
      {
        subheader: 'Error',
        items: [
          { title: 'Page 404', path: PATHS.page404 },
          { title: 'Page 500', path: PATHS.page500 },
        ],
      },
      {
        subheader: 'Dashboard',
        items: [{ title: 'Dashboard', path: PATH_AFTER_LOGIN }],
      },
    ],
  },
  {
    title: 'Documentation',
    icon: <Iconify icon={'eva:book-open-fill'} {...ICON_SIZE} />,
    path: PATH_AFTER_LOGIN,
  },
];

export default menuConfig;
