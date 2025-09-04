import { BetaService } from './services/betaService';
import { AlternativeEmailService } from './services/alternativeEmailService';
import { DebugService } from './services/debugService';

async function testBetaSignup() {
  console.log('🧪 Starting Beta Signup Tests...\n');

  // Test 1: Environment Variables
  console.log('📋 Test 1: Environment Variables');
  DebugService.logEnvironmentVariables();
  console.log('');

  // Test 2: Email Validation
  console.log('📧 Test 2: Email Validation');
  const testEmails = [
    'valid@example.com',
    'invalid-email',
    'another@valid.com',
    ''
  ];

  testEmails.forEach(email => {
    const isValid = BetaService.validateEmail(email);
    console.log(`  ${email}: ${isValid ? '✅ Valid' : '❌ Invalid'}`);
  });
  console.log('');

  // Test 3: Firebase Connection
  console.log('🔥 Test 3: Firebase Connection');
  try {
    await BetaService.signup('test@example.com');
    console.log('  ✅ Firebase save successful');
  } catch (error) {
    console.log('  ❌ Firebase save failed:', error);
  }
  console.log('');

  // Test 4: EmailJS Connection
  console.log('📧 Test 4: EmailJS Connection');
  try {
    const emailSent = await DebugService.testEmailJSConnection();
    if (emailSent) {
      console.log('  ✅ EmailJS test successful');
    } else {
      console.log('  ❌ EmailJS test failed');
    }
  } catch (error) {
    console.log('  ❌ EmailJS test error:', error);
  }
  console.log('');

  // Test 5: Full Beta Signup Flow
  console.log('🚀 Test 5: Full Beta Signup Flow');
  const testEmail = `test-${Date.now()}@example.com`;

  try {
    console.log(`  Testing with email: ${testEmail}`);

    // Step 1: Validate email
    const isValid = BetaService.validateEmail(testEmail);
    console.log(`  Step 1 - Email validation: ${isValid ? '✅' : '❌'}`);

    if (isValid) {
      // Step 2: Save to Firebase
      await BetaService.signup(testEmail);
      console.log('  Step 2 - Firebase save: ✅');

      // Step 3: Send email
      await AlternativeEmailService.sendBetaSignupEmail(testEmail);
      console.log('  Step 3 - Email send: ✅');
    }

    console.log('  ✅ Full flow completed successfully');
  } catch (error) {
    console.log('  ❌ Full flow failed:', error);
  }

  console.log('\n🎯 Beta Signup Tests Complete!');
}

// Run the tests
testBetaSignup().catch(console.error);
