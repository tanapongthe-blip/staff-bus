// ================================================================
//  Staff Registration System — config.js
//  แก้ไขไฟล์นี้เพียงที่เดียว แล้ว commit ขึ้น GitHub
// ================================================================

// ── Supabase ──────────────────────────────────────────────────
//  1. ไปที่ https://supabase.com → New Project
//  2. Project Settings → API
//  3. คัดลอก "Project URL" และ "anon public" key มาใส่ด้านล่าง

const SUPABASE_URL      = '';   // เช่น 'https://abcxyz.supabase.co'
const SUPABASE_ANON_KEY = '';   // เช่น 'eyJhbGciOiJIUzI1NiIsInR5...'

// ── Admin PIN ─────────────────────────────────────────────────
//  รหัสสำหรับกดเข้า Admin Panel และยืนยันล้างข้อมูล

const ADMIN_PIN = '1234';   // เปลี่ยนเป็นรหัสที่ต้องการ
