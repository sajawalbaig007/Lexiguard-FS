// Agreement Service for API calls

const API_BASE_URL = process.env.NODE_ENV === 'development' 
  ? 'http://localhost:5000' 
  : (process.env.NEXT_PUBLIC_API_URL || 'https://lexiguard-fs.onrender.com');

// Get auth token from localStorage
const getAuthToken = () => {
  if (typeof window !== 'undefined') {
    const token = localStorage.getItem('token');
    console.log("Token from localStorage:", token ? "exists" : "not found");
    return token;
  }
  return null;
};

// Common headers with auth
const getAuthHeaders = () => {
  const token = getAuthToken();
  return {
    'Content-Type': 'application/json',
    'Authorization': token ? `Bearer ${token}` : '',
  };
};

// Save or update agreement
export const saveAgreement = async (agreementData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/agreements/save`, {
      method: 'POST',
      headers: getAuthHeaders(),
      body: JSON.stringify(agreementData),
    });

    if (!response.ok) {
      throw new Error('Failed to save agreement');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error saving agreement:', error);
    throw error;
  }
};

// Get all user agreements
export const getUserAgreements = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/agreements`, {
      method: 'GET',
      headers: getAuthHeaders(),
    });

    if (!response.ok) {
      throw new Error('Failed to fetch agreements');
    }

    const data = await response.json();
    return data.agreements;
  } catch (error) {
    console.error('Error fetching agreements:', error);
    throw error;
  }
};

// Get specific agreement
export const getAgreement = async (id) => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/agreements/${id}`, {
      method: 'GET',
      headers: getAuthHeaders(),
    });

    if (!response.ok) {
      throw new Error('Failed to fetch agreement');
    }

    const data = await response.json();
    return data.agreement;
  } catch (error) {
    console.error('Error fetching agreement:', error);
    throw error;
  }
};

// Delete agreement
export const deleteAgreement = async (id) => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/agreements/${id}`, {
      method: 'DELETE',
      headers: getAuthHeaders(),
    });

    if (!response.ok) {
      throw new Error('Failed to delete agreement');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error deleting agreement:', error);
    throw error;
  }
};

// Auto-save draft agreement (debounced)
export const autoSaveDraft = (() => {
  let timeoutId;
  
  return (agreementData, delay = 2000) => {
    clearTimeout(timeoutId);
    
    timeoutId = setTimeout(async () => {
      try {
        await saveAgreement({ ...agreementData, status: 'draft' });
        console.log('Draft auto-saved');
      } catch (error) {
        console.error('Auto-save failed:', error);
      }
    }, delay);
  };
})();
