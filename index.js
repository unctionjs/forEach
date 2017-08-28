export default function forEach (unction: any => KeyType => any): Function {
  return function forEachUnction (functor: FunctorType): FunctorType {
    if (typeof functor.forEach === "function") {
      functor.forEach((value: any, key: KeyType) => {
        unction(value)(key)
      })

      return functor
    }

    if (functor.toString() === "[object Object]") {
      Object.entries(functor).forEach(([key, value]: [KeyType, any]) => {
        unction(value)(key)
      })

      return functor
    }

    throw new Error("Tried to figure out the iterative function for functor but couldn't")
  }
}
