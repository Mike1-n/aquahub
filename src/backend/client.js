import { createClient } from '@supabase/supabase-js'

const project_url = "https://bwmiwwmsqoobpdxnllsa.supabase.co"
const anon_key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ3bWl3d21zcW9vYnBkeG5sbHNhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjcyNjkyNTAsImV4cCI6MjA0Mjg0NTI1MH0.GGazSxiMFzbs2aLB5e3Lwm4Nj8rDYcqe0vZQk5XhbwM"

export const supabase = createClient(project_url, anon_key)