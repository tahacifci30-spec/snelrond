-- Telefoonnummer bij contactaanvragen via de website (Snelrond belt terug).
alter table public.demo_requests add column if not exists phone text;
