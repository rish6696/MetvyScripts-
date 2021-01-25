//const forUser ='5fa7130e93043d72828834dc'

//blocker
const mansiId = "5fb3d67ee473e03bd9ec43fe";
//;

// const cursor = db.getCollection("blocks").aggregate([
//    {
//       $facet:{
//           blockedByThisUser:[
//             { $match: { blocker_id: ObjectId(mansiId) } },
//             { $group:{ _id:null , data: { $push: "$blocked_id" }  }},
//             {$project: { _id:0 } }
//           ],
//           usersBlockedThisUser:[
//             { $match: { blocked_id: ObjectId(mansiId) } },
//             { $group:{ _id:null , data: { $push: "$blocker_id" }  }},
//             {$project: { _id:0 } }
//           ],
//       }
//   }

// ]);

const cursor = db.getCollection("connections").aggregate([

    {
        $match : { $or:[{ user1: ObjectId(mansiId) } ,{ user2:ObjectId(mansiId)}]}
    },
    {
        $project: { idToPick: { $cond:{ if: {user1:ObjectId(mansiId) },then:"$user2",else:"$user1" }   }    }
    },
    {
        $group: {_id:null, data:{$push: "$idToPick"} }
    },
    {
        $project:{_id:0}
    }
])

// const blockedByThisUser = data.blockedByThisUser.length==0 ? [] :data.blockedByThisUser[0].data



// //const connections = data.data;

// const cursor = db.getCollection("connectionrequests").aggregate([
//   {
//     $facet: {
//       requestSent: [
//         {
//           $match: { user1: ObjectId(mansiId) },
//         },
//         {
//           $group: { _id: null, data: { $push: "$user2" } },
//         },
//         { $project: { _id: 0 } },
//       ],
//       requestRecieved: [
//         {
//           $match: { user2: ObjectId(mansiId) },
//         },
//         {
//           $group: { _id: null, data: { $push: "$user1" } },
//         },
//         { $project: { _id: 0 } },
//       ],
//     },
//   },
// ]);


// const blockedByThisUser = [
//     ObjectId("5fa7130e93043d72828834dc"),
//     ObjectId("5fb53f8db9a0b118c9ff569b"),
//     ObjectId("5fb3f1f3c9d5d24b7cffb83f"),
//     ObjectId("5fb3bb869f1e5f362fd83597"),
//     ObjectId("5fa05d3cff7f81079166c51c"),
//     ObjectId("5fc7cbbf892b6556443de8a6"),
// ];

