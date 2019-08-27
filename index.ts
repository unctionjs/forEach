import fromFunctorToPairs from "@unction/fromfunctortopairs";
export default function forEach (unction) {
  return function forEachUnction (functor) {
    if (typeof functor.forEach === "function") {
      functor.forEach((value, key) => {
        unction(value)(key);
      });

      return functor;
    }

    return fromFunctorToPairs(functor).forEach(([key, value]) => {
      unction(value)(key);
    });
  };
}
