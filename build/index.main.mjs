// Automatically generated with Reach 0.1.11 (f1ffa756)
/* eslint-disable */
export const _version = '0.1.11';
export const _versionHash = '0.1.11 (f1ffa756)';
export const _backendVersion = 17;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_Data({
    None: ctc2,
    Some: ctc2
    });
  const map0_ctc = ctc3;
  
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc1, ctc1, ctc1, ctc1],
      4: [ctc0, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_Tuple([ctc1]);
  return {
    mapDataTy: ctc2
    };
  };
export async function A(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for A expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for A expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Tuple([]);
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_Tuple([ctc4]);
  const ctc6 = stdlib.T_Data({
    B_registerParticipation0_85: ctc3,
    C_claimReward0_85: ctc5
    });
  const ctc7 = stdlib.T_Bool;
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false,
    ty: map0_ctc
    });
  
  
  const v806 = stdlib.protect(ctc2, interact.deadline, 'for A\'s interact field deadline');
  const v807 = stdlib.protect(ctc2, interact.maxParticipants, 'for A\'s interact field maxParticipants');
  const v808 = stdlib.protect(ctc2, interact.rewardAmount, 'for A\'s interact field rewardAmount');
  const v809 = stdlib.protect(ctc2, interact.stakeAmount, 'for A\'s interact field stakeAmount');
  
  const txn1 = await (ctc.sendrecv({
    args: [v808, v807, v806, v809],
    evt_cnt: 4,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:31:7:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc2, ctc2, ctc2, ctc2],
    pay: [stdlib.checkedBigNumberify('./index.rsh:31:7:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v813, v814, v815, v816], secs: v818, time: v817, didSend: v33, from: v812 } = txn1;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc2, ctc2, ctc2],
    waitIfNotPresent: false
    }));
  const {data: [v813, v814, v815, v816], secs: v818, time: v817, didSend: v33, from: v812 } = txn1;
  ;
  const txn2 = await (ctc.sendrecv({
    args: [v812, v813, v814, v815, v816, v817],
    evt_cnt: 0,
    funcNum: 1,
    lct: v817,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:35:7:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [], secs: v821, time: v820, didSend: v38, from: v819 } = txn2;
      
      ;
      
      const v830 = stdlib.add(v817, v815);
      const v832 = stdlib.checkedBigNumberify('./index.rsh:45:31:decimal', stdlib.UInt_max, '0');
      const v833 = true;
      const v834 = v820;
      const v841 = stdlib.checkedBigNumberify('./index.rsh:22:5:after expr stmt', stdlib.UInt_max, '0');
      
      if (await (async () => {
        
        return v833;})()) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'from',
          to: v812,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc2, ctc2, ctc2, ctc2, ctc2],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v821, time: v820, didSend: v38, from: v819 } = txn2;
  ;
  const v822 = stdlib.addressEq(v812, v819);
  stdlib.assert(v822, {
    at: './index.rsh:35:7:dot',
    fs: [],
    msg: 'sender correct',
    who: 'A'
    });
  stdlib.protect(ctc0, await interact.ready(), {
    at: './index.rsh:36:21:application',
    fs: ['at ./index.rsh:36:21:application call to [unknown function] (defined at: ./index.rsh:36:21:function exp)', 'at ./index.rsh:36:21:application call to "liftedInteract" (defined at: ./index.rsh:36:21:application)'],
    msg: 'ready',
    who: 'A'
    });
  
  const v830 = stdlib.add(v817, v815);
  let v832 = stdlib.checkedBigNumberify('./index.rsh:45:31:decimal', stdlib.UInt_max, '0');
  let v833 = true;
  let v834 = v820;
  let v841 = stdlib.checkedBigNumberify('./index.rsh:22:5:after expr stmt', stdlib.UInt_max, '0');
  
  while (await (async () => {
    
    return v833;})()) {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc6],
      timeoutAt: ['time', v830],
      waitIfNotPresent: false
      }));
    if (txn3.didTimeout) {
      const txn4 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 4,
        out_tys: [ctc3],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [v1048], secs: v1050, time: v1049, didSend: v774, from: v1047 } = txn4;
      undefined /* setApiDetails */;
      ;
      const v1051 = true;
      await txn4.getOutput('C_timesUp', 'v1051', ctc7, v1051);
      const cv832 = v832;
      const cv833 = false;
      const cv834 = v1049;
      const cv841 = v841;
      
      v832 = cv832;
      v833 = cv833;
      v834 = cv834;
      v841 = cv841;
      
      continue;
      }
    else {
      const {data: [v907], secs: v909, time: v908, didSend: v651, from: v906 } = txn3;
      switch (v907[0]) {
        case 'B_registerParticipation0_85': {
          const v910 = v907[1];
          undefined /* setApiDetails */;
          const v915 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v906), null);
          let v916;
          switch (v915[0]) {
            case 'None': {
              const v917 = v915[1];
              v916 = false;
              
              break;
              }
            case 'Some': {
              const v918 = v915[1];
              v916 = true;
              
              break;
              }
            }
          const v919 = v916 ? false : true;
          stdlib.assert(v919, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./index.rsh:50:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:49:43:application call to [unknown function] (defined at: ./index.rsh:49:43:function exp)', 'at ./index.rsh:45:23:application call to [unknown function] (defined at: ./index.rsh:49:43:function exp)', 'at ./index.rsh:45:23:application call to [unknown function] (defined at: ./index.rsh:45:23:function exp)'],
            msg: 'Not in the list',
            who: 'A'
            });
          const v921 = stdlib.le(v832, v814);
          stdlib.assert(v921, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./index.rsh:51:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:49:43:application call to [unknown function] (defined at: ./index.rsh:49:43:function exp)', 'at ./index.rsh:45:23:application call to [unknown function] (defined at: ./index.rsh:49:43:function exp)', 'at ./index.rsh:45:23:application call to [unknown function] (defined at: ./index.rsh:45:23:function exp)'],
            msg: null,
            who: 'A'
            });
          const v933 = stdlib.add(v841, v816);
          ;
          let v936;
          switch (v915[0]) {
            case 'None': {
              const v937 = v915[1];
              v936 = false;
              
              break;
              }
            case 'Some': {
              const v938 = v915[1];
              v936 = true;
              
              break;
              }
            }
          const v939 = v936 ? false : true;
          stdlib.assert(v939, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./index.rsh:50:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:52:38:application call to [unknown function] (defined at: ./index.rsh:52:38:function exp)'],
            msg: 'Not in the list',
            who: 'A'
            });
          const v943 = true;
          await txn3.getOutput('B_registerParticipation', 'v943', ctc7, v943);
          await stdlib.mapSet(map0, v906, null);
          const v950 = stdlib.add(v832, stdlib.checkedBigNumberify('./index.rsh:55:47:decimal', stdlib.UInt_max, '1'));
          const cv832 = v950;
          const cv833 = true;
          const cv834 = v908;
          const cv841 = v933;
          
          v832 = cv832;
          v833 = cv833;
          v834 = cv834;
          v841 = cv841;
          
          continue;
          break;
          }
        case 'C_claimReward0_85': {
          const v977 = v907[1];
          undefined /* setApiDetails */;
          const v991 = v977[stdlib.checkedBigNumberify('./index.rsh:58:14:spread', stdlib.UInt_max, '0')];
          const v992 = stdlib.addressEq(v906, v812);
          stdlib.assert(v992, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./index.rsh:59:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:58:36:application call to [unknown function] (defined at: ./index.rsh:58:36:function exp)', 'at ./index.rsh:45:23:application call to [unknown function] (defined at: ./index.rsh:58:36:function exp)', 'at ./index.rsh:45:23:application call to [unknown function] (defined at: ./index.rsh:45:23:function exp)'],
            msg: 'You are the deployer',
            who: 'A'
            });
          const v994 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v991), null);
          let v995;
          switch (v994[0]) {
            case 'None': {
              const v996 = v994[1];
              v995 = false;
              
              break;
              }
            case 'Some': {
              const v997 = v994[1];
              v995 = true;
              
              break;
              }
            }
          stdlib.assert(v995, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./index.rsh:60:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:58:36:application call to [unknown function] (defined at: ./index.rsh:58:36:function exp)', 'at ./index.rsh:45:23:application call to [unknown function] (defined at: ./index.rsh:58:36:function exp)', 'at ./index.rsh:45:23:application call to [unknown function] (defined at: ./index.rsh:45:23:function exp)'],
            msg: 'You are in the list',
            who: 'A'
            });
          const v1000 = stdlib.add(v841, v813);
          ;
          let v1024;
          switch (v994[0]) {
            case 'None': {
              const v1025 = v994[1];
              v1024 = false;
              
              break;
              }
            case 'Some': {
              const v1026 = v994[1];
              v1024 = true;
              
              break;
              }
            }
          stdlib.assert(v1024, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./index.rsh:60:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:61:39:application call to [unknown function] (defined at: ./index.rsh:61:39:function exp)'],
            msg: 'You are in the list',
            who: 'A'
            });
          const v1029 = true;
          await txn3.getOutput('C_claimReward', 'v1029', ctc7, v1029);
          const v1036 = stdlib.add(v816, v813);
          const v1040 = stdlib.sub(v1000, v1036);
          ;
          await stdlib.mapSet(map0, v991, undefined /* Nothing */);
          const v1042 = stdlib.sub(v832, stdlib.checkedBigNumberify('./index.rsh:65:47:decimal', stdlib.UInt_max, '1'));
          const cv832 = v1042;
          const cv833 = true;
          const cv834 = v908;
          const cv841 = v1040;
          
          v832 = cv832;
          v833 = cv833;
          v834 = cv834;
          v841 = cv841;
          
          continue;
          break;
          }
        }}
    
    }
  ;
  return;
  
  
  
  
  };