// const connections=[
//         ObjectId("5fa01926ff7f81079166baa7"),
// 		ObjectId("5fa7a4bb93043d7282884320"),
// 		ObjectId("5fa020a8ff7f81079166bc11"),
// 		ObjectId("5fa03abeff7f81079166bd61"),
// 		ObjectId("5fa05e69ff7f81079166c541"),
// 		ObjectId("5fa016cc14b33d5c90377446"),
// 		ObjectId("5fa04653ff7f81079166bf32"),
// 		ObjectId("5fb3dc7ae473e03bd9ec4ec0"),
// 		ObjectId("5fb3d67ee473e03bd9ec43fe"),
// 		ObjectId("5fb3d67ee473e03bd9ec43fe"),
// 		ObjectId("5fb3d67ee473e03bd9ec43fe"),
// 		ObjectId("5fb3d67ee473e03bd9ec43fe"),
// 		ObjectId("5fb3b6d09f1e5f362fd83197"),
// 		ObjectId("5fb3d67ee473e03bd9ec43fe"),
// 		ObjectId("5fb3d67ee473e03bd9ec43fe"),
// 		ObjectId("5fb4132dc9d5d24b7c000027"),
// 		ObjectId("5fb3d67ee473e03bd9ec43fe"),
// 		ObjectId("5fb3f8b0c9d5d24b7cffc5e0"),
// 		ObjectId("5fb40252c9d5d24b7cffe497"),
// 		ObjectId("5fb51859259ab812b94a098e"),
// 		ObjectId("5fb4e6452eeb3903573d0621"),
// 		ObjectId("5fa7a0e893043d7282883f18"),
// 		ObjectId("5fb66e57a592b1703468253e"),
// 		ObjectId("5fb3da71e473e03bd9ec48a1"),
// 		ObjectId("5fb3d67ee473e03bd9ec43fe"),
// 		ObjectId("5fb67594a592b1703468320f"),
// 		ObjectId("5fb7334bce028e046993229f"),
// 		ObjectId("5fb691225a405c7c28d7879b"),
// 		ObjectId("5fb7759ece028e046993603c"),
// 		ObjectId("5fb3f1f3c9d5d24b7cffb83f"),
// 		ObjectId("5fb3d67ee473e03bd9ec43fe"),
// 		ObjectId("5fb3d67ee473e03bd9ec43fe"),
// 		ObjectId("5fb3d67ee473e03bd9ec43fe"),
// 		ObjectId("5fb3bb869f1e5f362fd83597"),
// 		ObjectId("5fb48159c9d5d24b7c0031ca"),
// 		ObjectId("5fb3e39fe473e03bd9ec6a7e"),
// 		ObjectId("5fb3db29e473e03bd9ec4a6d"),
// 		ObjectId("5fb4f9452eeb3903573d2711"),
// 		ObjectId("5fb7a40cce028e046994014b"),
// 		ObjectId("5fb3f590c9d5d24b7cffc044"),
// 		ObjectId("5fb3d8d0e473e03bd9ec4713"),
// 		ObjectId("5fb3db36e473e03bd9ec4a8b"),
// 		ObjectId("5fb3d67ee473e03bd9ec43fe"),
// 		ObjectId("5fb3d67ee473e03bd9ec43fe"),
// 		ObjectId("5fb3d67ee473e03bd9ec43fe"),
// 		ObjectId("5fb3dc6fe473e03bd9ec4e6b"),
// 		ObjectId("5fb3c16fb3594b3b134d1896"),
// 		ObjectId("5fb3db00e473e03bd9ec49f4"),
// 		ObjectId("5fb3d67ee473e03bd9ec43fe"),
// 		ObjectId("5fb3d67ee473e03bd9ec43fe"),
// 		ObjectId("5fb7bd49ce028e046994ea14"),
// 		ObjectId("5fb3dee1e473e03bd9ec5aae"),
// 		ObjectId("5fb3d67ee473e03bd9ec43fe"),
// 		ObjectId("5fb7e93f5fff361ac17b37bf"),
// 		ObjectId("5fb3d67ee473e03bd9ec43fe"),
// 		ObjectId("5fb3d67ee473e03bd9ec43fe"),
// 		ObjectId("5fb53a68b9a0b118c9ff5099"),
// 		ObjectId("5fb42bacc9d5d24b7c0021fa"),
// 		ObjectId("5fb3a9547a0ead35ecbe0a49"),
// 		ObjectId("5fb3ec1fc9d5d24b7cffaef2"),
// 		ObjectId("5fb529bcb9a0b118c9ff25a6"),
// 		ObjectId("5fb39ea6b94f0332c87bbe00"),
// 		ObjectId("5fb3b8649f1e5f362fd832a0"),
// 		ObjectId("5fb5202fb9a0b118c9fef526"),
// 		ObjectId("5fb3fae6c9d5d24b7cffcd2c"),
// 		ObjectId("5fb3dadbe473e03bd9ec4989"),
// 		ObjectId("5fb3dc4ae473e03bd9ec4dc6"),
// 		ObjectId("5fb41f89c9d5d24b7c0013d7"),
// 		ObjectId("5fb3da51e473e03bd9ec484f"),
// 		ObjectId("5fb3e5dce473e03bd9ec6fc2"),
// 		ObjectId("5fb4cbdbc9d5d24b7c006236"),
// 		ObjectId("5fb68e9c5a405c7c28d7849c"),
// 		ObjectId("5fb3dc44e473e03bd9ec4d99"),
// 		ObjectId("5fb79e3ece028e046993d6b5"),
// 		ObjectId("5fb3d67ee473e03bd9ec43fe"),
// 		ObjectId("5fb3d67ee473e03bd9ec43fe"),
// 		ObjectId("5fb3d67ee473e03bd9ec43fe"),
// 		ObjectId("5fb3d67ee473e03bd9ec43fe"),
// 		ObjectId("5fb3d67ee473e03bd9ec43fe"),
// 		ObjectId("5fb3d67ee473e03bd9ec43fe"),
// 		ObjectId("5fb3f004c9d5d24b7cffb562"),
// 		ObjectId("5fbaaaa5dde7e54113aa2c7c"),
// 		ObjectId("5fb3d67ee473e03bd9ec43fe"),
// 		ObjectId("5fb3d67ee473e03bd9ec43fe"),
// 		ObjectId("5fb3d67ee473e03bd9ec43fe"),
// 		ObjectId("5fb56487b9a0b118c9ffb5e9"),
// 		ObjectId("5fb3d67ee473e03bd9ec43fe"),
// 		ObjectId("5fb3d67ee473e03bd9ec43fe"),
// 		ObjectId("5fb3d67ee473e03bd9ec43fe"),
// 		ObjectId("5fb3dfdbe473e03bd9ec5ead"),
// 		ObjectId("5fb3bd97fd85283a3dcda025"),
// 		ObjectId("5fb3d67ee473e03bd9ec43fe"),
// 		ObjectId("5fb3d67ee473e03bd9ec43fe"),
// 		ObjectId("5fb3bc119f1e5f362fd835e2"),
// 		ObjectId("5fb3d67ee473e03bd9ec43fe"),
// 		ObjectId("5fb3d67ee473e03bd9ec43fe"),
// 		ObjectId("5fb3d67ee473e03bd9ec43fe"),
// 		ObjectId("5fc4d39f54225b17feb9145c"),
// 		ObjectId("5fb3c320b3594b3b134d1a37"),
// 		ObjectId("5fb3d67ee473e03bd9ec43fe"),
// 		ObjectId("5fb3e767e473e03bd9ec73a6"),
// 		ObjectId("5fb3d67ee473e03bd9ec43fe"),
// 		ObjectId("5fb3f655c9d5d24b7cffc1d9"),
// 		ObjectId("5fb3d67ee473e03bd9ec43fe"),
// 		ObjectId("5fb3d67ee473e03bd9ec43fe"),
// 		ObjectId("5fb7a9d4ce028e0469942d93"),
// 		ObjectId("5fc785c2892b6556443d1285"),
// 		ObjectId("5fb3d67ee473e03bd9ec43fe"),
// 		ObjectId("5fb55634b9a0b118c9ff957f"),
// 		ObjectId("5fb7b595ce028e0469949912"),
// 		ObjectId("5fb3e616e473e03bd9ec705f"),
// 		ObjectId("5fb3d67ee473e03bd9ec43fe"),
// 		ObjectId("5fb3d67ee473e03bd9ec43fe"),
// 		ObjectId("5fb3b3319f1e5f362fd82f82"),
// 		ObjectId("5fb3d67ee473e03bd9ec43fe"),
// 		ObjectId("5fb3d67ee473e03bd9ec43fe"),
// 		ObjectId("5fb3d67ee473e03bd9ec43fe"),
// 		ObjectId("5fb3d67ee473e03bd9ec43fe"),
// 		ObjectId("5fb3d67ee473e03bd9ec43fe"),
// 		ObjectId("5fccc3f13298222e42b47538"),
// 		ObjectId("5fccae723298222e42b45c11"),
// 		ObjectId("5fcd10d13298222e42b528b5"),
// 		ObjectId("5fc6019123002471002ee086"),
// 		ObjectId("5fca6e3c3298222e42b1feeb"),
// 		ObjectId("5fc90311892b6556443f7666"),
// 		ObjectId("5fb3d67ee473e03bd9ec43fe"),
// 		ObjectId("5fb3d67ee473e03bd9ec43fe"),
// 		ObjectId("5fdb6574a1a20c087b7b55c8"),
// 		ObjectId("5fc774c9892b6556443cfe37"),
// 		ObjectId("5fc4e2ae54225b17feb92648"),
// 		ObjectId("5fd9f241842df52786c4b45f"),
// 		ObjectId("5fb634e7c4333f5d7f938f4e"),
// 		ObjectId("5fd9c891842df52786c4870b"),
// 		ObjectId("5fcb8d5a3298222e42b2fc6b"),
// 		ObjectId("5fdc72f52ef37b28a94bb788"),
// 		ObjectId("5fdc8c382ef37b28a94bce2a"),
// 		ObjectId("5fd8f71eb7345510f88f9929"),
// 		ObjectId("5fdd2869f00e0550ef097418"),
// 		ObjectId("5fc7530b892b6556443ccefd"),
// 		ObjectId("5fc288db9a41221e0d36fb9c"),
// 		ObjectId("5fb4ee152eeb3903573d14a4"),
// 		ObjectId("5fbaa4a7dde7e54113aa27cc"),
// 		ObjectId("5fb53f8db9a0b118c9ff569b"),
// 		ObjectId("5fba7e52dde7e54113a9d043"),
// 		ObjectId("5fb3db4de473e03bd9ec4ab3"),
// 		ObjectId("5fb7b2a0ce028e04699476e6"),
// 		ObjectId("5fb3ffd7c9d5d24b7cffddaf"),
// 		ObjectId("5fb65a70f3742f635e5f6cf4"),
// 		ObjectId("5fb3dc2be473e03bd9ec4cf2"),
// 		ObjectId("5fa7802e93043d72828836d0"),
// 		ObjectId("5fb3d67ee473e03bd9ec43fe"),
// 		ObjectId("5fc5ff6d23002471002edf03"),
// 		ObjectId("5fd904fa842df52786c453a0"),
// 		ObjectId("5fe2f10b20a72b021415b283"),
// 		ObjectId("5fdc4d622ef37b28a94ba3b1"),
// 		ObjectId("5fdea592d3b00909efc93fad"),
// 		ObjectId("5fc4c9c654225b17feb907b4"),
// 		ObjectId("5fdc9cb02ef37b28a94bdf11"),
// 		ObjectId("5fd98c29842df52786c46c30"),
// 		ObjectId("5fdfb5b9d3b00909efca23c7"),
// 		ObjectId("5fde21967395be063373eca3"),
// 		ObjectId("5fb3d67ee473e03bd9ec43fe"),
// 		ObjectId("5fea17e843e51b6773552a85"),
// 		ObjectId("5fbb5cafdde7e54113aa874e"),
// 		ObjectId("5fddaf69f00e0550ef0991e2"),
// 		ObjectId("5fe648d2e3094306cc211635"),
// 		ObjectId("5fe63a1fe3094306cc20fef3"),
//         ObjectId("5fb3d67ee473e03bd9ec43fe") ]

