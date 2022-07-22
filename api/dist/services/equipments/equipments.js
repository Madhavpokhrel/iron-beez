var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var equipments_exports = {};
__export(equipments_exports, {
  createEquipment: () => createEquipment,
  deleteEquipment: () => deleteEquipment,
  equipment: () => equipment,
  equipments: () => equipments,
  updateEquipment: () => updateEquipment
});
module.exports = __toCommonJS(equipments_exports);
var import_db = require("../../lib/db");
const equipments = () => {
  return import_db.db.equipment.findMany();
};
const equipment = ({
  id
}) => {
  return import_db.db.equipment.findUnique({
    where: {
      id
    }
  });
};
const createEquipment = ({
  input
}) => {
  return import_db.db.equipment.create({
    data: input
  });
};
const updateEquipment = ({
  id,
  input
}) => {
  return import_db.db.equipment.update({
    data: input,
    where: {
      id
    }
  });
};
const deleteEquipment = ({
  id
}) => {
  return import_db.db.equipment.delete({
    where: {
      id
    }
  });
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  createEquipment,
  deleteEquipment,
  equipment,
  equipments,
  updateEquipment
});
//# sourceMappingURL=equipments.js.map
