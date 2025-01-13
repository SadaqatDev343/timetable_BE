"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUserDto = void 0;
const dist_1 = require("@nestjs/mapped-types/dist");
const user_dto_1 = require("./user.dto");
class UpdateUserDto extends (0, dist_1.PartialType)(user_dto_1.createUserDto) {
}
exports.UpdateUserDto = UpdateUserDto;
//# sourceMappingURL=update-User.dto.js.map