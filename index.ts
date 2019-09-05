import fromFunctorToPairs from "@unction/fromfunctortopairs";
import {MapperFunctionType} from "./types";
import {EnumerableType} from "./types";

export default function forEach<A, B> (unction: MapperFunctionType<A, B>) {
  return function forEachUnction (enumerable: EnumerableType<A>) {
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
