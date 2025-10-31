import { createClient } from '@supabase/supabase-js'

// ⚠ Important: Apna Supabase project ka URL aur key paste karo
const supabaseUrl = 'https://moofovlkhqziaybavdni.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1vb2ZvdmxraHF6aWF5YmF2ZG5pIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjE2NDMwNjAsImV4cCI6MjA3NzIxOTA2MH0.2Y3vZ-NqEPVfQrTRivoOSNRXpNX9O1-6LAZdJrAOfdg'

export const supabase = createClient(supabaseUrl, supabaseKey)