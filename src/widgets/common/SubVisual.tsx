type SubVisualProps = {
    title : string;
    desc?: string;
    backgroundClass?:string;
}

export default function Subvisual({title, desc, backgroundClass=""}: SubVisualProps){
    return (
      <div className={`sub-top ${backgroundClass}`}>
        <div className="sub-top-inner">
          <h2>
            {title}{desc && <span>{desc}</span>}
          </h2>
        </div>
      </div>
    );
}