export async function _B_registerParticipation4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _B_registerParticipation4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _B_registerParticipation4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Tuple([]);
  const ctc5 = stdlib.T_Tuple([ctc2]);
  const ctc6 = stdlib.T_Data({
    B_registerParticipation0_85: ctc4,
    C_claimReward0_85: ctc5
    });
  const ctc7 = stdlib.T_Bool;
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v812, v813, v814, v816, v830, v832, v841] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc2, ctc3, ctc3, ctc3, ctc3, ctc3, ctc3]);
  const v853 = ctc.selfAddress();
  const v855 = stdlib.protect(ctc4, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:49:43:application call to [unknown function] (defined at: ./index.rsh:49:43:function exp)', 'at ./index.rsh:45:23:application call to "runB_registerParticipation0_85" (defined at: ./index.rsh:49:14:function exp)', 'at ./index.rsh:45:23:application call to [unknown function] (defined at: ./index.rsh:45:23:function exp)'],
    msg: 'in',
    who: 'B_registerParticipation'
    });
  const v856 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v853), null);
  let v857;
  switch (v856[0]) {
    case 'None': {
      const v858 = v856[1];
      v857 = false;
      
      break;
      }
    case 'Some': {
      const v859 = v856[1];
      v857 = true;
      
      break;
      }
    }
  const v860 = v857 ? false : true;
  stdlib.assert(v860, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:50:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:49:43:application call to [unknown function] (defined at: ./index.rsh:49:43:function exp)', 'at ./index.rsh:45:23:application call to "runB_registerParticipation0_85" (defined at: ./index.rsh:49:14:function exp)', 'at ./index.rsh:45:23:application call to [unknown function] (defined at: ./index.rsh:45:23:function exp)'],
    msg: 'Not in the list',
    who: 'B_registerParticipation'
    });
  const v862 = stdlib.le(v832, v814);
  stdlib.assert(v862, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:51:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:49:43:application call to [unknown function] (defined at: ./index.rsh:49:43:function exp)', 'at ./index.rsh:45:23:application call to "runB_registerParticipation0_85" (defined at: ./index.rsh:49:14:function exp)', 'at ./index.rsh:45:23:application call to [unknown function] (defined at: ./index.rsh:45:23:function exp)'],
    msg: null,
    who: 'B_registerParticipation'
    });
  const v867 = ['B_registerParticipation0_85', v855];
  
  let v890;
  switch (v856[0]) {
    case 'None': {
      const v891 = v856[1];
      v890 = false;
      
      break;
      }
    case 'Some': {
      const v892 = v856[1];
      v890 = true;
      
      break;
      }
    }
  const v893 = v890 ? false : true;
  stdlib.assert(v893, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:50:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:49:43:application call to [unknown function] (defined at: ./index.rsh:49:43:function exp)', 'at ./index.rsh:45:23:application call to [unknown function] (defined at: ./index.rsh:49:43:function exp)', 'at ./index.rsh:45:23:application call to [unknown function] (defined at: ./index.rsh:45:23:function exp)'],
    msg: 'Not in the list',
    who: 'B_registerParticipation'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v812, v813, v814, v816, v830, v832, v841, v867],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc6],
    pay: [v816, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v907], secs: v909, time: v908, didSend: v651, from: v906 } = txn1;
      
      switch (v907[0]) {
        case 'B_registerParticipation0_85': {
          const v910 = v907[1];
          sim_r.txns.push({
            kind: 'api',
            who: "B_registerParticipation"
            });
          stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v906), null);
          const v933 = stdlib.add(v841, v816);
          sim_r.txns.push({
            amt: v816,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          const v943 = true;
          const v944 = await txn1.getOutput('B_registerParticipation', 'v943', ctc7, v943);
          
          await stdlib.simMapSet(sim_r, 0, v906, null);
          const v950 = stdlib.add(v832, stdlib.checkedBigNumberify('./index.rsh:55:47:decimal', stdlib.UInt_max, '1'));
          const v1612 = v950;
          const v1615 = v933;
          sim_r.isHalt = false;
          
          break;
          }
        case 'C_claimReward0_85': {
          const v977 = v907[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc3, ctc3, ctc3, ctc3, ctc3, ctc3, ctc6],
    waitIfNotPresent: false
    }));
  const {data: [v907], secs: v909, time: v908, didSend: v651, from: v906 } = txn1;
  switch (v907[0]) {
    case 'B_registerParticipation0_85': {
      const v910 = v907[1];
      undefined /* setApiDetails */;
      const v915 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v906), null);
      let v916;
      switch (v915[0]) {
        case 'None': {
          const v917 = v915[1];
          v916 = false;
          
          break;
          }
        case 'Some': {
          const v918 = v915[1];
          v916 = true;
          
          break;
          }
        }
      const v919 = v916 ? false : true;
      stdlib.assert(v919, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:50:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:49:43:application call to [unknown function] (defined at: ./index.rsh:49:43:function exp)', 'at ./index.rsh:45:23:application call to [unknown function] (defined at: ./index.rsh:49:43:function exp)', 'at ./index.rsh:45:23:application call to [unknown function] (defined at: ./index.rsh:45:23:function exp)'],
        msg: 'Not in the list',
        who: 'B_registerParticipation'
        });
      const v921 = stdlib.le(v832, v814);
      stdlib.assert(v921, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:51:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:49:43:application call to [unknown function] (defined at: ./index.rsh:49:43:function exp)', 'at ./index.rsh:45:23:application call to [unknown function] (defined at: ./index.rsh:49:43:function exp)', 'at ./index.rsh:45:23:application call to [unknown function] (defined at: ./index.rsh:45:23:function exp)'],
        msg: null,
        who: 'B_registerParticipation'
        });
      const v933 = stdlib.add(v841, v816);
      ;
      let v936;
      switch (v915[0]) {
        case 'None': {
          const v937 = v915[1];
          v936 = false;
          
          break;
          }
        case 'Some': {
          const v938 = v915[1];
          v936 = true;
          
          break;
          }
        }
      const v939 = v936 ? false : true;
      stdlib.assert(v939, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:50:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:52:38:application call to [unknown function] (defined at: ./index.rsh:52:38:function exp)'],
        msg: 'Not in the list',
        who: 'B_registerParticipation'
        });
      const v943 = true;
      const v944 = await txn1.getOutput('B_registerParticipation', 'v943', ctc7, v943);
      if (v651) {
        stdlib.protect(ctc0, await interact.out(v910, v944), {
          at: './index.rsh:49:15:application',
          fs: ['at ./index.rsh:49:15:application call to [unknown function] (defined at: ./index.rsh:49:15:function exp)', 'at ./index.rsh:53:18:application call to "k" (defined at: ./index.rsh:52:38:function exp)', 'at ./index.rsh:52:38:application call to [unknown function] (defined at: ./index.rsh:52:38:function exp)'],
          msg: 'out',
          who: 'B_registerParticipation'
          });
        }
      else {
        }
      
      await stdlib.mapSet(map0, v906, null);
      const v950 = stdlib.add(v832, stdlib.checkedBigNumberify('./index.rsh:55:47:decimal', stdlib.UInt_max, '1'));
      const v1612 = v950;
      const v1615 = v933;
      return;
      
      break;
      }
    case 'C_claimReward0_85': {
      const v977 = v907[1];
      return;
      break;
      }
    }
  
  
  };
