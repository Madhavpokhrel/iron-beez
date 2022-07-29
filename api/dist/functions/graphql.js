var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target, mod));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var graphql_exports = {};
__export(graphql_exports, {
  handler: () => handler
});
module.exports = __toCommonJS(graphql_exports);
var import_graphql_server = require("@redwoodjs/graphql-server");
var directives_requireAuth_requireAuth = __toESM(require("../directives/requireAuth/requireAuth"));
var directives_skipAuth_skipAuth = __toESM(require("../directives/skipAuth/skipAuth"));
var sdls_articles_sdl = __toESM(require("../graphql/articles.sdl"));
var sdls_equipments_sdl = __toESM(require("../graphql/equipments.sdl"));
var sdls_featuredItemsEquipments_sdl = __toESM(require("../graphql/featuredItemsEquipments.sdl"));
var sdls_recentlyAddedEquipments_sdl = __toESM(require("../graphql/recentlyAddedEquipments.sdl"));
var import_db = require("../lib/db");
var import_logger = require("../lib/logger");
var services_articles_articles = __toESM(require("../services/articles/articles"));
var services_equipments_equipments = __toESM(require("../services/equipments/equipments"));
var services_featuredItemsEquipments_featuredItemsEquipments = __toESM(require("../services/featuredItemsEquipments/featuredItemsEquipments"));
var services_recentlyAddedEquipments_recentlyAddedEquipments = __toESM(require("../services/recentlyAddedEquipments/recentlyAddedEquipments"));
var import_auth = require("../lib/auth");
let directives = {};
directives.requireAuth_requireAuth = directives_requireAuth_requireAuth;
directives.skipAuth_skipAuth = directives_skipAuth_skipAuth;
let sdls = {};
sdls.articles_sdl = sdls_articles_sdl;
sdls.equipments_sdl = sdls_equipments_sdl;
sdls.featuredItemsEquipments_sdl = sdls_featuredItemsEquipments_sdl;
sdls.recentlyAddedEquipments_sdl = sdls_recentlyAddedEquipments_sdl;
let services = {};
services.articles_articles = services_articles_articles;
services.equipments_equipments = services_equipments_equipments;
services.featuredItemsEquipments_featuredItemsEquipments = services_featuredItemsEquipments_featuredItemsEquipments;
services.recentlyAddedEquipments_recentlyAddedEquipments = services_recentlyAddedEquipments_recentlyAddedEquipments;
const handler = (0, import_graphql_server.createGraphQLHandler)({
  getCurrentUser: import_auth.getCurrentUser,
  loggerConfig: {
    logger: import_logger.logger,
    options: {}
  },
  directives,
  sdls,
  services,
  onException: () => {
    import_db.db.$disconnect();
  }
});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  handler
});
//# sourceMappingURL=graphql.js.map
