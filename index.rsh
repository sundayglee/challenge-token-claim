'reach 0.1';
'use strict';

export const main = Reach.App(() => {
    const A = Participant('A', {
        rewardAmount: UInt,
        ready: Fun([], Null),
        deadline: UInt,
        maxParticipants: UInt,
        stakeAmount: UInt
    });

    const B = API('B', {
        registerParticipation: Fun([], Bool)
    });

    const C = API('C', {
        claimReward: Fun([Address], Bool),
        timesUp: Fun([], Bool),
    });

    init()

    A.only(() => {
        const rewardAmount = declassify(interact.rewardAmount);
        const maxParticipants = declassify(interact.maxParticipants);
        const deadline = declassify(interact.deadline);
        const stakeAmount = declassify(interact.stakeAmount);
    });

    A.publish(rewardAmount, maxParticipants, deadline, stakeAmount);

    commit();

    A.publish();
    A.interact.ready();

    const deadlineTotal = relativeTime(deadline);

    const PPT = new Set();

   // const totalInContract = balance() + pricePool

    const [ keepGoing, howMany ] =
        parallelReduce([true, 0])
        .invariant(balance()  == (howMany * stakeAmount))
        .invariant(PPT.Map.size() == howMany)
        .while(keepGoing)
        .api_(B.registerParticipation, () => {
            check(!PPT.member(this), 'Not in the list');               
            check( howMany <= maxParticipants);   
            return [stakeAmount, (k) => {
                k(true);
                PPT.insert(this);
                return [ keepGoing, howMany + 1];
            }];
        })
        .api_(C.claimReward, (who) => {
            check( this == A, 'You are the deployer');   
            check( PPT.member(who), 'You are in the list');
            return [rewardAmount, (k) => {
                k(true);
                transfer(stakeAmount + rewardAmount).to(who);
                PPT.remove(who);
                return [ keepGoing, howMany - 1];
            }];
        })
        .timeout( deadlineTotal, () => {
            const [[], k ] = call(C.timesUp);
            k(true);
            return [false, howMany]
        });

    transfer(balance()).to(A);
    commit();
    exit();    
});

