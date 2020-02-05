"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var studentController_1 = require("./controllers/studentController");
var port = 1337;
var app = express_1.default();
app.use(body_parser_1.default.json());
app.use('/students', studentController_1.studentController);
app.get('/', function (req, res) {
    res.send('API is running OK');
});
app.listen(port, function () {
});
//# sourceMappingURL=index.js.map