export async function _C_claimReward4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _C_claimReward4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _C_claimReward4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Tuple([ctc2]);
  const ctc5 = stdlib.T_Tuple([]);
  const ctc6 = stdlib.T_Data({
    B_registerParticipation0_85: ctc5,
    C_claimReward0_85: ctc4
    });
  const ctc7 = stdlib.T_Bool;
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v812, v813, v814, v816, v830, v832, v841] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc2, ctc3, ctc3, ctc3, ctc3, ctc3, ctc3]);
  const v869 = ctc.selfAddress();
  const v871 = stdlib.protect(ctc4, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:58:36:application call to [unknown function] (defined at: ./index.rsh:58:36:function exp)', 'at ./index.rsh:45:23:application call to "runC_claimReward0_85" (defined at: ./index.rsh:58:14:function exp)', 'at ./index.rsh:45:23:application call to [unknown function] (defined at: ./index.rsh:45:23:function exp)'],
    msg: 'in',
    who: 'C_claimReward'
    });
  const v872 = v871[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v874 = stdlib.addressEq(v869, v812);
  stdlib.assert(v874, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:59:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:58:36:application call to [unknown function] (defined at: ./index.rsh:58:36:function exp)', 'at ./index.rsh:45:23:application call to "runC_claimReward0_85" (defined at: ./index.rsh:58:14:function exp)', 'at ./index.rsh:45:23:application call to [unknown function] (defined at: ./index.rsh:45:23:function exp)'],
    msg: 'You are the deployer',
    who: 'C_claimReward'
    });
  const v876 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v872), null);
  let v877;
  switch (v876[0]) {
    case 'None': {
      const v878 = v876[1];
      v877 = false;
      
      break;
      }
    case 'Some': {
      const v879 = v876[1];
      v877 = true;
      
      break;
      }
    }
  stdlib.assert(v877, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:60:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:58:36:application call to [unknown function] (defined at: ./index.rsh:58:36:function exp)', 'at ./index.rsh:45:23:application call to "runC_claimReward0_85" (defined at: ./index.rsh:58:14:function exp)', 'at ./index.rsh:45:23:application call to [unknown function] (defined at: ./index.rsh:45:23:function exp)'],
    msg: 'You are in the list',
    who: 'C_claimReward'
    });
  const v886 = ['C_claimReward0_85', v871];
  
  let v902;
  switch (v876[0]) {
    case 'None': {
      const v903 = v876[1];
      v902 = false;
      
      break;
      }
    case 'Some': {
      const v904 = v876[1];
      v902 = true;
      
      break;
      }
    }
  stdlib.assert(v902, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:60:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:58:36:application call to [unknown function] (defined at: ./index.rsh:58:36:function exp)', 'at ./index.rsh:45:23:application call to [unknown function] (defined at: ./index.rsh:58:36:function exp)', 'at ./index.rsh:45:23:application call to [unknown function] (defined at: ./index.rsh:45:23:function exp)'],
    msg: 'You are in the list',
    who: 'C_claimReward'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v812, v813, v814, v816, v830, v832, v841, v886],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc6],
    pay: [v813, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v907], secs: v909, time: v908, didSend: v651, from: v906 } = txn1;
      
      switch (v907[0]) {
        case 'B_registerParticipation0_85': {
          const v910 = v907[1];
          
          break;
          }
        case 'C_claimReward0_85': {
          const v977 = v907[1];
          sim_r.txns.push({
            kind: 'api',
            who: "C_claimReward"
            });
          const v991 = v977[stdlib.checkedBigNumberify('./index.rsh:58:14:spread', stdlib.UInt_max, '0')];
          stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v991), null);
          const v1000 = stdlib.add(v841, v813);
          sim_r.txns.push({
            amt: v813,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          const v1029 = true;
          const v1030 = await txn1.getOutput('C_claimReward', 'v1029', ctc7, v1029);
          
          const v1036 = stdlib.add(v816, v813);
          const v1040 = stdlib.sub(v1000, v1036);
          sim_r.txns.push({
            kind: 'from',
            to: v991,
            tok: undefined /* Nothing */
            });
          await stdlib.simMapSet(sim_r, 0, v991, undefined /* Nothing */);
          const v1042 = stdlib.sub(v832, stdlib.checkedBigNumberify('./index.rsh:65:47:decimal', stdlib.UInt_max, '1'));
          const v1624 = v1042;
          const v1627 = v1040;
          sim_r.isHalt = false;
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc3, ctc3, ctc3, ctc3, ctc3, ctc3, ctc6],
    waitIfNotPresent: false
    }));
  const {data: [v907], secs: v909, time: v908, didSend: v651, from: v906 } = txn1;
  switch (v907[0]) {
    case 'B_registerParticipation0_85': {
      const v910 = v907[1];
      return;
      break;
      }
    case 'C_claimReward0_85': {
      const v977 = v907[1];
      undefined /* setApiDetails */;
      const v991 = v977[stdlib.checkedBigNumberify('./index.rsh:58:14:spread', stdlib.UInt_max, '0')];
      const v992 = stdlib.addressEq(v906, v812);
      stdlib.assert(v992, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:59:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:58:36:application call to [unknown function] (defined at: ./index.rsh:58:36:function exp)', 'at ./index.rsh:45:23:application call to [unknown function] (defined at: ./index.rsh:58:36:function exp)', 'at ./index.rsh:45:23:application call to [unknown function] (defined at: ./index.rsh:45:23:function exp)'],
        msg: 'You are the deployer',
        who: 'C_claimReward'
        });
      const v994 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v991), null);
      let v995;
      switch (v994[0]) {
        case 'None': {
          const v996 = v994[1];
          v995 = false;
          
          break;
          }
        case 'Some': {
          const v997 = v994[1];
          v995 = true;
          
          break;
          }
        }
      stdlib.assert(v995, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:60:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:58:36:application call to [unknown function] (defined at: ./index.rsh:58:36:function exp)', 'at ./index.rsh:45:23:application call to [unknown function] (defined at: ./index.rsh:58:36:function exp)', 'at ./index.rsh:45:23:application call to [unknown function] (defined at: ./index.rsh:45:23:function exp)'],
        msg: 'You are in the list',
        who: 'C_claimReward'
        });
      const v1000 = stdlib.add(v841, v813);
      ;
      let v1024;
      switch (v994[0]) {
        case 'None': {
          const v1025 = v994[1];
          v1024 = false;
          
          break;
          }
        case 'Some': {
          const v1026 = v994[1];
          v1024 = true;
          
          break;
          }
        }
      stdlib.assert(v1024, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:60:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:61:39:application call to [unknown function] (defined at: ./index.rsh:61:39:function exp)'],
        msg: 'You are in the list',
        who: 'C_claimReward'
        });
      const v1029 = true;
      const v1030 = await txn1.getOutput('C_claimReward', 'v1029', ctc7, v1029);
      if (v651) {
        stdlib.protect(ctc0, await interact.out(v977, v1030), {
          at: './index.rsh:58:15:application',
          fs: ['at ./index.rsh:58:15:application call to [unknown function] (defined at: ./index.rsh:58:15:function exp)', 'at ./index.rsh:62:18:application call to "k" (defined at: ./index.rsh:61:39:function exp)', 'at ./index.rsh:61:39:application call to [unknown function] (defined at: ./index.rsh:61:39:function exp)'],
          msg: 'out',
          who: 'C_claimReward'
          });
        }
      else {
        }
      
      const v1036 = stdlib.add(v816, v813);
      const v1040 = stdlib.sub(v1000, v1036);
      ;
      await stdlib.mapSet(map0, v991, undefined /* Nothing */);
      const v1042 = stdlib.sub(v832, stdlib.checkedBigNumberify('./index.rsh:65:47:decimal', stdlib.UInt_max, '1'));
      const v1624 = v1042;
      const v1627 = v1040;
      return;
      
      break;
      }
    }
  
  
  };
