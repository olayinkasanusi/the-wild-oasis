import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://uwrghcifmvhsttlfkhgv.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV3cmdoY2lmbXZoc3R0bGZraGd2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjAyMjQ0NDksImV4cCI6MjA3NTgwMDQ0OX0.pbEa7P9WdzOBNwhs8RSnf80l95ivz9OHxeKxnXi1nW0";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
