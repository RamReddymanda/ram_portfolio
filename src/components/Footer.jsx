import { Github, Linkedin } from "lucide-react";
const Footer = () => (
<footer className="py-10">
<div className="max-w-6xl mx-auto px-4 flex items-center justify-between text-sm text-zinc-500">
<span>© {new Date().getFullYear()} Ram Reddy</span>
<div className="flex items-center gap-3">
<a href="#" className="inline-flex items-center gap-1 hover:underline"><Github className="h-4 w-4"/> GitHub</a>
<a href="#" className="inline-flex items-center gap-1 hover:underline"><Linkedin className="h-4 w-4"/> LinkedIn</a>
</div>
</div>
</footer>
);
export default Footer;