import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://tcvmbvobrnltkkonxapn.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRjdm1idm9icm5sdGtrb254YXBuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTM3NTUxMDUsImV4cCI6MjAwOTMzMTEwNX0.lu9BUbWlna_6g1gaVIroLQp_JlC2-zMoEkV0B7p1_Hs";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
