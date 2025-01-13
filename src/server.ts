import app from './app';
import connectDB from './config/db';

const PORT = process.env.PORT || 3000;

const startServer = async () => {
  await connectDB();
  console.log('Server started...');
};

startServer();

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
