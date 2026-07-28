/* ============================================================
   DeFiMind · Configuração pública

   A chave abaixo é a "publishable" do Supabase. É pública por
   desenho: viaja no JavaScript e qualquer visitante a consegue
   ler. Não é um descuido e não deve ser escondida.

   Quem faz a segurança é a base de dados, através das políticas
   em supabase/migrations/0001_waitlist.sql: dá para inscrever,
   não dá para ler a lista.

   A chave que nunca pode aparecer aqui é a service_role.
   Essa ignora todas as políticas e só pode viver no servidor.
   ============================================================ */
window.DFM_CONFIG = {
  supabaseUrl: 'https://uljdgcipwopowpqwxpef.supabase.co',
  supabaseKey: 'sb_publishable_g7P_V6ky3z5DkjZr_3TPTg_a_-25dzM'
};
