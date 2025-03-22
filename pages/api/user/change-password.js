import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]";
import { connectToDatabase } from "@/lib/db";
import { verifyPassword, hashPassword } from "@/lib/auth";

async function handler(req, res) {
  if (req.method !== "PATCH") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const session = await getServerSession(req, res, authOptions);

  if (!session) {
    return res.status(401).json({ message: "Not authenticated!" });
  }

  try {
    const userEmail = session.user.email;
    const { oldPassword, newPassword } = req.body;

    if (!oldPassword || !newPassword) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const client = await connectToDatabase();
    const usersCollection = client.db().collection("users");

    const user = await usersCollection.findOne({ email: userEmail });

    if (!user) {
      client.close();
      return res.status(404).json({ message: "User not found." });
    }

    const passwordsAreEqual = await verifyPassword(oldPassword, user.password);

    if (!passwordsAreEqual) {
      client.close();
      return res.status(403).json({ message: "Invalid password." });
    }

    const hashedPassword = await hashPassword(newPassword);

    await usersCollection.updateOne(
      { email: userEmail },
      { $set: { password: hashedPassword } }
    );

    client.close();
    return res.status(200).json({ message: "Password updated!" });
  } catch (error) {
    console.error("API Error:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

export default handler;
