import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://rdgqwxwzjzelkrorvkoe.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJkZ3F3eHd6anplbGtyb3J2a29lIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDEyNzc5NDksImV4cCI6MjA1Njg1Mzk0OX0.73q23PTJIpxvbi7nbrcjDAEADmbbNgfKQPnrgUws5Pg';

export const supabase = createClient(supabaseUrl, supabaseKey);
