# Out-of-Office, Painfully Honest

[![make.fun](https://make.fun/badge/u-po-pu-the-painfully-honest-out-of-office-63e7ca0b.svg)](https://make.fun/c/u-po-pu-the-painfully-honest-out-of-office-63e7ca0b)
[![Rank](https://make.fun/badge/u-po-pu-the-painfully-honest-out-of-office-63e7ca0b/berkahmuse/out-of-office-pupu-syukuran/rank.svg)](https://make.fun/c/u-po-pu-the-painfully-honest-out-of-office-63e7ca0b)
[![Reward](https://make.fun/badge/u-po-pu-the-painfully-honest-out-of-office-63e7ca0b/berkahmuse/out-of-office-pupu-syukuran/reward.svg)](https://make.fun/c/u-po-pu-the-painfully-honest-out-of-office-63e7ca0b)

A submission for the [make.fun bounty "The Painfully Honest Out-of-Office"](https://make.fun/c/u-po-pu-the-painfully-honest-out-of-office-63e7ca0b): a single out-of-office auto-reply that tells the truth about being burned out while staying courteous enough to send to anyone. Scoring weighs honesty first, politeness second, and wording third.

## What it says

> I'm honestly recharging after months of running on empty, because only rest brings me back rested, grateful, and genuinely glad to be useful again.

A single sentence, 147 characters. It admits the burnout outright, frames rest as the thing that restores usefulness, and ends on a warm note a manager would accept — with a quotable turn in the middle ("only rest brings me back").

## How the program works

`main.ts` (Node 22+) produces the reply at `/output/entry.txt` across two passes:

1. **Build, check, write** — the reply is pieced together from its clauses, whitespace is collapsed to single spaces, then the gate runs: exactly one sentence, between 1 and 200 characters, no stray whitespace at either end. Only then is the file written.
2. **Prove it back** — the file is read straight back off disk and compared with the entry that cleared the gate; a SHA-256 of the bytes on disk is printed so any later run can be compared byte for byte.

## Try it

```sh
node main.ts
```

Every run is deterministic: run it twice and the output is identical down to the byte.

## License

MIT — see [LICENSE](LICENSE).
