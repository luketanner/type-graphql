import { ClassType } from "../../interfaces";
import { ClassMetadata } from "./class-metadata";

export interface InterfaceMetadata extends ClassMetadata {
  resolveType?: (instance: any) => ClassType;
}
