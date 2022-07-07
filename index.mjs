import { loadStdlib } from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';

const stdlib = loadStdlib({ REACH_NO_WARN: 'Y' });
const sbal = stdlib.parseCurrency(1000);
const cbal = stdlib.parseCurrency(100);
const accA = await stdlib.newTestAccount(sbal);

const deadline = stdlib.connector === 'CFX' ? 500 : 250;

const ctcA = accA.contract(backend);

console.log(`The deployer address is ${stdlib.formatAddress(accA)}`)


await stdlib.withDisconnect(() =>
    ctcA.p.A({
        rewardAmount: stdlib.parseCurrency(20),
        deadline: deadline,
        maxParticipants: 10,
        stakeAmount: 1,
        ready: stdlib.disconnect
    })
);

const challengers = await stdlib.newTestAccounts(5, cbal);

const willError = async (f) => {
    let e;
    try {
        await f();
        e = false;
    } catch (te) {
        e = te;
    }
    if (e === false) {
        throw Error(`Expected to error, but didn't`);
    }
    console.log(`That last call errored and that's okay`);
};

const ctcWho = (whoi) =>
    challengers[whoi].contract(backend, ctcA.getInfo());

const ppt = async (whoi) => {
    const who = challengers[whoi];
    const ctc = ctcWho(whoi);
    console.log(`${stdlib.formatAddress(who)} is registering participation `);
    await ctc.apis.B.registerParticipation();
};

const do_claim_reward = async (ctc, whoi) => {
    const who = challengers[whoi];
    console.log('Claim reward of', stdlib.formatAddress(who));
    await ctc.apis.C.claimReward(who);
};

const claimreward = (whoi) => do_claim_reward(ctcA, whoi);
const badclaimreward = (whoi) => do_claim_reward(ctcWho(whoi), whoi);
const timesup = async () => {
    console.log('Time is up');
    await ctcA.apis.C.timesUp();
};

await ppt(0);
await ppt(1);
await ppt(2);
await ppt(3);
await ppt(4);
await willError(() => ppt(4));
await claimreward(4);
await claimreward(0);
await willError(() => claimreward(4));
await willError(() => badclaimreward(1));
await claimreward(2);
await willError(() => claimreward(2));

console.log(`We're gonna wait for the deadline`);
await stdlib.wait(deadline);

await timesup();

for (const who of [accA, ...challengers]) {
    console.warn(stdlib.formatAddress(who), 'has',
        stdlib.formatCurrency(await stdlib.balanceOf(who)));
}