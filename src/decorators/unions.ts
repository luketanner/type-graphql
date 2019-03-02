import { ClassType } from "../interfaces";
import { getMetadataStorage } from "../metadata/getMetadataStorage";
import { InstanceSideOfClass, ArrayElementTypes } from "../helpers/utils";

export interface UnionTypeConfig<ObjectTypes extends ClassType[]> {
  name: string;
  description?: string;
  types: ObjectTypes;
  resolveType?: (instance: UnionFromClasses<ObjectTypes>) => ArrayElementTypes<ObjectTypes>;
}

export type UnionFromClasses<T extends any[]> = InstanceSideOfClass<ArrayElementTypes<T>>;

export function createUnionType<T extends ClassType[]>({
  types,
  name,
  description,
  resolveType,
}: UnionTypeConfig<T>): UnionFromClasses<T>;
export function createUnionType({
  types,
  name,
  description,
  resolveType,
}: UnionTypeConfig<ClassType[]>): any {
  const unionMetadataSymbol = getMetadataStorage().collectUnionMetadata({
    types,
    name,
    description,
    resolveType,
  });

  return unionMetadataSymbol;
}
