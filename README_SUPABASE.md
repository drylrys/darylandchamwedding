# Supabase RSVP Backend – Setup Guide

## 1. Create a Supabase Project

1. Go to [supabase.com](https://supabase.com) and sign in.
2. Click **New Project**, fill in the name (e.g. `daryl-cham-wedding`), choose a password and region, then click **Create**.
3. Wait ~2 minutes for provisioning.

## 2. Run the Migration

1. In your project dashboard, go to **SQL Editor → New query**.
2. Paste the contents of `supabase/migrations/001_create_rsvp_table.sql`.
3. Click **Run**.

This creates the `rsvp_responses` table with proper Row Level Security:

- **Guests** (anon) can **INSERT** (submit form).
- **You** (authenticated / service role) can **SELECT** (read all responses).

## 3. Get Your API Keys

1. Go to **Project Settings → API**.
2. Copy **Project URL** → `VITE_SUPABASE_URL`
3. Copy **anon / public key** → `VITE_SUPABASE_ANON_KEY`

## 4. Configure Environment Variables

```bash
cp .env.example .env.local
# then edit .env.local with your real values
```

## 5. Run the App

```bash
npm run dev
```

## 6. View RSVP Responses

- Go to **Supabase Dashboard → Table Editor → rsvp_responses**.
- Or use the SQL Editor: `SELECT * FROM rsvp_responses ORDER BY created_at DESC;`

## 7. Deploy to Vercel / Netlify

Add the two env vars (`VITE_SUPABASE_URL`, `VITE_SUPABASE_ANON_KEY`) in your hosting provider's environment settings before deploying.

## Table Schema

| Column        | Type        | Notes                                   |
| ------------- | ----------- | --------------------------------------- |
| `id`          | uuid        | Auto-generated primary key              |
| `created_at`  | timestamptz | Submission timestamp                    |
| `full_name`   | text        | Required                                |
| `email`       | text        | Optional                                |
| `phone`       | text        | Optional                                |
| `attending`   | text        | `yes` / `no` / `maybe`                  |
| `guest_count` | int         | 1–10                                    |
| `meal_choice` | text        | `beef` / `fish` / `vegetarian` / `none` |
| `message`     | text        | Optional note / dietary info            |
