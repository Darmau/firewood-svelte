import {redirect} from "@sveltejs/kit";

export function load({params: { blog }}: { params: { blog: string } }) {
  throw redirect(308, `/blog/${blog}/1`);
}
