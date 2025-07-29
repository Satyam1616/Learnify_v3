import { MongoClient } from 'mongodb';

// Quick test to verify MongoDB connection and form submission
async function testFormsConnection() {
  console.log('🧪 Testing Contact Forms MongoDB Connection');
  console.log('==========================================');
  
  const uri = "mongodb+srv://LearnifyDb:LearnifyDb@cluster0.dmnqiz5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
  const client = new MongoClient(uri);
  
  try {
    // Test connection
    console.log('🔌 Connecting to MongoDB Atlas...');
    await client.connect();
    console.log('✅ Connected successfully!');
    
    const db = client.db("Learnify");
    
    // Test contact form submission
    console.log('\n📝 Testing contact form submission...');
    const contactCollection = db.collection("contacts");
    const contactResult = await contactCollection.insertOne({
      fullName: "Test User",
      email: "test@example.com",
      phoneNumber: "1234567890",
      programInterest: "Job-Bridge Program",
      message: "This is a test contact form submission.",
      createdAt: new Date()
    });
    console.log(`✅ Contact form test successful! ID: ${contactResult.insertedId}`);
    
    // Test newsletter subscription
    console.log('\n📧 Testing newsletter subscription...');
    const newsletterCollection = db.collection("newsletter_subscriptions");
    const newsletterResult = await newsletterCollection.insertOne({
      email: "newsletter-test@example.com",
      createdAt: new Date()
    });
    console.log(`✅ Newsletter test successful! ID: ${newsletterResult.insertedId}`);
    
    // Clean up test data
    console.log('\n🧹 Cleaning up test data...');
    await contactCollection.deleteOne({ _id: contactResult.insertedId });
    await newsletterCollection.deleteOne({ _id: newsletterResult.insertedId });
    console.log('✅ Test data cleaned up');
    
    console.log('\n🎉 ALL TESTS PASSED! Your contact forms are ready to work!');
    console.log('\nNext steps:');
    console.log('1. Start your server: npm run dev');
    console.log('2. Visit http://localhost:5000/contact-us');
    console.log('3. Test the contact form and newsletter subscription');
    
  } catch (error) {
    console.log('\n❌ Connection failed!');
    console.log(`Error: ${error.message}`);
    
    if (error.message.includes('bad auth')) {
      console.log('\n🔑 AUTHENTICATION ERROR - Follow these steps:');
      console.log('1. Go to MongoDB Atlas Dashboard (https://cloud.mongodb.com/)');
      console.log('2. Navigate to "Database Access"');
      console.log('3. Find user "satyamjha1616" and click "Edit"');
      console.log('4. Reset password to exactly: LearnifyDb');
      console.log('5. Ensure user has "Read and write to any database" permissions');
      console.log('6. Navigate to "Network Access" and add IP: 0.0.0.0/0');
      console.log('7. Wait 2-3 minutes for changes to take effect');
      console.log('8. Run this test again: node test-forms.js');
    }
  } finally {
    await client.close();
  }
}

testFormsConnection().catch(console.error);
