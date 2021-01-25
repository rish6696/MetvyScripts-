const forUser = "5ffd789e0b43202520a1ac8c";

const userLanguage ="English";

//// sabse upr 2 check lagengeey ek toh id in recomended id aur id not equal forUserId

//user 2 is jisko request bheji and user1 is jisne request bheji h

const cursor = db.getCollection("users").aggregate([

  {
    $lookup: {
      from: "blocks",
      localField: "_id",
      foreignField:"blocker_id",
      as: "blockedByMe",
    },
  },
  {
    $project:{
      fullname:1,
      phone:1,
      blockedByMe:1
    }
  }
//   {
//     $addFields: {
//        blockedByMe: {
//           $filter: {
//              input: "$blockedByMe",
//              as: "item",
//              cond: { $eq: [ "$$item.blocked_id", ObjectId(forUser) ] }
//           }
//        }
//     }
//  },{
//    $addFields :{
//     blockedByMeSize: { $size: "$blockedByMe" }
//    }
//  },{
//   $match: { blockedByMeSize: 0}
//  },
//  {
//   $lookup: {
//     from: "blocks",
//     localField: "_id",
//     foreignField:"blocked_id",
//     as: "blockedBy",
//   },
// },
// {
//   $addFields: {
//      blockedBy: {
//         $filter: {
//            input: "$blockedBy",
//            as: "item",
//            cond: { $eq: [ "$$item.blocker_id", ObjectId(forUser) ] }
//         }
//      }
//   }
// },{
//  $addFields :{
//   blockedBySize: { $size: "$blockedBy" }
//  }
// },
// {
//   $match: { blockedByMeSize: 0 }
//  },{
//    $project:{
//      fullname:1,
//      phone:1
//    }
//  },
//  {
//   $lookup: {
//     from: "connections",
//     localField: "_id",
//     foreignField:"user1",
//     as: "connectionAsInitiator",
//   },
  
// }
// ,{
//   $addFields: {
//     connectionAsInitiator: {
//         $filter: {
//            input: "$connectionAsInitiator",
//            as: "item",
//            cond: { $eq: [ "$$item.user2", ObjectId(forUser) ] }
//         }
//      }
//   }
// }
  
  // {
  //   $addFields: {
  //      hisConnections: {
  //         $filter: {
  //            input: "$all_connections",
  //            as: "item",
  //            cond: { $eq: [ "$$item", ObjectId(forUser) ] }
  //         }
  //      }
  //   }
  // },

  // {
  //   $lookup: {
  //     from: "connectionrequests",
  //     let: { userId: "$_id" },
  //     pipeline: [
  //       {
  //         $match: {
  //           $expr: {
  //             $and: [
  //               { $eq: ["$$userId", "$user1"] },
  //               { $eq: ["$user2", ObjectId(forUser)] },
  //             ],
  //           },
  //         },
  //       },
  //     ],
  //     as: "sentByUser",
  //   },
  // },
  // {
  //   $lookup: {
  //     from: "connectionrequests",
  //     let: { userId: "$_id" },
  //     pipeline: [
  //       {
  //         $match: {
  //           $expr: {
  //             $and: [
  //               { $eq: ["$$userId", "$user2"] },
  //               { $eq: ["$user1", ObjectId(forUser)] },
  //             ],
  //           },
  //         },
  //       },
  //     ],
  //     as: "recievedByUser",
  //   },
  // },
  // {
  //   $addFields: {
  //     connectionStatus: {
  //       $cond: {
  //         if: { $eq: [{ $size: "$hisConnections" }, 1] },
  //         then: 3,
  //         else: {
  //           $cond: {
  //             if: { $eq: [{ $size: "$recievedByUser" }, 1] },
  //             then: 2,
  //             else: {
  //               $cond: {
  //                 if: { $eq: [{ $size: "$sentByUser" }, 1] },
  //                 then: 1,
  //                 else: 0,
  //               },
  //             },
  //           },
  //         },
  //       },
  //     },
  //   },
  // },
  // {
  //   $lookup: {
  //     from: "namestranslations",
  //     let: { fullName: "$fullname" },
  //     pipeline: [
  //       {
  //         $match: {
  //           $expr: { $and: [{ $eq: ["$$fullName", "$_id"] }] },
  //         },
  //       },
  //     ],
  //     as: "namesTranslations",
  //   },
  // },
  // {
  //   $addFields: {
  //     namesTranslations: {
  //       $arrayElemAt: ["$namesTranslations", 0],
  //     },
  //   },
  // },
  // {
  //   $addFields: {
  //     fullname: `$namesTranslations.${"English"}`,
  //   },
  // },
  // {
  //   {
  //   $project: {
  //     blockedByMe: 0,
  //     blockedBy: 0,
  //     blockedByMeSize: 0,
  //     blockedBySize: 0,
  //     sentByUser: 0,
  //     recievedByUser: 0,
  //     namesTranslations: 0,
  //     // all_connections:0
  //   }
  // }
  // { $skip: (pg - 1) * pgSize },
  // { $limit: pgSize },
]);

while (cursor.hasNext()) {
  printjson(cursor.next());
}

//fullname:1 ,dp:1,title:1, interests:1 ,skill_set:1, last_active:1
//5ffda82a0b43202520a1ce2e
