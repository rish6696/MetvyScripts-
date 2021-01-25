const cursor = db
  .getCollection("connections")
  .find({
    $or: [
      { user1: ObjectId("5fa016cc14b33d5c90377446") },
      { user2: ObjectId("5fa016cc14b33d5c90377446") },
    ],
  });

  while (cursor.hasNext()) {
    printjson(cursor.next());
  }
