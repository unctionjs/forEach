import fromFunctorToPairs from "@unction/fromfunctortopairs"


import type {UnaryFunctionType} from "types"
import type {KeyType} from "types"
import type {ValueType} from "types"

export default function forEach (unction: ValueType => KeyType => mixed): UnaryFunctionType {
  return function forEachUnction (functor: FunctorType): FunctorType {
    if (typeof functor.forEach === "function") {
      functor.forEach((value: ValueType, key: KeyType) => {
        unction(value)(key)
      })

      return functor
    }

    return fromFunctorToPairs(functor).forEach(([key, value]: [KeyType | void, ValueType]) => {
      unction(value)(key)
    })
  }
}
