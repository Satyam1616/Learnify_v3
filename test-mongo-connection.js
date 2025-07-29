import { MongoClient } from 'mongodb';

// Test different connection strings
const connectionStrings = [
  // Current connection string
  "mongodb+srv://satyamjha1616:LearnifyDb@cluster0.dmnqiz5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
  
  // URL encoded password (in case special characters are causing issues)
  "mongodb+srv://satyamjha1616:LearnifyDb@cluster0.dmnqiz5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
  
  // Alternative format
  "mongodb+srv://satyamjha1616:LearnifyDb@cluster0.dmnqiz5.mongodb.net/Learnify?retryWrites=true&w=majority"
];

async function testConnection(uri, index) {
  console.log(`\n🔍 Testing connection ${index + 1}:`);
  console.log(`URI: ${uri.replace(/:[^:@]*@/, ':****@')}`); // Hide password in logs
  
  const client = new MongoClient(uri);
  
  try {
    await client.connect();
    console.log(`✅ Connection ${index + 1}: SUCCESS!`);
    
    // Test database access
    const db = client.db("Learnify");
    const collections = await db.listCollections().toArray();
    console.log(`📁 Available collections: ${collections.map(c => c.name).join(', ') || 'None'}`);
    
    // Test write operation
    const testCollection = db.collection("connection_test");
    const result = await testCollection.insertOne({ 
      test: true, 
      timestamp: new Date(),
      message: "Connection test successful" 
    });
    console.log(`✍️  Test write successful: ${result.insertedId}`);
    
    // Clean up test document
    await testCollection.deleteOne({ _id: result.insertedId });
    console.log(`🧹 Test document cleaned up`);
    
    await client.close();
    return true;
    
  } catch (error) {
    console.log(`❌ Connection ${index + 1}: FAILED`);
    console.log(`Error: ${error.message}`);
    
    if (error.message.includes('bad auth')) {
      console.log(`🔑 Authentication issue - check username/password in MongoDB Atlas`);
    } else if (error.message.includes('network')) {
      console.log(`🌐 Network issue - check Network Access settings in MongoDB Atlas`);
    }
    
    try {
      await client.close();
    } catch (closeError) {
      // Ignore close errors
    }
    return false;
  }
}

async function main() {
  console.log('🚀 MongoDB Atlas Connection Tester');
  console.log('=====================================');
  
  let successfulConnection = false;
  
  for (let i = 0; i < connectionStrings.length; i++) {
    const success = await testConnection(connectionStrings[i], i);
    if (success) {
      successfulConnection = true;
      console.log(`\n🎉 Found working connection! Use connection string ${i + 1}`);
      break;
    }
  }
  
  if (!successfulConnection) {
    console.log('\n❌ All connection attempts failed.');
    console.log('\n🔧 Steps to fix:');
    console.log('1. Go to MongoDB Atlas Dashboard (https://cloud.mongodb.com/)');
    console.log('2. Navigate to "Database Access" → Check user "satyamjha1616"');
    console.log('3. Verify password is exactly "LearnifyDb"');
    console.log('4. Ensure user has "Read and write to any database" permissions');
    console.log('5. Navigate to "Network Access" → Add IP 0.0.0.0/0 (for testing)');
    console.log('6. Or create a new database user with fresh credentials');
  }
}

main().catch(console.error);
