const API_BASE_URL = 'http://localhost:5000/api/payments';

export const paymentService = {
  createOrder: async (paymentData: any) => {
    const response = await fetch(`${API_BASE_URL}/create-order`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(paymentData)
    });
    
    if (!response.ok) {
      throw new Error('Failed to create payment order');
    }
    
    return response.json();
  },

  verifyPayment: async (paymentData: any) => {
    const response = await fetch(`${API_BASE_URL}/verify-payment`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(paymentData)
    });

    if (!response.ok) {
      throw new Error('Payment verification failed');
    }

    return response.json();
  }
};
