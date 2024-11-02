const express = require("express"); 
const dotenv = require("dotenv");
const path = require("path");
const connectDB = require("./config/db");
const patientRoutes = require("./Routes/patientRoutes");
const dctrRoutes = require("./Routes/dctrRoutes");
const medRoutes = require("./Routes/medRoutes");
const chatRoutes = require("./Routes/chatRoutes");
const messageRoutes = require("./Routes/messageRoutes");
const reportRoutes = require("./Routes/reportRoutes");
const sendMailRoutes = require("./Routes/sendMailRoutes");

dotenv.config();
connectDB();

const app  = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.get("/", (req, res) => {
    res.send("API is running");
});

app.use("/api/patient", patientRoutes);
app.use("/api/dctr", dctrRoutes);
app.use("/api/med", medRoutes);
app.use("/api/chats", chatRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/report", reportRoutes);
app.use("/api/sendMail", sendMailRoutes);

const server = app.listen(PORT, () => {
    console.log(`API is listening at port = ${PORT}`);
});

const io = require("socket.io")(server, {
    pingTimeout: 60000,
    cors: {
        origin: "http://127.0.0.1:3000",  // Ensure this matches your frontend URL
        methods: ["GET", "POST"],
        allowedHeaders: ["my-custom-header"],
        credentials: true,
    },
});

io.on("connection", (socket) => {
    console.log("Connected to socket.io");

    socket.on("send_message", (data) => {
        console.log("Message received: ", data); // Log received message
        socket.broadcast.emit("receive_msg", data);
    });
});

