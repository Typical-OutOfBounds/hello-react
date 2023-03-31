import { createClient } from "@supabase/supabase-js"

// Create a single supabase client for interacting with your database
const supabaseUrl = 'https://xpuddzfchuxnerrbiccw.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhwdWRkemZjaHV4bmVycmJpY2N3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzc3MDY3ODAsImV4cCI6MTk5MzI4Mjc4MH0.EfiLEyCCYQaxwqVi3ac2wTSxksiL5cT1F04sJz-jbbI';

export const supabase = createClient(supabaseUrl, supabaseKey)