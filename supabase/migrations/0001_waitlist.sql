-- ============================================================
-- DeFiMind · Lista de espera
--
-- A chave "publishable" vai dentro do JavaScript da página, o que
-- significa que qualquer visitante a consegue ler. Partimos por isso
-- do princípio de que ela é conhecida por toda a gente, incluindo
-- quem tenha más intenções, e é a base de dados que faz a defesa.
--
-- A regra que interessa: pode-se inscrever, não se pode ler.
-- Sem política de SELECT, ninguém consegue descarregar a lista de
-- emails a partir do browser, mesmo tendo a chave.
-- ============================================================

create table if not exists public.waitlist (
  id          uuid        primary key default gen_random_uuid(),
  email       text        not null,
  lang        text        not null default 'pt',
  source      text        not null default 'landing',
  created_at  timestamptz not null default now(),

  constraint waitlist_email_unique unique (email),

  -- valida o formato do lado do servidor: o browser pode ser contornado
  constraint waitlist_email_format
    check (email ~* '^[^@[:space:]]+@[^@[:space:]]+\.[^@[:space:]]{2,}$'),

  -- trava payloads absurdos
  constraint waitlist_email_len
    check (char_length(email) between 6 and 254),

  constraint waitlist_lang_ok
    check (lang in ('pt', 'en', 'es')),

  constraint waitlist_source_len
    check (char_length(source) <= 40)
);

create index if not exists waitlist_created_at_idx
  on public.waitlist (created_at desc);

-- ------------------------------------------------------------
-- Permissões
-- ------------------------------------------------------------
alter table public.waitlist enable row level security;

-- limpamos tudo e damos só o estritamente necessário
revoke all on public.waitlist from anon, authenticated;
grant insert on public.waitlist to anon;

drop policy if exists "qualquer pessoa se pode inscrever" on public.waitlist;
create policy "qualquer pessoa se pode inscrever"
  on public.waitlist
  for insert
  to anon
  with check (true);

-- Repare-se no que NÃO existe aqui: nenhuma política de select,
-- update ou delete. A lista só é legível com a chave service_role,
-- que nunca sai do servidor, ou pelo painel do Supabase.

comment on table public.waitlist is
  'Inscrições na lista de espera. Inserção pública, leitura apenas com service_role.';
