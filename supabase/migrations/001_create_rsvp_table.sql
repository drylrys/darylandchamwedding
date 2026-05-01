-- ============================================================
--  Wedding RSVP – Supabase Migration
--  Run this in your Supabase project:
--    Dashboard → SQL Editor → New query → paste & run
-- ============================================================

create table if not exists public.rsvp_responses (
  id            uuid primary key default gen_random_uuid(),
  created_at    timestamptz not null default now(),

  -- Guest info
  full_name     text not null,
  email         text,
  phone         text,

  -- Attendance
  attending     text not null check (attending in ('yes', 'no', 'maybe')),
  guest_count   int  not null default 1 check (guest_count between 1 and 10),

  -- Preferences
  meal_choice   text check (meal_choice in ('beef', 'fish', 'vegetarian', 'none')),

  -- Optional message / dietary note
  message       text
);

-- Allow anyone with the anon key to INSERT (guests submitting the form)
alter table public.rsvp_responses enable row level security;

create policy "Allow public insert"
  on public.rsvp_responses
  for insert
  to anon
  with check (true);

-- Only authenticated users (you, the couple) can read responses
create policy "Allow authenticated read"
  on public.rsvp_responses
  for select
  to authenticated
  using (true);

-- Optional: send a notification email via Supabase Edge Functions or
-- a database webhook. See README_SUPABASE.md for setup instructions.
