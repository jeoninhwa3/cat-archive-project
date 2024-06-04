import supabase from '../supabaseClient';
// import { v4 as uuidv4 } from 'uuid';

export const getData = async () => {
  const { data } = await supabase.from('test').select('*').eq('uuid', 1111);
  return data;
};
