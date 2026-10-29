import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://kcvbjxolfllhnaaxvozv.supabase.co";
const supabaseKey = "sb_publishable_Aspxs5ULRXbKOIZwYNZ6uw_ws0RYkbb";

export const supabase = createClient(supabaseUrl,supabaseKey);