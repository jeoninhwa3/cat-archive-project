import supabase from '../supabaseClient';

export const getUser = async () => {
  try {
    const {
      data: { user },
      error
    } = await supabase.auth.getUser();

    if (error) {
      console.log('Error:', error);
      return null;
    }
    return user;
  } catch (error) {
    console.log('Error:', error);
    return null;
  }
};
