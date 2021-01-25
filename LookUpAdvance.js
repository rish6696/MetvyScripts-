const forUser = "5ffd789e0b43202520a1ac8c";

//yashna 5ffda82a0b43202520a1ce2e

// blocked by yashna => nihar zutshi 5ffd789e0b43202520a1ac8c

//// sabse upr 2 check lagengeey ek toh id in recomended id aur id not equal forUserId

//user 2 is jisko request bheji and user1 is jisne request bheji h

const cursor = db.getCollection("users").aggregate([
  {
    $lookup: {
      from: "blocks",
      let : {  userId :"$_id"   },
      pipeline: [
        { $match:
            { $expr:
               { $and:
                  [
                    { $eq: [ "$$userId",  "$blocker_id" ] },
                    { $eq: [  "$blocked_id",ObjectId(forUser) ]},
                  ]
               }
            }
         },
     ],
      as: "blockedByMe",
    },
  },
  {$project:{blockedByMe:1,fullname:1}}
]);

while (cursor.hasNext()) {
  printjson(cursor.next());
}

//fullname:1 ,dp:1,title:1, interests:1 ,skill_set:1, last_active:1
//5ffda82a0b43202520a1ce2e
