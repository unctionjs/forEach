/* eslint-disable no-magic-numbers, no-undefined, flowtype/require-variable-type */
import { spy } from "sinon";

import forEach from "./index";

const unction = spy(([value, key]) => [value, key]);

const sample = (value) => (key) => unction([value, key]);

test("Array", () => {
  forEach(sample)(["a", "b", "c"]);

  expect(unction.calledWith(["a", 0])).toBeTruthy();
  expect(unction.calledWith(["b", 1])).toBeTruthy();
  expect(unction.calledWith(["c", 2])).toBeTruthy();
});

test("Object", () => {
  forEach(sample)({
    aaa: "1",
    bbb: "2",
    ccc: "3",
  });

  expect(unction.calledWith(["1", "aaa"])).toBeTruthy();
  expect(unction.calledWith(["2", "bbb"])).toBeTruthy();
  expect(unction.calledWith(["3", "ccc"])).toBeTruthy();
});

test("Map", () => {
  forEach(sample)(new Map([
    ["a", "b"],
    ["c", "d"],
  ]));

  expect(unction.calledWith(["b", "a"])).toBeTruthy();
  expect(unction.calledWith(["d", "c"])).toBeTruthy();
});

test("Set", () => {
  forEach(sample)(new Set([
    "a",
    "b",
  ]));

  expect(unction.calledWith(["a", "a"])).toBeTruthy();
  expect(unction.calledWith(["b", "b"])).toBeTruthy();
});
