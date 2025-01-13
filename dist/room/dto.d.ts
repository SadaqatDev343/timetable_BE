export declare class CreateRoomDto {
    buildingName: string;
    floorNumber: string;
    roomNumber: string;
}
declare const UpdateRoomDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateRoomDto>>;
export declare class UpdateRoomDto extends UpdateRoomDto_base {
}
export {};