export async function _C_timesUp4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _C_timesUp4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _C_timesUp4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Tuple([]);
  const ctc5 = stdlib.T_Bool;
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v812, v813, v814, v816, v830, v832, v841] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc2, ctc3, ctc3, ctc3, ctc3, ctc3, ctc3]);
  const v1046 = stdlib.protect(ctc4, await interact.in(), {
    at: './index.rsh:69:13:application',
    fs: ['at ./index.rsh:69:13:application call to [unknown function] (defined at: ./index.rsh:69:13:function exp)', 'at ./index.rsh:68:37:application call to [unknown function] (defined at: ./index.rsh:68:37:function exp)'],
    msg: 'in',
    who: 'C_timesUp'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v812, v813, v814, v816, v830, v832, v841, v1046],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc4],
    pay: [stdlib.checkedBigNumberify('./index.rsh:69:13:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v1048], secs: v1050, time: v1049, didSend: v774, from: v1047 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "C_timesUp"
        });
      ;
      const v1051 = true;
      const v1052 = await txn1.getOutput('C_timesUp', 'v1051', ctc5, v1051);
      
      sim_r.txns.push({
        kind: 'from',
        to: v812,
        tok: undefined /* Nothing */
        });
      sim_r.txns.push({
        kind: 'halt',
        tok: undefined /* Nothing */
        })
      sim_r.isHalt = true;
      
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc3, ctc3, ctc3, ctc3, ctc3, ctc3, ctc4],
    waitIfNotPresent: false
    }));
  const {data: [v1048], secs: v1050, time: v1049, didSend: v774, from: v1047 } = txn1;
  undefined /* setApiDetails */;
  ;
  const v1051 = true;
  const v1052 = await txn1.getOutput('C_timesUp', 'v1051', ctc5, v1051);
  stdlib.protect(ctc0, await interact.out(v1048, v1052), {
    at: './index.rsh:69:13:application',
    fs: ['at ./index.rsh:69:13:application call to [unknown function] (defined at: ./index.rsh:69:13:function exp)', 'at ./index.rsh:70:14:application call to "k" (defined at: ./index.rsh:69:13:function exp)', 'at ./index.rsh:68:37:application call to [unknown function] (defined at: ./index.rsh:68:37:function exp)'],
    msg: 'out',
    who: 'C_timesUp'
    });
  
  ;
  return;
  
  
  
  };
