const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: "blogapp",
        mongodb_password: "blogapp",
        mongodb_clustername: "cluster0",
        mongodb_database: "blogApp",
      },
    };
  }

  return {
    env: {
      mongodb_username: "blogapp",
      mongodb_password: "blogapp",
      mongodb_clustername: "cluster0",
      mongodb_database: "blogApp",
    },
  };
};