// const UsersBLockedHim = [];

// const requestSent = [
//   ObjectId("5fa06390ff7f81079166c9d4"),
//   ObjectId("5fa2d987b3dbc130decb9f2e"),
//   ObjectId("5fa6b37b9fdf4353923ea9d9"),
//   ObjectId("5fb40a77c9d5d24b7cfff1bf"),
//   ObjectId("5fb4d18ac9d5d24b7c0067bb"),
//   ObjectId("5fb4f23e2eeb3903573d1de4"),
//   ObjectId("5fb3b2669f1e5f362fd82edb"),
//   ObjectId("5fb675bda592b17034683259"),
//   ObjectId("5fb3e1d1e473e03bd9ec656e"),
//   ObjectId("5fb4f10d2eeb3903573d1c38"),
//   ObjectId("5fb563bfb9a0b118c9ffb476"),
//   ObjectId("5fb4d9bcc9d5d24b7c0077e1"),
//   ObjectId("5fb526f0b9a0b118c9ff1b30"),
//   ObjectId("5fa68ffe9fdf4353923ea297"),
//   ObjectId("5fb51404259ab812b94a02f8"),
//   ObjectId("5fb90a215fff361ac17c862a"),
//   ObjectId("5fc3598d9a41221e0d37372a"),
//   ObjectId("5fb3e22ce473e03bd9ec665b"),
//   ObjectId("5fb79c0dce028e046993c5cf"),
//   ObjectId("5fb4c256c9d5d24b7c005d0d"),
//   ObjectId("5fc34a199a41221e0d372974"),
//   ObjectId("5fb4dadec9d5d24b7c00794a"),
//   ObjectId("5fb662e2f3742f635e5f7ded"),
//   ObjectId("5fc6502623002471002f573a"),
//   ObjectId("5fc6699c23002471002f9cb8"),
//   ObjectId("5fb4fc412eeb3903573d2ae5"),
//   ObjectId("5fb52d2db9a0b118c9ff34c5"),
//   ObjectId("5fb534d9b9a0b118c9ff4ba4"),
//   ObjectId("5fb5f4e7b9a0b118c9fff485"),
//   ObjectId("5fb608feb9a0b118c900085a"),
//   ObjectId("5fb61861b9a0b118c90017c6"),
//   ObjectId("5fb634b8c4333f5d7f938f25"),
//   ObjectId("5fb7e72bce028e046995c152"),
//   ObjectId("5fb7eb745fff361ac17b405b"),
//   ObjectId("5fb7f1bf5fff361ac17b5463"),
//   ObjectId("5fb7f3275fff361ac17b5786"),
//   ObjectId("5fb86cb65fff361ac17bca37"),
//   ObjectId("5fb8db505fff361ac17c4320"),
//   ObjectId("5fb8def25fff361ac17c46d8"),
//   ObjectId("5fb9097d5fff361ac17c84e0"),
//   ObjectId("5fb9312b5fff361ac17cba8f"),
//   ObjectId("5fb95f735fff361ac17ce6ea"),
//   ObjectId("5fa2bb76b3dbc130decb9ce2"),
//   ObjectId("5fa45e07b3dbc130decbb82f"),
//   ObjectId("5fa2b921b3dbc130decb9cc8"),
//   ObjectId("5fa46dafb3dbc130decbb8f5"),
//   ObjectId("5fa642da9fdf4353923e945d"),
//   ObjectId("5fa657fd9fdf4353923e95a1"),
//   ObjectId("5fa76bcf93043d72828835ee"),
//   ObjectId("5fb3db55e473e03bd9ec4aec"),
//   ObjectId("5fb3db94e473e03bd9ec4b4b"),
//   ObjectId("5fb3be7e077c4e3a7f735cc7"),
//   ObjectId("5fa6845e9fdf4353923e9e9c"),
//   ObjectId("5fb3dadce473e03bd9ec498a"),
//   ObjectId("5fb3aad20c6119360b4c5b2e"),
// ];

