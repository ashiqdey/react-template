/* eslint-disable react-refresh/only-export-components */
// routes
import {  PATHS } from '../../../routes/paths';
// components
import { Label, SvgIconStyle } from '../../../components';

// ----------------------------------------

const getIcon = (name) => (
  <SvgIconStyle src={`/icons/${name}.svg`} sx={{ width: 1, height: 1 }} />
);

const ICONS = {
  blog: getIcon('ic_blog'),
  cart: getIcon('ic_cart'),
  chat: getIcon('ic_chat'),
  mail: getIcon('ic_mail'),
  user: getIcon('ic_user'),
  kanban: getIcon('ic_kanban'),
  banking: getIcon('ic_banking'),
  calendar: getIcon('ic_calendar'),
  ecommerce: getIcon('ic_ecommerce'),
  analytics: getIcon('ic_analytics'),
  dashboard: getIcon('ic_dashboard'),
  booking: getIcon('ic_booking'),
};

const navConfig = [
  // GENERAL
  // ----------------------------------------
  {
    subheader: 'general',
    items: [
      { title: 'app', path: PATHS.general.root, icon: ICONS.dashboard },
      {
        title: 'e-commerce',
        path: PATHS.general.blog,
        icon: ICONS.ecommerce,
      },
      {
        title: 'analytics',
        path: PATHS.general.blog,
        icon: ICONS.analytics,
      },
      {
        title: 'banking',
        path: PATHS.general.blog,
        icon: ICONS.banking,
      },
      {
        title: 'booking',
        path: PATHS.general.blog,
        icon: ICONS.booking,
      },
    ],
  },

  // MANAGEMENT
  // ----------------------------------------
  // {
  //   subheader: 'management',
  //   items: [
  //     // MANAGEMENT : USER
  //     {
  //       title: 'user',
  //       path: PATHS.user.root,
  //       icon: ICONS.user,
  //       children: [
  //         { title: 'profile', path: PATHS.user.profile },
  //         { title: 'cards', path: PATHS.user.cards },
  //         { title: 'list', path: PATHS.user.list },
  //         { title: 'create', path: PATHS.user.newUser },
  //         { title: 'edit', path: PATHS.user.editById },
  //         { title: 'account', path: PATHS.user.account },
  //       ],
  //     },

  //     // MANAGEMENT : E-COMMERCE
  //     {
  //       title: 'e-commerce',
  //       path: PATHS.eCommerce.root,
  //       icon: ICONS.cart,
  //       children: [
  //         { title: 'shop', path: PATHS.eCommerce.shop },
  //         { title: 'product', path: PATHS.eCommerce.productById },
  //         { title: 'list', path: PATHS.eCommerce.list },
  //         { title: 'create', path: PATHS.eCommerce.newProduct },
  //         { title: 'edit', path: PATHS.eCommerce.editById },
  //         { title: 'checkout', path: PATHS.eCommerce.checkout },
  //         { title: 'invoice', path: PATHS.eCommerce.invoice },
  //       ],
  //     },

  //     // MANAGEMENT : BLOG
  //     {
  //       title: 'blog',
  //       path: PATHS.blog.root,
  //       icon: ICONS.blog,
  //       children: [
  //         { title: 'posts', path: PATHS.blog.posts },
  //         { title: 'post', path: PATHS.blog.postById },
  //         { title: 'new post', path: PATHS.blog.newPost },
  //       ],
  //     },
  //   ],
  // },

  // DOCUMENTATION
  // ----------------------------------------
  {
    subheader: 'documentation',
    items: [
      // DOCUMENTATION : components
      // {
      //   title: 'components',
      //   path: PATHS.user.root,
      //   icon: ICONS.user,
      //   children: [
      //     { title: 'profile', path: PATHS.user.profile },
      //     { title: 'cards', path: PATHS.user.cards },
      //     { title: 'list', path: PATHS.user.list },
      //     { title: 'create', path: PATHS.user.newUser },
      //     { title: 'edit', path: PATHS.user.editById },
      //     { title: 'account', path: PATHS.user.account },
      //   ],
      // },

      
    ],
  },

  // APP
  // ----------------------------------------
  {
    subheader: 'app',
    items: [
      {
        title: 'mail',
        path: PATHS.contact,
        icon: ICONS.mail,
        info: (
          <Label variant='outlined' color='error'>
            +32
          </Label>
        ),
      },
      { title: 'chat', path: PATHS.contact, icon: ICONS.chat },
      {
        title: 'calendar',
        path: PATHS.contact,
        icon: ICONS.calendar,
      },
      {
        title: 'kanban',
        path: PATHS.contact,
        icon: ICONS.kanban,
      },
    ],
  },
];

export default navConfig;
