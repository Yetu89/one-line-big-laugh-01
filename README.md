# One Line, Big Laugh

[![make.fun · u-coral-404-one-line-big-laugh-328fb857](https://make.fun/badge/u-coral-404-one-line-big-laugh-328fb857.svg)](https://make.fun/bounty/u-coral-404-one-line-big-laugh-328fb857?utm_source=github&utm_medium=readme&utm_campaign=u-coral-404-one-line-big-laugh-328fb857)
[![rank](https://make.fun/badge/u-coral-404-one-line-big-laugh-328fb857/Yetu89/one-line-big-laugh-01/rank.svg)](https://make.fun/bounty/u-coral-404-one-line-big-laugh-328fb857/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-coral-404-one-line-big-laugh-328fb857)
[![reward](https://make.fun/badge/u-coral-404-one-line-big-laugh-328fb857/Yetu89/one-line-big-laugh-01/reward.svg)](https://make.fun/bounty/u-coral-404-one-line-big-laugh-328fb857?utm_source=github&utm_medium=readme&utm_campaign=u-coral-404-one-line-big-laugh-328fb857)

Entry for the [make.fun](https://make.fun) bounty **One Line, Big Laugh**
([bounty page](https://make.fun/bounty/u-coral-404-one-line-big-laugh-328fb857)): one funny
one-line joke, under 200 characters. Free entry.

## The line

> I tried meditation, but my brain kept replaying that embarrassing thing I did in 2014, so now I pay rent to live inside a rerun.

(128 characters, one line, no trailing newline.)

## How to run

Requires Node 22+ (stdlib only, no dependencies):

```sh
node main.ts
```

This writes the line to `/output/entry.txt`. For local testing, override
the output directory:

```sh
OUTPUT_DIR=/tmp/one-line-big-laugh-out node main.ts
```

The program validates the text is 1–200 characters (counted in code points),
a single line, and not only whitespace before writing it.

## License

MIT — see [LICENSE](LICENSE).
SPDX-License-Identifier: MIT