// const requestRecieved = [
//   ObjectId("5fec293e43e51b677355de22"),
//   ObjectId("5fec2b4c43e51b677355e060"),
//   ObjectId("5fec550a43e51b67735602b3"),
//   ObjectId("5feda48d43e51b677356a5e6"),
//   ObjectId("5ff018c6c05366075a1c6f7c"),
//   ObjectId("5fdf124bd3b00909efc97fed"),
//   ObjectId("5fec3b7d43e51b677355f30e"),
//   ObjectId("5feb672043e51b677355c212"),
//   ObjectId("5ffb27770b43202520a0d679"),
//   ObjectId("5feafdf143e51b6773557b0a"),
//   ObjectId("5ffd3ffe0b43202520a17c05"),
//   ObjectId("5fec460f43e51b677355f713"),
//   ObjectId("5ffb65a70b43202520a1022d"),
//   ObjectId("5fda0893842df52786c4d3f8"),
//   ObjectId("5ffd789e0b43202520a1ac8c"),
//   ObjectId("5ffdbd0c0b43202520a206d9"),
//   ObjectId("5fb3ba3c9f1e5f362fd83527"),
//   ObjectId("5ffda7c00b43202520a1cd65"),
//   ObjectId("5ffda7700b43202520a1cce7"),
//   ObjectId("5ff070abc05366075a1c9b77"),
//   ObjectId("5ffd74950b43202520a1ab39"),
//   ObjectId("5ffda7f40b43202520a1cddd"),
//   ObjectId("5fda0664842df52786c4ce16"),
//   ObjectId("5ffd797f0b43202520a1ace0"),
//   ObjectId("5fdc4ef02ef37b28a94ba3e5"),
//   ObjectId("5ffda7f10b43202520a1cddb"),
//   ObjectId("5ffda78a0b43202520a1cd32"),
//   ObjectId("5ffda7f90b43202520a1ce09"),
//   ObjectId("5ffeeb780190c405d0651b22"),
//   ObjectId("5ffdab9f0b43202520a1d072"),
//   ObjectId("5ffdbe420b43202520a20e10"),
//   ObjectId("5ffde19835024607a131f8bf"),
//   ObjectId("5fdc61492ef37b28a94bab65"),
//   ObjectId("5ffdb9500b43202520a1fd7d"),
//   ObjectId("5ffe1dc835024607a1322c61"),
//   ObjectId("5ffd4b540b43202520a188c8"),
//   ObjectId("60000cfb91b7f726a2c4e3f6"),
//   ObjectId("5fc86c5a892b6556443e5fcd"),
//   ObjectId("5ffe035b35024607a132279d"),
//   ObjectId("5ff24209ffff653aed336570"),
//   ObjectId("6003981dfb387d1aa621a7f8"),
//   ObjectId("6001a54db938520671cacec4"),
//   ObjectId("6000621191b7f726a2c5c1ce"),
//   ObjectId("5ffdca690b43202520a23e1c"),
//   ObjectId("5ffecd5f0190c405d064a82e"),
//   ObjectId("5fec841543e51b6773561b06"),
//   ObjectId("5ffdbed10b43202520a20ffa"),
//   ObjectId("5ffda82a0b43202520a1ce2e"),
//   ObjectId("6007105c3c1a6b1c60e47442"),
//   ObjectId("6002f8c6cbe8c6047cba4782"),
//   ObjectId("5ffda7ac0b43202520a1cd4e"),
//   ObjectId("60084ade3c1a6b1c60e6c2e0"),
//   ObjectId("5fed498643e51b67735673fc"),
//   ObjectId("60086aba3c1a6b1c60e784c1"),
//   ObjectId("6007ff9b3c1a6b1c60e5d16d"),
//   ObjectId("5fb53fc2b9a0b118c9ff56bd"),
// ];

