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
var equipments_sdl_exports = {};
__export(equipments_sdl_exports, {
  schema: () => schema
});
module.exports = __toCommonJS(equipments_sdl_exports);
var import_graphql_tag = __toESM(require("graphql-tag"));
const schema = import_graphql_tag.default`
  type Equipment {
    id: Int!
    heading: String!
    price: Int!
    image_url: String!
    location: String!
    time: String!
  }

  type Query {
    equipments: [Equipment!]! @skipAuth
    equipment(id: Int!): Equipment @requireAuth
  }

  input CreateEquipmentInput {
    heading: String!
    price: Int!
    image_url: String!
    location: String!
    time: String!
  }

  input UpdateEquipmentInput {
    heading: String
    price: Int
    image_url: String
    location: String
    time: String
  }

  type Mutation {
    createEquipment(input: CreateEquipmentInput!): Equipment! @requireAuth
    updateEquipment(id: Int!, input: UpdateEquipmentInput!): Equipment!
      @requireAuth
    deleteEquipment(id: Int!): Equipment! @requireAuth
  }
`;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  schema
});
//# sourceMappingURL=equipments.sdl.js.map
