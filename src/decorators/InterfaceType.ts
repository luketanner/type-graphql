import { getMetadataStorage } from "../metadata/getMetadataStorage";
import { getNameDecoratorParams } from "../helpers/decorators";
import { DescriptionOptions, ResolveTypeOptions, SpecificClassDecorator } from "./types";

export type InterfaceOptions<T> = DescriptionOptions & ResolveTypeOptions<T>;

export function InterfaceType(): ClassDecorator;
export function InterfaceType<T>(options: InterfaceOptions<T>): SpecificClassDecorator<T>;
export function InterfaceType<T>(
  name: string,
  options?: InterfaceOptions<T>,
): SpecificClassDecorator<T>;
export function InterfaceType<T>(
  nameOrOptions?: string | InterfaceOptions<T>,
  maybeOptions?: InterfaceOptions<T>,
): SpecificClassDecorator<T> {
  const { name, options } = getNameDecoratorParams(nameOrOptions, maybeOptions);
  return target => {
    getMetadataStorage().collectInterfaceMetadata({
      name: name || target.name,
      target,
      description: options.description,
      resolveType: options.resolveType,
    });
  };
}
