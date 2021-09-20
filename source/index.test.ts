import "jest-extended";

import { hash, verify } from "./index";

test("#hash", () => {
  expect(hash("hash")).toBeString();
});

test("#verify", () => {
  expect(
    verify(
      "$2a$10$VEosVRHerGyN1ubpvemT6.cFz8g4/0UmdhZOHwKIE1kV5xhjNWsFe",
      "hash",
    ),
  ).toBeTrue();
  expect(
    verify(
      "$2a$10$VEosVRHerGyN1ubpvemT6.cFz8g4/0UmdhZOHwKIE1kV5xhjNWsFe",
      "nash",
    ),
  ).toBeFalse();
});
