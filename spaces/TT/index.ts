import { strategy as zrc2BalanceOfStrategy } from '../zrc2-balance-of';

export const author = 'bonustrack';
export const version = '0.1.0';

export async function strategy(
  space,
  network,
  provider,
  addresses,
  options,
  snapshot
) {
  const score = await zrc2BalanceOfStrategy(
    space,
    network,
    provider,
    addresses,
    options,
    snapshot
  );
  const totalScore = Object.values(score).reduce((a, b) => a + b, 0);
  return Object.fromEntries(
    Object.entries(score).map((address) => [
      address[0],
      (options.total * address[1]) / totalScore
    ])
  );
}
