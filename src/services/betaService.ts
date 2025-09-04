import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '@/lib/firebase';

export interface BetaSignupData {
  email: string;
  timestamp: Date;
  status: 'pending' | 'approved' | 'rejected';
}

export class BetaService {
  private static readonly COLLECTION_NAME = 'beta_signups';

  static async signup(email: string): Promise<void> {
    try {
      const signupData: Omit<BetaSignupData, 'timestamp'> = {
        email: email.toLowerCase().trim(),
        status: 'pending'
      };

      await addDoc(collection(db, this.COLLECTION_NAME), {
        ...signupData,
        timestamp: serverTimestamp()
      });
    } catch (error) {
      console.error('Error adding beta signup:', error);
      throw new Error('Failed to submit beta signup. Please try again.');
    }
  }

  static validateEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
}
