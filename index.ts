import fromFunctorToPairs from "@unction/fromfunctortopairs";
import {MapperFunctionType} from "./types";

export default function forEach<A, B> (unction: MapperFunctionType<A, B>) {
  return function forEachUnction (enumerable: Array<A> | Set<A> | RecordType<unknown, A> | string) {
    if (typeof enumerable.forEach === "function") {
      enumerable.forEach((value: A) => {
        unction(value);
      });

      return enumerable;
    }

    return fromFunctorToPairs(enumerable).forEach(([, value]: [unknown, A]) => {
      unction(value);
    });
  };
}
