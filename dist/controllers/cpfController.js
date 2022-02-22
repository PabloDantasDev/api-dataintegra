"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cpfController = void 0;
const axios_1 = __importDefault(require("axios"));
async function cpfController(req, res) {
    const params = req.params;
    try {
        const { data } = await axios_1.default.get(`http://api.arcadiancenter.com/?token=3603c524-8609-11ec-a8a3-0242ac120002&base=cpfPro&con=${params.cpf}`);
        res.json(data);
    }
    catch (err) {
        return res.status(400).json({
            message: err.message
        });
    }
}
exports.cpfController = cpfController;
