import { useTheme } from "../ThemeContext";

const PALETTES = [
  { key:"mint", label:"Mint", dot:"bg-teal-200" },
  { key:"lavender", label:"Lavender", dot:"bg-purple-200" },
  { key:"apricot", label:"Apricot", dot:"bg-yellow-200" },
  { key:"blue", label:"Blue", dot:"bg-blue-200" },
  { key:"green", label:"Green", dot:"bg-emerald-200" },
  { key:"purple", label:"Purple", dot:"bg-violet-200" },
  { key:"pink", label:"Pink", dot:"bg-pink-200" },
  { key:"orange", label:"Orange", dot:"bg-amber-200" },
];

export default function PalettePicker(){
  const { palette, setPalette } = useTheme();
  return (
    <div className="inline-flex flex-wrap items-center gap-2">
      {PALETTES.map(p=>(
        <button
          key={p.key}
          onClick={()=>setPalette(p.key)}
          className={`flex items-center gap-2 rounded-full border border-app bg-card px-3 py-2 text-sm hover:bg-accent-weak transition ${palette===p.key?"ring-accent":""}`}
          title={`${p.label} 팔레트`}
        >
          <span className={`h-3 w-3 rounded-full ${p.dot}`}/>
          {p.label}
        </button>
      ))}
    </div>
  );
}