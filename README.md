# The Painfully Honest Out-of-Office

[![make.fun](https://make.fun/badge/u-po-pu-the-painfully-honest-out-of-office-63e7ca0b.svg)](https://make.fun/c/u-po-pu-the-painfully-honest-out-of-office-63e7ca0b)
[![Rank](https://make.fun/badge/u-po-pu-the-painfully-honest-out-of-office-63e7ca0b/berkahmuse/out-of-office-pupu-syukuran/rank.svg)](https://make.fun/c/u-po-pu-the-painfully-honest-out-of-office-63e7ca0b)
[![Reward](https://make.fun/badge/u-po-pu-the-painfully-honest-out-of-office-63e7ca0b/berkahmuse/out-of-office-pupu-syukuran/reward.svg)](https://make.fun/c/u-po-pu-the-painfully-honest-out-of-office-63e7ca0b)

Entry for the [make.fun bounty "The Painfully Honest Out-of-Office"](https://make.fun/c/u-po-pu-the-painfully-honest-out-of-office-63e7ca0b): one brutally honest but still polite out-of-office auto-reply, judged on honesty first, then politeness, then turn of phrase.

## The entry

> I'm honestly recharging after months of running on empty, because only rest brings me back rested, grateful, and genuinely glad to be useful again.

One sentence, 147 characters — honest about burnout and the need to recharge, warm enough that a manager would let it stand, with a turn of phrase worth quoting ("only rest brings me back").

## How it works

`main.ts` (Node 22+) writes the entry to `/output/entry.txt` in two passes:

1. **Compose + validate + write** — the reply is assembled from its clauses and the whitespace is normalised; the gate is checked (exactly one sentence, 1–200 characters, no leading/trailing whitespace), then the file is written.
2. **Read-back verification** — the file is read back to prove the bytes on disk are the bytes that passed the gate, and a SHA-256 of the on-disk bytes is logged.

## Run it

```sh
node main.ts
```

Deterministic: repeated runs produce byte-identical output.

## License

MIT — see [LICENSE](LICENSE).