export async function B_registerParticipation(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for B_registerParticipation expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for B_registerParticipation expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  stdlib.assert(step == 4, 'API called in the wrong state. Currently in state: ' + step + ', expected:  [4]');
  if (step == 4) {return _B_registerParticipation4(ctcTop, interact);}
  };
export async function C_claimReward(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for C_claimReward expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for C_claimReward expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  stdlib.assert(step == 4, 'API called in the wrong state. Currently in state: ' + step + ', expected:  [4]');
  if (step == 4) {return _C_claimReward4(ctcTop, interact);}
  };
export async function C_timesUp(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for C_timesUp expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for C_timesUp expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  stdlib.assert(step == 4, 'API called in the wrong state. Currently in state: ' + step + ', expected:  [4]');
  if (step == 4) {return _C_timesUp4(ctcTop, interact);}
  };
const _ALGO = {
  ABI: {
    impure: [`B_registerParticipation()byte`, `C_claimReward(address)byte`, `C_timesUp()byte`],
    pure: [],
    sigs: [`B_registerParticipation()byte`, `C_claimReward(address)byte`, `C_timesUp()byte`]
    },
  appApproval: `BiAMAAEEOCAoMEAIgrWlzwecwoOACUgmAwEAAQEAIjUAMRhBA58qZEkiWzUBIQhbNQIxGSMSQQAIMQAoKGZCA202GgAXSUEAQSI1BCM1BkkhCQxAACBJIQoMQAARIQoSRCo1/yg0/1AyA1BCAJ0hCRJEKkIAMYG19t7VAhJENhoBNf8pNP9QQgCBNhoCFzUENhoDNhoBF0mBAwxAAb9JJAxAAGYkEkQkNAESRDQESSISTDQCEhFEKGRJNQMlWzX/STUFNf6ABNTgGC00/lCwMgY0/w9EgAkAAAAAAAAEGwGwKTUHNANXACA0AyEEWzQDIQVbNAMhBls0/zQDIQdbIjIGNAMhC1tCAhVIJDQBEkQ0BEkiEkw0AhIRRChkSTUDSUpKSVcAIDX/IQRbNf4hBVs1/SEGWzX8JVs1+yEHWzX6IQtbNflJNQU1+IAEFJFA1DT4ULAyBjT7DEQ0+CJVQABsMQCIAnxJNfciVUAABiI19kIABiM19kIAADT2FEQ0+jT9DkQ0/IgCZjT3IlVAAAYiNfVCAAYjNfVCAAA09RREgAkAAAAAAAADrwGwKTUHMQAoKWY0/zT+NP00/DT7NPojCCMyBjT5NPwIQgFRNPhXASA19zT3NfYxADT/EkQ09ogB/0k19SJVQAAGIjX0QgAGIzX0QgAANPRENP6IAfA09SJVQAAGIjXzQgAGIzXzQgAANPNEgAkAAAAAAAAEBQGwKTUHNPw0/gg18rEisgE08rIII7IQNPayB7M09igoZjT/NP40/TT8NPs0+iMJIzIGNPk0/gg08glCAMJJIwxAAE0jEkQjNAESRDQESSISTDQCEhFEKGRJNQNXACA1/4AEmouRdLA0/zEAEkQ0/zQDIQRbNAMhBVs0AyVbNAMhB1s0AyEGWwgiIzIGIkIAb0iBoI0GiAE4IjQBEkQ0BEkiEkw0AhIRREk1BUlKIls1/yEIWzX+gRBbNf2BGFs1/IAE9u2r0jT/FlA0/hZQNP0WUDT8FlCwMQA0/xZQNP4WUDT9FlA0/BZQMgYWUChLAVcASGdIIzUBMgY1AkIAcjX/Nf41/TX8Nfs1+jX5Nfg19zT9QQAsNPc0+BZQNPkWUDT6FlA0+xZQNPwWUDT/FlAoSwFXAFBnSCQ1ATIGNQJCAC+xIrIBNP+yCCOyEDT3sgezQgAAMRmBBRJEsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEKjQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iMTQSRIECMTUSRCIxNhJEIzE3EkQiNQEiNQJC/65JMRhhQAADSCiJKGKJNABJSiMINQA4BzIKEkQ4ECMSRDgIEkSJ`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 1,
  mapDataSize: 1,
  stateKeys: 1,
  stateSize: 80,
  unsupported: [],
  version: 10,
  warnings: [`This program was compiled with trustworthy maps, but maps are not trustworthy on Algorand, because they are represented with local state. A user can delete their local state at any time, by sending a ClearState transaction. The only way to use local state properly on Algorand is to ensure that a user doing this can only 'hurt' themselves and not the entire system.`]
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v813",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v814",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v815",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v816",
                "type": "uint256"
              }
            ],
            "internalType": "struct T2",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T3",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v813",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v814",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v815",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v816",
                "type": "uint256"
              }
            ],
            "internalType": "struct T2",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T3",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "enum _enum_T12",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "internalType": "bool",
                    "name": "_B_registerParticipation0_85",
                    "type": "bool"
                  },
                  {
                    "components": [
                      {
                        "internalType": "address payable",
                        "name": "elem0",
                        "type": "address"
                      }
                    ],
                    "internalType": "struct T11",
                    "name": "_C_claimReward0_85",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T12",
                "name": "v907",
                "type": "tuple"
              }
            ],
            "internalType": "struct T13",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T14",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e3",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v1048",
                "type": "bool"
              }
            ],
            "internalType": "struct T15",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T16",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e4",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v1029",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v1051",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v943",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "B_registerParticipation",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address payable",
        "name": "_a0",
        "type": "address"
      }
    ],
    "name": "C_claimReward",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "C_timesUp",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "addr",
        "type": "address"
      }
    ],
    "name": "_reachMap0Ref",
    "outputs": [
      {
        "components": [
          {
            "internalType": "enum _enum_T0",
            "name": "which",
            "type": "uint8"
          },
          {
            "internalType": "bool",
            "name": "_None",
            "type": "bool"
          },
          {
            "internalType": "bool",
            "name": "_Some",
            "type": "bool"
          }
        ],
        "internalType": "struct T0",
        "name": "res",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "enum _enum_T12",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "internalType": "bool",
                    "name": "_B_registerParticipation0_85",
                    "type": "bool"
                  },
                  {
                    "components": [
                      {
                        "internalType": "address payable",
                        "name": "elem0",
                        "type": "address"
                      }
                    ],
                    "internalType": "struct T11",
                    "name": "_C_claimReward0_85",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T12",
                "name": "v907",
                "type": "tuple"
              }
            ],
            "internalType": "struct T13",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T14",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m3",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v1048",
                "type": "bool"
              }
            ],
            "internalType": "struct T15",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T16",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m4",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405162001add38038062001add833981016040819052620000269162000298565b60008055436003556040805133815282516020808301919091528084015180518385015290810151606080840191909152818401516080840152015160a082015290517f470a4274e1f9c3e254bd7c4ecaf5e5f5613417d1b7f0c7b386f5aaacf730e6989181900360c00190a1620000a13415600762000191565b620000e46040518060c0016040528060006001600160a01b0316815260200160008152602001600081526020016000815260200160008152602001600081525090565b338082526020838101805151828501908152815183015160408087019182528351810151606080890191825294518501516080808a019182524360a0808c0182815260016000819055929092558551808b019b909b5296518a8601529451968901969096529051948701949094529251918501919091525160c0808501919091528151808503909101815260e09093019052815162000188926002920190620001bb565b50505062000376565b81620001b75760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b828054620001c99062000339565b90600052602060002090601f016020900481019282620001ed576000855562000238565b82601f106200020857805160ff191683800117855562000238565b8280016001018555821562000238579182015b82811115620002385782518255916020019190600101906200021b565b50620002469291506200024a565b5090565b5b808211156200024657600081556001016200024b565b604051608081016001600160401b03811182821017156200029257634e487b7160e01b600052604160045260246000fd5b60405290565b600081830360a0811215620002ac57600080fd5b604080519081016001600160401b0381118282101715620002dd57634e487b7160e01b600052604160045260246000fd5b604052835181526080601f1983011215620002f757600080fd5b6200030162000261565b915060208401518252604084015160208301526060840151604083015260808401516060830152816020820152809250505092915050565b600181811c908216806200034e57607f821691505b602082108114156200037057634e487b7160e01b600052602260045260246000fd5b50919050565b61175780620003866000396000f3fe60806040526004361061008f5760003560e01c80636cca4570116100565780636cca457014610127578063832307571461012f578063a98bf22314610144578063ab53f2c614610157578063c7b84f481461017a57005b80631e93b0f1146100985780632c10a159146100bc578063310e7397146100cf5780633bc5b7bf146100e2578063635fb3131461010f57005b3661009657005b005b3480156100a457600080fd5b506003545b6040519081526020015b60405180910390f35b6100966100ca366004611217565b61018d565b6100966100dd36600461123a565b6101c6565b3480156100ee57600080fd5b506101026100fd366004611261565b6101fb565b6040516100b391906112b2565b610117610227565b60405190151581526020016100b3565b610117610265565b34801561013b57600080fd5b506001546100a9565b610096610152366004611217565b6102a5565b34801561016357600080fd5b5061016c6102da565b6040516100b39291906112e4565b610117610188366004611261565b610377565b60408051606081018252600080825260208201819052918101919091526101c26101bc368490038401846113ea565b826103d0565b5050565b60408051606081018252600080825260208201819052918101919091526101c26101f536849003840184611420565b8261059a565b604080516060810182526000808252602082018190529181019190915261022182610bcc565b92915050565b6000610231611044565b602081810151516000908190526040805160608101825282815292830182905282015261025e828261059a565b5192915050565b600061026f61108e565b6020818101516000908190526040805160608101825282815292830182905282015261029b8282610ca5565b6040015192915050565b60408051606081018252600080825260208201819052918101919091526101c26102d4368490038401846114cc565b82610ca5565b6000606060005460028080546102ef90611524565b80601f016020809104026020016040519081016040528092919081815260200182805461031b90611524565b80156103685780601f1061033d57610100808354040283529160200191610368565b820191906000526020600020905b81548152906001019060200180831161034b57829003601f168201915b50505050509050915091509091565b6000610381611044565b60208181018051516001905251516040908101516001600160a01b038616905280516060810182526000808252928101839052908101919091526103c5828261059a565b602001519392505050565b6103e0600160005414600a610e8f565b81516103fb9015806103f457508251600154145b600b610e8f565b60008080556002805461040d90611524565b80601f016020809104026020016040519081016040528092919081815260200182805461043990611524565b80156104865780601f1061045b57610100808354040283529160200191610486565b820191906000526020600020905b81548152906001019060200180831161046957829003601f168201915b505050505080602001905181019061049e9190611559565b60408051338152855160208083019190915286015115158183015290519192507f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f1919081900360600190a16104f534156008610e8f565b805161050d906001600160a01b031633146009610e8f565b6105156110b8565b815181516001600160a01b0390911690526020808301518251909101526040808301518251909101526080820151815160609081019190915282015160a08301516105609190611600565b8151608001526020808201805160009081905281516001930192909252805143604090910152516060015261059481610eb4565b50505050565b6105aa6004600054146014610e8f565b81516105c59015806105be57508251600154145b6015610e8f565b6000808055600280546105d790611524565b80601f016020809104026020016040519081016040528092919081815260200182805461060390611524565b80156106505780601f1061062557610100808354040283529160200191610650565b820191906000526020600020905b81548152906001019060200180831161063357829003601f168201915b50505050508060200190518101906106689190611618565b90506106ea604080516101608101825260006101008201818152610120830182905261014083018290528252602080830182905282840182905283518082018552828152606080850191909152845190810185528281529081018290529283015290608082019081526000602082018190526040820181905260609091015290565b6106fb826080015143106016610e8f565b7fc289ca3e207d721ab955106ce191e510af88ba4cd696f7fe8c1bc4014d31a47a338560405161072c9291906116b3565b60405180910390a1600060208501515151600181111561074e5761074e61127e565b141561094d5761075d33610bcc565b8152600081515160018111156107755761077561127e565b141561078757600060208201526107ab565b6001815151600181111561079d5761079d61127e565b14156107ab57600160208201525b6107c881602001516107be5760016107c1565b60005b600c610e8f565b6107de82604001518360a001511115600d610e8f565b6107ef82606001513414600e610e8f565b600081515160018111156108055761080561127e565b1415610817576000604082015261083b565b6001815151600181111561082d5761082d61127e565b141561083b57600160408201525b610858816040015161084e576001610851565b60005b600f610e8f565b604051600181527f246d280bbe7623473a84323f74549fb4fea858797de6406d702991faa1d0b13b9060200160405180910390a16001808452336000908152600460205260409020805462ff00ff191690911790556108b56110b8565b825181516001600160a01b03909116905260208084015182519091015260408084015182519091015260608084015182519091015260808084015182519091015260a083015161090790600190611600565b6020808301805192909252815160019101525143604090910152606083015160c08401516109359190611600565b60208201516060015261094781610eb4565b50610594565b60016020850151515160018111156109675761096761127e565b1415610594576020840151516040015160608201528151610994906001600160a01b031633146010610e8f565b6060810151516109a390610bcc565b608082018190525160009060018111156109bf576109bf61127e565b14156109d157600060a08201526109f8565b600160808201515160018111156109ea576109ea61127e565b14156109f857600160a08201525b610a078160a001516011610e8f565b610a18826020015134146012610e8f565b60006080820151516001811115610a3157610a3161127e565b1415610a4357600060c0820152610a6a565b60016080820151516001811115610a5c57610a5c61127e565b1415610a6a57600160c08201525b610a798160c001516013610e8f565b604051600181527fd64068c90fa057a3daf5cea40d6d45db7c43174e5e31e896a55134326e3352d09060200160405180910390a160016020808501919091528201516060830151610aca9190611600565b60e082018190526060820151516040516001600160a01b039091169180156108fc02916000818181858888f19350505050158015610b0c573d6000803e3d6000fd5b506060810151516001600160a01b03166000908152600460205260409020805462ffffff19169055610b3c6110b8565b825181516001600160a01b03909116905260208084015182519091015260408084015182519091015260608084015182519091015260808084015182519091015260a0830151610b8e9060019061170a565b6020808301805192909252815160019082015290514360409091015260e08301519084015160c0850151610bc29190611600565b610935919061170a565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526004602052604090205460ff166001811115610c1857610c1861127e565b1415610c95576001600160a01b038216600090815260046020526040908190208151606081019092528054829060ff166001811115610c5957610c5961127e565b6001811115610c6a57610c6a61127e565b8152905460ff6101008204811615156020840152620100009091041615156040909101529050919050565b600080825260208201525b919050565b610cb56004600054146018610e8f565b8151610cd0901580610cc957508251600154145b6019610e8f565b600080805560028054610ce290611524565b80601f0160208091040260200160405190810160405280929190818152602001828054610d0e90611524565b8015610d5b5780601f10610d3057610100808354040283529160200191610d5b565b820191906000526020600020905b815481529060010190602001808311610d3e57829003601f168201915b5050505050806020019051810190610d739190611618565b9050610d878160800151431015601a610e8f565b6040805133815284516020808301919091528501515115158183015290517f8d528f5e4eb7cb4d65f9857aba0fd34b00701475a124b40508c8832153576b949181900360600190a1610ddb34156017610e8f565b604051600181527ff8a3fc5581ede987458851f211ecd664a40c6a0372c486e8f3e742daa269f3bc9060200160405180910390a160016040830152610e1e6110b8565b815181516001600160a01b03909116905260208083015182518201526040808401518351820152606080850151845182015260808086015185519091015260a08501518385018051919091528051600094019390935282514392019190915260c08401519151015261059481610eb4565b816101c25760405163100960cb60e01b81526004810182905260240160405180910390fd5b80602001516020015115610fe857610f0b6040518060e0016040528060006001600160a01b031681526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b8151516001600160a01b0316815281516020908101518183015282516040908101518184015283516060908101518185015284516080908101519085015282850180515160a086015251015160c084015260046000554360015551610fbf9183910181516001600160a01b031681526020808301519082015260408083015190820152606080830151908201526080808301519082015260a0828101519082015260c0918201519181019190915260e00190565b60405160208183030381529060405260029080519060200190610fe3929190611130565b505050565b8051516020820151606001516040516001600160a01b039092169181156108fc0291906000818181858888f1935050505015801561102a573d6000803e3d6000fd5b5060008080556001819055611041906002906111b4565b50565b60405180604001604052806000815260200161108960408051608081018252600060208083018281528385018390528451918201909452908152606082015290815290565b905290565b60405180604001604052806000815260200161108960405180602001604052806000151581525090565b60405180604001604052806110fe6040518060a0016040528060006001600160a01b03168152602001600081526020016000815260200160008152602001600081525090565b815260200161108960405180608001604052806000815260200160001515815260200160008152602001600081525090565b82805461113c90611524565b90600052602060002090601f01602090048101928261115e57600085556111a4565b82601f1061117757805160ff19168380011785556111a4565b828001600101855582156111a4579182015b828111156111a4578251825591602001919060010190611189565b506111b09291506111ea565b5090565b5080546111c090611524565b6000825580601f106111d0575050565b601f01602090049060005260206000209081019061104191905b5b808211156111b057600081556001016111eb565b60006040828403121561121157600080fd5b50919050565b60006040828403121561122957600080fd5b61123383836111ff565b9392505050565b60006080828403121561121157600080fd5b6001600160a01b038116811461104157600080fd5b60006020828403121561127357600080fd5b81356112338161124c565b634e487b7160e01b600052602160045260246000fd5b6002811061104157634e487b7160e01b600052602160045260246000fd5b815160608201906112c281611294565b8083525060208301511515602083015260408301511515604083015292915050565b82815260006020604081840152835180604085015260005b81811015611318578581018301518582016060015282016112fc565b8181111561132a576000606083870101525b50601f01601f191692909201606001949350505050565b6040805190810167ffffffffffffffff8111828210171561137257634e487b7160e01b600052604160045260246000fd5b60405290565b6040516020810167ffffffffffffffff8111828210171561137257634e487b7160e01b600052604160045260246000fd5b6040516060810167ffffffffffffffff8111828210171561137257634e487b7160e01b600052604160045260246000fd5b80358015158114610ca057600080fd5b6000604082840312156113fc57600080fd5b611404611341565b82358152611414602084016113da565b60208201529392505050565b6000818303608081121561143357600080fd5b61143b611341565b833581526060601f198301121561145157600080fd5b611459611378565b6114616113a9565b60208601356002811061147357600080fd5b8152611481604087016113da565b60208201526020605f198501121561149857600080fd5b6114a0611378565b935060608601356114b08161124c565b8452604081019390935291825260208101919091529392505050565b600081830360408112156114df57600080fd5b6114e7611341565b833581526020601f19830112156114fd57600080fd5b611505611378565b9150611513602085016113da565b825260208101919091529392505050565b600181811c9082168061153857607f821691505b6020821081141561121157634e487b7160e01b600052602260045260246000fd5b600060c0828403121561156b57600080fd5b60405160c0810181811067ffffffffffffffff8211171561159c57634e487b7160e01b600052604160045260246000fd5b60405282516115aa8161124c565b808252506020830151602082015260408301516040820152606083015160608201526080830151608082015260a083015160a08201528091505092915050565b634e487b7160e01b600052601160045260246000fd5b60008219821115611613576116136115ea565b500190565b600060e0828403121561162a57600080fd5b60405160e0810181811067ffffffffffffffff8211171561165b57634e487b7160e01b600052604160045260246000fd5b60405282516116698161124c565b808252506020830151602082015260408301516040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c08201528091505092915050565b6001600160a01b038381168252825160208084019190915283015151805160a084019291906116e181611294565b806040860152506020810151151560608501528160408201515116608085015250509392505050565b60008282101561171c5761171c6115ea565b50039056fea26469706673582212201be1ad3ddc1fd4480d6b1bf9560523a3c8fe28a0ce95399c492d0294a6a5e70f64736f6c634300080c0033`,
  BytecodeLen: 6877,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:33:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:75:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:45:23:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "A": A,
  "B_registerParticipation": B_registerParticipation,
  "C_claimReward": C_claimReward,
  "C_timesUp": C_timesUp
  };
export const _APIs = {
  B: {
    registerParticipation: B_registerParticipation
    },
  C: {
    claimReward: C_claimReward,
    timesUp: C_timesUp
    }
  };
