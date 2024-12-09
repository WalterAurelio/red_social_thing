export type noticia = {
  _id?: string;
  titulo: string;
  descripcion: string;
};

export async function getNoticias(): Promise<[noticia]> {
  const res = await fetch('http://localhost:3000/noticias');
  const data = await res.json();
  return data;
}

export async function getNoticiaById(id: string): Promise<noticia> {
  const res = await fetch(`http://localhost:3000/noticias/${id}`);
  const data = await res.json();
  return data;
}
