# Challenge Submission - Challenge Token Claim

*This is a submission for Reach Bear Builder 24H challenge.*

The inspiration for the contract came after seeing how last week Reach 48H challenge was abused by users in which, during the stage to claim rewards, some users submitted the form multiple times.

This contract aim to provide an alternative in which it requires each participant to stake an **x** amount of token at the begining of a competition.

After the competition is complete, if the participant is within the maximum number allocated for the participants, then they are able to receive the amount **x** that they staked to the contract as well as the rewards.

The contract is inspired by the [rsvp](https://github.com/reach-sh/reach-lang/blob/master/examples/rsvp/) example and heavily borrowed code from it with the following changes and additions:

* Ability to set maximum number of participant
* Ability to set stake amount
* This contract require the deployer to have balance equal to the total reward expected to be disbursed to the challengers.

The logic of the contract is simple

1. The contract deployer deploy and sets these variables: rewardAmount, deadline, maxParticipants and stakeAmount.
2. Each challenger has to register to the contract and pay the minium stake amount currently hardcoded as 1
3. After the challenge period is completed, the deployer will return the stakeAmount + rewardAmount to the participants provided that they where within the maxParticipants.
