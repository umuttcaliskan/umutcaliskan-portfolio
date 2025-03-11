import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Umut Çalışkan - Portföy" },
    { name: "description", content: "Umut Çalışkan'ın kişisel portföy ve biyografi sayfası. Projeler ve iletişim bilgileri." },
    { name: "keywords", content: "Umut Çalışkan, yazılım geliştirici, web developer, portföy, biyografi" },
  ];
}

export default function Home() {
  return <Welcome />;
}