// const cursor = db.getCollection("users").aggregate([
//   {
//     $match: {
//       $and: [
//         { _id: { $nin: blockedByThisUser } },
//         { _id: { $nin: UsersBLockedHim } },
//       ],
//     },
//   },
//   {
//     $addFields: {
//       connectionStatus: {
//         $cond: {
//           if: { $setIsSubset: [["$_id"], connections] },
//           then: 3,
//           else: {
//             $cond: {
//               if: { $setIsSubset: [["$_id"], requestSent] },
//               then: 1,
//               else: {
//                 $cond: {
//                   if: { $setIsSubset: [["$_id"], requestRecieved ] },
//                   then: 2,
//                   else: 0,
//                 },
//               },
//             },
//           },
//         },
//       },
//     },
//   },
//   {
//     $project: { connectionStatus: 1, fullname: 1, phone: 1 },
//   },
//   {
//     $lookup:{
//         from: "namestranslations",
//         localField: "fullname",
//         foreignField:"_id",
//         as: "namesTranslations",
//     }
//   }, {
//     $addFields: {
//       namesTranslations: {
//         $arrayElemAt: ["$namesTranslations", 0],
//       },
//     },
//   },
//   {
//     $addFields: {
//       fullname: `$namesTranslations.${"मराठी"}`,
//     },
//   },{
//       $project: {namesTranslations:0}
//   }
// ]);

while (cursor.hasNext()) {
  printjson(cursor.next());
}
