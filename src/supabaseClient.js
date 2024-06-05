import { createClient } from '@supabase/supabase-js';

const SUPABASE_PROJECT_URL = 'https://uvvzyeuostwqkcufncyy.supabase.co';
const SUPABASE_ANON_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV2dnp5ZXVvc3R3cWtjdWZuY3l5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTczMzM1NjEsImV4cCI6MjAzMjkwOTU2MX0.SnwMnw2ECbx1qP5uJDccZFWKNbdrlfY9iJjv4HjJ2a0';

const supabase = createClient(SUPABASE_PROJECT_URL, SUPABASE_ANON_KEY);

export default supabase;
