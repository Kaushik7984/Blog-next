import { MongoClient } from "mongodb";

const mongoURI =
  "mongodb+srv://blogapp:blogapp@cluster0.1h7hro3.mongodb.net/blogApp?retryWrites=true&w=majority";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email, name, message } = req.body;

    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !message ||
      message.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid input." });
      return;
    }
    const newMessage = {
      email,
      name,
      message,
    };
    let client;

    try {
      client = await MongoClient.connect(mongoURI);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Failed to connect to database." });
      return;
    }

    const db = client.db();

    try {
      const result = await db.collection("messages").insertOne(newMessage);
      newMessage.id = result.insertedId;
    } catch (error) {
      console.error(error);
      client.close();
      res.status(500).json({ message: "Failed to send message." });
      return;
    }

    res
      .status(201)
      .json({ message: "Successfully stored message!", message: newMessage });
  }
}
