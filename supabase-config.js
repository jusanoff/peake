// supabase-config.js
const { createClient } = supabase;

const supabaseUrl = 'https://ndwipmobkqdvtaajqdez.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5kd2lwbW9ia3FkdnRhYWpxZGV6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg3OTgxOTksImV4cCI6MjA5NDM3NDE5OX0.LJZyqxk7Zlezy7zQ4CRTUpzGwO1OQem7S9lMYt5pwnE';

// Убираем const перед _db, чтобы она стала глобальной
window._db = createClient(supabaseUrl, supabaseKey);

window.api = {
    login: async (username, password) => {
        return await window._db
            .from('app_users')
            .select('*')
            .eq('username', username.toLowerCase().trim())
            .eq('password', password.trim())
            .maybeSingle();
    }
    // ... если есть другие функции (getOrders и т.д.), добавьте их ниже
}