// ================================================================
//  Staff Registration System — config.js
//  แก้ไขไฟล์นี้เพียงที่เดียว แล้ว commit ขึ้น GitHub
// ================================================================

// ── Supabase ──────────────────────────────────────────────────
//  1. ไปที่ https://supabase.com → New Project
//  2. Project Settings → API
//  3. คัดลอก "Project URL" และ "anon public" key มาใส่ด้านล่าง

const SUPABASE_URL      = 'https://hewzmzpheebheetbalbh.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhld3ptenBoZWViaGVldGJhbGJoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ4MDQxMTUsImV4cCI6MjA5MDM4MDExNX0.m4-KATFgA8lRgrP9THZGiY9-WgvOQ6CD6zuSr5PZQ04';

// ── Admin PIN ─────────────────────────────────────────────────
//  ADMIN_PIN  = รหัสเข้า Admin Panel
//  CLEAR_PIN  = รหัสยืนยันล้างข้อมูล (ปุ่มถังขยะ)

const ADMIN_PIN = '90967';
const CLEAR_PIN = 'ห้องทรมาณป้าจันทร์';
