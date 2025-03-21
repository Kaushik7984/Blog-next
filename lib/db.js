import { MongoClient } from "mongodb";

export async function connectToDatabase() {
  const url = "mongodb://localhost:27017/auth";

  const client = await MongoClient.connect(url);

  return client;
}
