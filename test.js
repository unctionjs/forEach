/* eslint-disable no-magic-numbers, no-undefined, flowtype/require-variable-type */
import {test} from "tap";
import {spy} from "sinon";

import forEach from "./index";

const unction = spy(([value, key]) => [value, key]);

const sample = (value) => (key) => unction([value, key]);

test("Array", ({ok, end}) => {
  forEach(sample)(["a", "b", "c"]);

  ok(unction.calledWith(["a", 0]));
  ok(unction.calledWith(["b", 1]));
  ok(unction.calledWith(["c", 2]));

  end();
});

test("Object", ({ok, end}) => {
  forEach(sample)({
    aaa: "1",
    bbb: "2",
    ccc: "3",
  });

  ok(unction.calledWith(["1", "aaa"]));
  ok(unction.calledWith(["2", "bbb"]));
  ok(unction.calledWith(["3", "ccc"]));

  end();
});

test("Map", ({ok, end}) => {
  forEach(sample)(new Map([
    ["a", "b"],
    ["c", "d"],
  ]));

  ok(unction.calledWith(["b", "a"]));
  ok(unction.calledWith(["d", "c"]));

  end();
});

test("Set", ({ok, end}) => {
  forEach(sample)(new Set([
    "a",
    "b",
  ]));

  ok(unction.calledWith(["a", "a"]));
  ok(unction.calledWith(["b", "b"]));

  end();
});
