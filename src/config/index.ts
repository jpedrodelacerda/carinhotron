interface Config {
  GIPHY_API_KEY: string
};

const config: Config = {
  GIPHY_API_KEY: process.env.REACT_APP_GIPHY_API_KEY as string,
};

export default config;
