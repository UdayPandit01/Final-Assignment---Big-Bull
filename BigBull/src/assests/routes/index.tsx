const routes = {
  SplashScreen: {
    SplashScreen: {
      path: 'SplashScreen',
    },
  },

  onboarding: {
    oboard: {
      path: 'Onboard',
    },
  },

  dashboard: {
    path: 'DashBoard',
    Home: {
      path: 'Home',
      currency_Index: {
        path: 'Currency_Index',
      },
      homeProfile: {
        path: 'HomeProfile',
      },
      international_Market: {
        path: 'International_Market',
      },
      nifty50_Card: {
        path: 'Nifty50_Card',
      },
    },
    MarketStatus: {
      path: 'MarketStatus',
    },
    Nifty50: {
      path: 'Nifty50',
    },
  },

  root: {
    // dashboardNaviagtion: {
      path: 'DashboardNavigation',
    // },
  },
};

export default routes;
