import "dotenv/config";
import app from "./app.js"
import connectDB from "./config/database.js"

const port = process.env.PORT || 5000;

const startServer =async () => {
try {
await connectDB();
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
    
  });
}catch(err) {
    console.log("MongooDB connection failed",err);
    process.exit(1);
    
  }
};

startServer();



