import { createClient } from "@supabase/supabase-js";

const supabaseKey: string = process.env.NEXT_PUBLIC_SUPABASE_ANON;
const supabaseUrl: string = process.env.NEXT_PUBLIC_SUPABASE_URL;

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
