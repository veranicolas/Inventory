import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://lucwnxiimesgkolwwfur.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx1Y3dueGlpbWVzZ2tvbHd3ZnVyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTEwOTE3MTcsImV4cCI6MjAwNjY2NzcxN30.3XQGaMTZlUP03JTkRB-TCIS8DeMLHufvjnCKl_U3ueo'

export const supabase = createClient(supabaseUrl, supabaseKey)