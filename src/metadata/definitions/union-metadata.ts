import { UnionFromClasses } from "../../decorators/unions";
import { ArrayElementTypes } from "../../helpers/utils";
import { ClassType } from "../../interfaces";

export interface UnionMetadata {
  types: ClassType[];
  name: string;
  description?: string;
  resolveType?: (instance: UnionFromClasses<ClassType[]>) => ArrayElementTypes<ClassType[]>;
}
export interface UnionMetadataWithSymbol extends UnionMetadata {
  symbol: symbol;
}
