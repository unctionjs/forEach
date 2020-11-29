# @unction/forEach

![Tests][BADGE_TRAVIS]
![Stability][BADGE_STABILITY]
![Dependencies][BADGE_DEPENDENCY]

>  MapperFunctionType<A, B> => Array<A> | Set<A> | RecordType<unknown, A> | string => Array<A> | Set<A> | RecordType<unknown, A> | string

Takes any kind of enumerable and figures out the best way to iterate over it.

``` javascript
forEach((x) => y)([])
forEach((x) => y)(new Map)
forEach((x) => y)({})
```

[BADGE_TRAVIS]: https://img.shields.io/travis/unctionjs/forEach.svg?maxAge=2592000&style=flat-square
[BADGE_STABILITY]: https://img.shields.io/badge/stability-strong-green.svg?maxAge=2592000&style=flat-square
[BADGE_DEPENDENCY]: https://img.shields.io/david/unctionjs/forEach.svg?maxAge=2592000&style=flat-square
