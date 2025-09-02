import { Mail, Linkedin, ArrowRight } from "lucide-react";
import Section from "./Section";
import Card from "./Card";

const Contact = () => (
<Section id="contact" title="Let’s Build Something" kicker="Contact">
<Card>
<form
onSubmit={(e) => {
e.preventDefault();
const data = new FormData(e.currentTarget);
const name = data.get("name");
const email = data.get("email");
const message = data.get("message");
const mailto = `mailto:ramreddymandha87@gamil.com?subject=Portfolio%20Inquiry%20from%20${encodeURIComponent(
name
)}&body=${encodeURIComponent(message + "\n\nReply to: " + email)}`;
window.location.href = mailto;
}}
className="grid md:grid-cols-2 gap-4"
>
<div className="md:col-span-1">
<label className="text-sm">Your name</label>
<input name="name" required className="mt-1 w-full rounded-xl border border-zinc-200/60 dark:border-zinc-800/60 bg-white/70 dark:bg-zinc-900/60 px-3 py-2" />
</div>
<div className="md:col-span-1">
<label className="text-sm">Email</label>
<input type="email" name="email" required className="mt-1 w-full rounded-xl border border-zinc-200/60 dark:border-zinc-800/60 bg-white/70 dark:bg-zinc-900/60 px-3 py-2" />
</div>
<div className="md:col-span-2">
<label className="text-sm">Message</label>
<textarea name="message" rows={5} required className="mt-1 w-full rounded-xl border border-zinc-200/60 dark:border-zinc-800/60 bg-white/70 dark:bg-zinc-900/60 px-3 py-2" />
</div>
<div className="md:col-span-2 flex items-center justify-between gap-4">
<div className="flex items-center gap-4 text-sm">
<a href="mailto:you@example.com" className="inline-flex items-center gap-2 hover:underline"><Mail className="h-4 w-4"/> you@example.com</a>
<a href="#" className="inline-flex items-center gap-2 hover:underline"><Linkedin className="h-4 w-4"/> LinkedIn</a>
</div>
<button className="inline-flex items-center gap-2 rounded-xl bg-black text-white dark:bg-white dark:text-black px-5 py-2 text-sm font-semibold">
Send <ArrowRight className="h-4 w-4" />
</button>
</div>
</form>
</Card>
</Section>
);
export default Contact;